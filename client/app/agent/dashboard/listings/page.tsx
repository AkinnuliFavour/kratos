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
      imageUrl:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    },
    {
      id: "2",
      title: "Modern Loft Apartment",
      address: "45 Victoria Island Avenue",
      price: 250000,
      status: "active" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
    },
    {
      id: "3",
      title: "Luxury Villa Estate",
      address: "12 Banana Island Road",
      price: 450000,
      status: "pending" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    },
    {
      id: "4",
      title: "Seaside Penthouse",
      address: "78 Lekki Phase 1",
      price: 320000,
      status: "active" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    },
    {
      id: "5",
      title: "Cozy Family Home",
      address: "21 Ikeja GRA",
      price: 150000,
      status: "active" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    },
    {
      id: "6",
      title: "Executive Duplex",
      address: "56 Ikoyi Crescent",
      price: 380000,
      status: "pending" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    },
    {
      id: "7",
      title: "Downtown Studio",
      address: "89 Yaba Road",
      price: 95000,
      status: "active" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    },
    {
      id: "8",
      title: "Garden View Bungalow",
      address: "15 Surulere Avenue",
      price: 135000,
      status: "sold" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    },
    {
      id: "9",
      title: "Skyline Tower Residence",
      address: "42 Eko Atlantic City",
      price: 550000,
      status: "active" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
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
