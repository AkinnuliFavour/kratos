"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  PropertyPreviewData,
  PropertyPreviewModal,
} from "@/components/agent/PropertyPreviewModal";
import { cn } from "@/lib/utils";

export type ListingStatus = "active" | "pending" | "sold";

interface ListingCardProps {
  id: string;
  title: string;
  address: string;
  price: number;
  status: ListingStatus;
  imageUrl: string;
  onViewStatistics?: () => void;
  onPreview?: () => void;
  preview: PropertyPreviewData;
}

const statusConfig = {
  active: {
    label: "Active",
    className: "bg-green-600 hover:bg-green-700 text-white",
  },
  pending: {
    label: "Pending",
    className: "bg-red-500 hover:bg-red-600 text-white",
  },
  sold: {
    label: "Sold off",
    className: "bg-orange-500 hover:bg-orange-600 text-white",
  },
};

export default function ListingCard({
  title,
  address,
  price,
  status,
  imageUrl,
  onPreview,
  preview,
}: ListingCardProps) {
  const [open, setOpen] = useState(false);
  const statusInfo = statusConfig[status];

  return (
    <Card className="flex flex-col overflow-hidden border-2 border-gray-200 rounded-2xl bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full max-w-[400px] mx-auto">
      {/* Property Image */}
      <div className="relative w-full h-64 bg-linear-to-br from-gray-100 to-gray-200">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        {/* Status Badge - Positioned at top right */}
        <Badge
          className={cn(
            "absolute top-3 right-3 rounded-full px-6 py-1 text-sm font-semibold uppercase tracking-wide shadow-md",
            statusInfo.className
          )}
        >
          {statusInfo.label}
        </Badge>
      </div>

      {/* Property Details */}
      <div className="flex flex-col items-center text-center px-6">
        <h3 className="text-xl font-bold text-[#1A2C1A]">{title}</h3>
        <p className="text-base text-gray-600">{address}</p>

        {/* Price */}
        <p className="text-2xl font-bold text-[#1A2C1A] mt-4">
          ₦{price.toLocaleString()}
        </p>
      </div>

      {/* Preview Button */}
      <div className="px-6 pb-6 mt-2">
        <button
          onClick={() => {
            onPreview?.();
            setOpen(true);
          }}
          className="w-full py-2 bg-white border-2 border-gray-300 rounded-full text-lg font-semibold text-gray-700 hover:bg-gray-50 hover:border-[#14A3A3] hover:text-[#14A3A3] transition-all duration-200"
          aria-label="Preview listing"
        >
          Preview
        </button>
      </div>

      <PropertyPreviewModal open={open} onOpenChange={setOpen} data={preview} />
    </Card>
  );
}
