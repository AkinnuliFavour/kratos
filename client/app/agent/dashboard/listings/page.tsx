"use client";

import ListingCard from "@/components/agent/ListingCard";
import { PropertyPreviewData } from "@/components/agent/PropertyPreviewModal";

export default function ListingsPage() {
  const basePreview: PropertyPreviewData = {
    title: "The Haven Lodge",
    subtitle: "33 Off Ola Crescent, Akure",
    description:
      "The Haven Lodge offers modern, self-contained apartments designed specifically for students who value comfort and proximity to campus. Each unit comes with reliable utilities, flexible layouts, and comfortable furnishings. The compound is fully fenced with a security gate, constant water supply, and a calm environment ideal for studying.",
    images: [
      { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop", alt: "Facade" },
      { src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop", alt: "Interior" },
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop", alt: "Lobby" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", alt: "Bedroom" },
    ],
    location: {
      area: "South Gate, FUTA Akure",
      city: "Ondo State, Nigeria",
      map: { lat: 7.30076, lng: 5.1376, label: "The Haven Lodge" },
    },
    agent: {
      name: "John Mikel (Agency)",
      role: "Letting Agent",
      phone: "+234 808 555 1212",
      whatsapp: "+234 808 555 1212",
      email: "john.mikel@agency.com",
      note: "Get in touch and book a viewing. Pricing is flexible for longer stays.",
    },
    stats: {
      available: 6,
      bedrooms: 2,
      bathrooms: 2,
      kitchen: 1,
      size: "1.1k ft²",
      priceLabel: "₦180,000 / year",
    },
    features: [
      { icon: "generator", label: "Gas Generator" },
      { icon: "workspace", label: "Workspace" },
      { icon: "wardrobe", label: "Wardrobe" },
      { icon: "airConditioner", label: "Air Conditioner" },
      { icon: "fence", label: "Fence" },
      { icon: "toilet", label: "Toilet" },
    ],
    videos: [
      {
        title: "Exterior Walkthrough",
        thumbnail: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      },
      {
        title: "Living Room Tour",
        thumbnail: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        title: "Amenities Overview",
        thumbnail: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      },
    ],
  };

  const sampleListings = [
    {
      id: "1",
      title: "Royal Crown Castle",
      address: "33 Off Ola Crescent",
      price: 180000,
      status: "sold" as const,
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      preview: basePreview,
    },
    {
      id: "2",
      title: "Modern Loft Apartment",
      address: "45 Victoria Island Avenue",
      price: 250000,
      status: "active" as const,
      imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
      preview: {
        ...basePreview,
        title: "Modern Loft Apartment",
        subtitle: "45 Victoria Island Avenue, Lagos",
        stats: { ...basePreview.stats, priceLabel: "₦250,000 / year", bedrooms: 1, bathrooms: 1, available: 3 },
        location: {
          area: "Victoria Island",
          city: "Lagos, Nigeria",
          map: { lat: 6.4292, lng: 3.4219, label: "Modern Loft Apartment" },
        },
      },
    },
    {
      id: "3",
      title: "Luxury Villa Estate",
      address: "12 Banana Island Road",
      price: 450000,
      status: "pending" as const,
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      preview: {
        ...basePreview,
        title: "Luxury Villa Estate",
        subtitle: "12 Banana Island Road, Lagos",
        stats: { ...basePreview.stats, priceLabel: "₦450,000 / year", bedrooms: 4, bathrooms: 4, available: 2, size: "2.4k ft²" },
        location: {
          area: "Banana Island",
          city: "Lagos, Nigeria",
          map: { lat: 6.4495, lng: 3.4437, label: "Luxury Villa Estate" },
        },
      },
    },
    {
      id: "4",
      title: "Seaside Penthouse",
      address: "78 Lekki Phase 1",
      price: 320000,
      status: "active" as const,
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      preview: {
        ...basePreview,
        title: "Seaside Penthouse",
        subtitle: "78 Lekki Phase 1, Lagos",
        stats: { ...basePreview.stats, priceLabel: "₦320,000 / year", bedrooms: 3, bathrooms: 3, available: 4 },
        location: {
          area: "Lekki Phase 1",
          city: "Lagos, Nigeria",
          map: { lat: 6.4497, lng: 3.4723, label: "Seaside Penthouse" },
        },
      },
    },
    {
      id: "5",
      title: "Cozy Family Home",
      address: "21 Ikeja GRA",
      price: 150000,
      status: "active" as const,
      imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      preview: {
        ...basePreview,
        title: "Cozy Family Home",
        subtitle: "21 Ikeja GRA, Lagos",
        stats: { ...basePreview.stats, priceLabel: "₦150,000 / year", bedrooms: 3, bathrooms: 2, available: 5, size: "1.5k ft²" },
        location: {
          area: "Ikeja GRA",
          city: "Lagos, Nigeria",
          map: { lat: 6.6018, lng: 3.3515, label: "Cozy Family Home" },
        },
      },
    },
    {
      id: "6",
      title: "Executive Duplex",
      address: "56 Ikoyi Crescent",
      price: 380000,
      status: "pending" as const,
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      preview: {
        ...basePreview,
        title: "Executive Duplex",
        subtitle: "56 Ikoyi Crescent, Lagos",
        stats: { ...basePreview.stats, priceLabel: "₦380,000 / year", bedrooms: 4, bathrooms: 4, available: 1, size: "2.0k ft²" },
        location: {
          area: "Ikoyi",
          city: "Lagos, Nigeria",
          map: { lat: 6.4549, lng: 3.4281, label: "Executive Duplex" },
        },
      },
    },
    {
      id: "7",
      title: "Downtown Studio",
      address: "89 Yaba Road",
      price: 95000,
      status: "active" as const,
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      preview: {
        ...basePreview,
        title: "Downtown Studio",
        subtitle: "89 Yaba Road, Lagos",
        stats: { ...basePreview.stats, priceLabel: "₦95,000 / year", bedrooms: 1, bathrooms: 1, available: 7, size: "750 ft²" },
        location: {
          area: "Yaba",
          city: "Lagos, Nigeria",
          map: { lat: 6.5095, lng: 3.3781, label: "Downtown Studio" },
        },
      },
    },
    {
      id: "8",
      title: "Garden View Bungalow",
      address: "15 Surulere Avenue",
      price: 135000,
      status: "sold" as const,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      preview: {
        ...basePreview,
        title: "Garden View Bungalow",
        subtitle: "15 Surulere Avenue, Lagos",
        stats: { ...basePreview.stats, priceLabel: "₦135,000 / year", bedrooms: 2, bathrooms: 2, available: 0, size: "1.2k ft²" },
        location: {
          area: "Surulere",
          city: "Lagos, Nigeria",
          map: { lat: 6.5006, lng: 3.3582, label: "Garden View Bungalow" },
        },
      },
    },
    {
      id: "9",
      title: "Skyline Tower Residence",
      address: "42 Eko Atlantic City",
      price: 550000,
      status: "active" as const,
      imageUrl: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop",
      preview: {
        ...basePreview,
        title: "Skyline Tower Residence",
        subtitle: "42 Eko Atlantic City, Lagos",
        stats: { ...basePreview.stats, priceLabel: "₦550,000 / year", bedrooms: 3, bathrooms: 3, available: 3, size: "1.9k ft²" },
        location: {
          area: "Eko Atlantic",
          city: "Lagos, Nigeria",
          map: { lat: 6.4167, lng: 3.4067, label: "Skyline Tower Residence" },
        },
      },
    },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-[#1A2C1A] mb-8">Listings</h1>
        <button className="mb-8 px-4 py-2 bg-[#0F8F8F] text-white rounded-md hover:bg-[#14A3A3] transition-colors">
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
