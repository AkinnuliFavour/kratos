"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string; // 'student' or 'agent'

  // 1. Sign up the user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  if (data.user) {
    // 2. Insert the role into the profiles table
    // Note: We are assuming the 'profiles' table exists and has a 'roles' array column.
    // We append the new role to the array.
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({
        id: data.user.id,
        email: email,
        roles: [role],
      });

    // If there's an error (e.g., profile already exists which shouldn't happen on fresh signup,
    // or RLS issues), we might want to handle it.
    // However, for a simple flow, if the user is created, we can try to update if insert fails
    // or just log it.
    if (profileError) {
      console.error("Error creating profile:", profileError);
      // Optional: Delete the user if profile creation fails to maintain consistency
      // await supabase.auth.admin.deleteUser(data.user.id);
      // return { error: "Failed to create user profile." };
    }
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/auth/signin");
}
