"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { signup } from "../actions";
import { toast } from "sonner";

export default function SignUpPage() {
  const [view, setView] = useState<"selection" | "email">("selection");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await signup(formData);
      if (result?.error) {
        toast.error(result.error);
      }
    });
  };

  const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );

  if (view === "email") {
    return (
      <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-4 duration-300">
        <h2 className="text-2xl font-semibold mb-2">Create a new account</h2>
        <p className="text-sm text-muted-foreground mb-8">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-green-600 hover:underline">
            Sign in
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>I am a...</Label>
            <RadioGroup defaultValue="student" name="role" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="agent" id="agent" />
                <Label htmlFor="agent">Agent</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              className="h-12 border-green-600"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              className="h-12 border-green-600"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-12 bg-green-600 hover:bg-green-700 text-white text-base mt-4"
          >
            {isPending ? "Signing Up..." : "Sign Up"}
          </Button>
          <Button
            variant="ghost"
            type="button"
            onClick={() => setView("selection")}
            className="w-full mt-2"
          >
            Back
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-left-4 duration-300">
      <h2 className="text-2xl font-semibold mb-2">Create a new account</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Already have an account?{" "}
        <Link href="/auth/signin" className="text-green-600 hover:underline">
          Sign in
        </Link>
      </p>

      <div className="space-y-4">
        <Button
          variant="outline"
          className="w-full h-12 text-base font-normal justify-start px-4 border-green-600 hover:bg-green-50"
        >
          <GoogleIcon />
          <span className="flex-1 text-center">Continue with Google</span>
        </Button>

        <Button
          variant="outline"
          className="w-full h-12 text-base font-normal justify-start px-4 border-green-600 hover:bg-green-50"
          onClick={() => setView("email")}
        >
          <Mail className="w-5 h-5 mr-2" />
          <span className="flex-1 text-center">Continue with Email</span>
        </Button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full h-12 text-base font-normal justify-start px-4 border-green-600 hover:bg-green-50"
        >
          <Phone className="w-5 h-5 mr-2" />
          <span className="flex-1 text-center">Continue with Phone</span>
        </Button>
      </div>
    </div>
  );
}
