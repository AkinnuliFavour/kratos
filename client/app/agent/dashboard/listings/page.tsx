"use client";

import ListingCard from "@/components/agent/ListingCard";

export default function ListingsPage() {
  const sampleListings = [
    {
      id: "1",
      title: "Royal Crown Castle",
      address: "33 Off Ola Crescent",
      price: 180000,
      status: "sold" as const,
      imageUrl: "/placeholder-property.jpg",
    },
    {
      id: "2",
      title: "Royal Crown Castle",
      address: "33 Off Ola Crescent",
      price: 180000,
      status: "active" as const,
      imageUrl: "/placeholder-property.jpg",
    },
    {
      id: "3",
      title: "Royal Crown Castle",
      address: "33 Off Ola Crescent",
      price: 180000,
      status: "pending" as const,
      imageUrl: "/placeholder-property.jpg",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#1A2C1A] mb-8">Listings</h1>
        <button className="mb-8 px-4 py-2 bg-[#10B981] text-white rounded-md hover:bg-[#0f9e6e] transition-colors">
          + Add New Listing
        </button>
      </div>
      <div className="space-y-4 w-full">
        {sampleListings.map((listing) => (
          <ListingCard
            key={listing.id}
            {...listing}
            onViewStatistics={() => console.log("View statistics", listing.id)}
            onPreview={() => console.log("Preview", listing.id)}
          />
        ))}
      </div>
    </div>
  );
}
