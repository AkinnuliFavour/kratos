import { Listing } from "../types/Listings";

export async function fetchListings(): Promise<Listing> {
  try {
    const res = await fetch("/data/Listings.json", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Listings");
    }

    const data: Partial<Listing> = await res.json();
    return {
      saved_listings: data.saved_listings ?? [],
      recommended_listings: data.recommended_listings ?? [],
    };
  } catch (err: unknown) {
    console.error("Failed to fetch Listings:", err);
    return { saved_listings: [], recommended_listings: [] };
  }
}
