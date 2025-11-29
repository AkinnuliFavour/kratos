"use client";

import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
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
    <Card className="flex flex-col lg:flex-row items-center gap-4 p-4 border-2 border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow">
      {/* Property Image */}
      <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      {/* Property Details */}
      <div className="flex-1 min-w-0 text-center lg:text-left">
        <h3 className="text-lg font-semibold text-black truncate">{title}</h3>
        <p className="text-sm text-gray-500 truncate">{address}</p>
        <Badge
          className={cn("mt-2 rounded-full px-3 py-1", statusInfo.className)}
        >
          {statusInfo.label}
        </Badge>
      </div>

      {/* Price and Actions */}
      <div className="flex items-center gap-6">
        <div className="text-center lg:text-right">
          <p className="text-lg font-semibold text-black">
            ₦{price.toLocaleString()}{" "}
            <span className="text-gray-500">/ year</span>
          </p>
          <button
            onClick={onViewStatistics}
            className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#10B981] transition-colors mt-2 italic"
          >
            view statistics
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Preview Button */}
        <button
          onClick={onPreview}
          className="flex flex-col items-center justify-center p-3 border-l-2 border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Preview"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
          <span className="text-xs text-gray-700 mt-1">Preview</span>
        </button>
      </div>
    </Card>
  );
}
