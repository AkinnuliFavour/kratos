"use client";

import { Card, CardContent } from "@/components/ui/card";

interface PerformanceCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function PerformanceCard({
  title,
  value,
  subtitle,
}: PerformanceCardProps) {
  return (
    <Card className="w-full border-2 border-gray-200 rounded-2xl bg-white">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-base font-medium text-gray-500 leading-tight">
            {title}
          </h3>
          <p className="text-5xl font-bold text-black">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-2">{subtitle}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
