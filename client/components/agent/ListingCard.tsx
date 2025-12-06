"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
}

const statusConfig = {
  active: {
    label: "Active",
    className: "bg-green-600 hover:bg-green-700 text-white",
  },
  pending: {
    label: "Pending Approval",
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
  onViewStatistics,
  onPreview,
}: ListingCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <Card className="flex flex-col overflow-hidden border-2 border-gray-200 rounded-2xl bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full max-w-[400px] mx-auto">
      {/* Property Image */}
      <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200">
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
      </div>

      {/* Property Details */}
      <div className="flex flex-col items-center text-center p-6 space-y-3">
        <h3 className="text-2xl font-bold text-[#1A2C1A]">{title}</h3>
        <p className="text-base text-gray-600">{address}</p>

        {/* Price */}
        <p className="text-4xl font-bold text-[#1A2C1A] pt-2">
          ₦{price.toLocaleString()}
        </p>

        {/* Status Badge */}
        <Badge
          className={cn(
            "mt-2 rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide",
            statusInfo.className
          )}
        >
          {statusInfo.label}
        </Badge>
      </div>

      {/* Preview Button */}
      <div className="px-6 pb-6">
        <button
          onClick={onPreview}
          className="w-full py-4 bg-white border-2 border-gray-300 rounded-full text-lg font-semibold text-gray-700 hover:bg-gray-50 hover:border-[#10B981] hover:text-[#10B981] transition-all duration-200"
          aria-label="Preview listing"
        >
          Preview
        </button>
      </div>
    </Card>
  );
}
