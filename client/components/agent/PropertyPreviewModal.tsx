"use client";

import { useMemo, useState, type ComponentType } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import {
  Bath,
  BadgeCheck,
  Briefcase,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Table,
  Video,
  Wind,
  Zap,
} from "lucide-react";

export type FeatureIconKey =
  | "generator"
  | "workspace"
  | "wardrobe"
  | "airConditioner"
  | "fence"
  | "toilet";

export type PropertyPreviewData = {
  title: string;
  subtitle?: string;
  description: string;
  images: { src: string; alt?: string }[];
  location: {
    area: string;
    city: string;
    country?: string;
    map: { lat: number; lng: number; label?: string };
  };
  agent: {
    name: string;
    role?: string;
    phone: string;
    whatsapp?: string;
    email?: string;
    note?: string;
    avatar?: string;
  };
  stats: {
    available: number;
    bedrooms: number;
    bathrooms: number;
    kitchen: number;
    size: string;
    priceLabel: string;
  };
  features: { icon: FeatureIconKey; label: string }[];
  videos: { title: string; thumbnail: string; url: string }[];
};

// Load the map only on the client to avoid SSR "window is not defined" errors
const PropertyMap = dynamic(
  () => import("@/components/agent/PropertyMap").then((m) => m.PropertyMap),
  { ssr: false }
);

type PropertyPreviewModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: PropertyPreviewData;
};

const featureIcons: Record<
  FeatureIconKey,
  ComponentType<{ className?: string }>
> = {
  generator: Zap,
  workspace: Briefcase,
  wardrobe: Table,
  airConditioner: Wind,
  fence: ShieldCheck,
  toilet: Bath,
};

export function PropertyPreviewModal({
  open,
  onOpenChange,
  data,
}: PropertyPreviewModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeVideo, setActiveVideo] = useState<null | {
    title: string;
    url: string;
  }>(null);

  const heroImage = useMemo(
    () => data.images[activeImage] ?? data.images[0],
    [activeImage, data.images]
  );
  const thumbnails = useMemo(
    () => data.images.filter((_, idx) => idx !== activeImage).slice(0, 3),
    [activeImage, data.images]
  );
  const showMap = open;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold text-[#1A2C1A]">
            {data.title}
          </DialogTitle>
          {data.subtitle ? (
            <DialogDescription className="text-gray-600 text-base">
              {data.subtitle}
            </DialogDescription>
          ) : null}
        </DialogHeader>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 px-6 pt-4 sm:grid-cols-3">
          <div className="relative col-span-2 h-72 overflow-hidden rounded-xl bg-linear-to-br from-gray-100 to-gray-200">
            {heroImage ? (
              <Image
                src={heroImage.src}
                alt={heroImage.alt ?? data.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            ) : null}
          </div>
          <div className="grid grid-rows-3 gap-2">
            {thumbnails.map((thumb, idx) => (
              <button
                key={thumb.src + idx}
                onClick={() => {
                  const nextIndex = data.images.findIndex(
                    (img) => img.src === thumb.src
                  );
                  setActiveImage(nextIndex === -1 ? 0 : nextIndex);
                }}
                className="relative h-20 w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition hover:border-[#10B981]"
                aria-label="View image"
              >
                <Image
                  src={thumb.src}
                  alt={thumb.alt ?? data.title}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Description & Layout */}
        <div className="px-6 pt-6 space-y-8 pb-10">
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#1A2C1A]">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
          </section>

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            {/* Location and Map */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <BadgeCheck className="h-5 w-5 text-[#10B981]" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm sm:text-base">
                  <span>{data.location.area}</span>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <span>{data.location.city}</span>
                  {data.location.country ? (
                    <span className="text-gray-500">
                      , {data.location.country}
                    </span>
                  ) : null}
                </div>
              </div>
              {showMap ? (
                <PropertyMap
                  lat={data.location.map.lat}
                  lng={data.location.map.lng}
                  label={data.location.map.label ?? data.title}
                />
              ) : null}
            </section>

            {/* Contact Card */}
            <Card className="h-fit space-y-4 p-4 shadow-sm border-gray-200">
              <div className="flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#10B981]/10 text-lg font-bold text-[#10B981]">
                  {data.agent.avatar ? (
                    <Image
                      src={data.agent.avatar}
                      alt={data.agent.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span>{data.agent.name.slice(0, 1)}</span>
                  )}
                </div>
                <div>
                  <p className="text-base font-semibold text-[#1A2C1A]">
                    {data.agent.name}
                  </p>
                  {data.agent.role ? (
                    <p className="text-sm text-gray-500">{data.agent.role}</p>
                  ) : null}
                </div>
              </div>
              {data.agent.note ? (
                <p className="text-sm text-gray-600">{data.agent.note}</p>
              ) : null}
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>{data.agent.phone}</span>
                </div>
                {data.agent.whatsapp ? (
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-gray-500" />
                    <span>{data.agent.whatsapp}</span>
                  </div>
                ) : null}
                {data.agent.email ? (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{data.agent.email}</span>
                  </div>
                ) : null}
              </div>
              <div className="flex gap-3">
                <a
                  href={`tel:${data.agent.phone}`}
                  className="flex-1 rounded-full bg-[#10B981] px-4 py-2 text-center text-white transition hover:bg-[#0f9e6e]"
                >
                  Call
                </a>
                {data.agent.whatsapp ? (
                  <a
                    href={`https://wa.me/${data.agent.whatsapp.replace(
                      /\D/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border border-[#10B981] px-4 py-2 text-center text-[#10B981] transition hover:bg-[#10B981]/10"
                  >
                    WhatsApp
                  </a>
                ) : null}
              </div>
            </Card>
          </div>

          {/* Property Details */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#1A2C1A]">
              Property Details
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700">
              <DetailItem
                label="Available Apartments"
                value={`${data.stats.available}`}
              />
              <DetailItem label="Bedrooms" value={`${data.stats.bedrooms}`} />
              <DetailItem label="Bathrooms" value={`${data.stats.bathrooms}`} />
              <DetailItem label="Kitchen" value={`${data.stats.kitchen}`} />
              <DetailItem label="Apartment Size" value={data.stats.size} />
              <DetailItem label="Price" value={data.stats.priceLabel} />
            </div>
          </section>

          {/* Features */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#1A2C1A]">Features</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.features.map((feature) => {
                const Icon = featureIcons[feature.icon] ?? Briefcase;
                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-3 text-gray-700"
                  >
                    <Icon className="h-5 w-5 text-[#10B981]" />
                    <span className="text-sm font-medium">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Videos */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-[#10B981]" />
              <h3 className="text-lg font-semibold text-[#1A2C1A]">Videos</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.videos.map((video) => (
                <button
                  key={video.url}
                  onClick={() =>
                    setActiveVideo({ title: video.title, url: video.url })
                  }
                  className="group relative h-32 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 text-left transition hover:border-[#10B981]"
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#10B981] shadow">
                      ▶
                    </span>
                  </div>
                  <span className="absolute bottom-2 left-2 right-2 truncate text-sm font-semibold text-white drop-shadow">
                    {video.title}
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </DialogContent>

      {/* Video Viewer */}
      <Dialog
        open={!!activeVideo}
        onOpenChange={(open) => !open && setActiveVideo(null)}
      >
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <div className="bg-black p-4">
            <p className="text-white text-lg font-semibold">
              {activeVideo?.title}
            </p>
          </div>
          <div className="aspect-video w-full bg-black">
            {activeVideo ? (
              <video
                src={activeVideo.url}
                controls
                autoPlay
                className="h-full w-full object-contain"
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white px-3 py-3">
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-[#1A2C1A]">{value}</p>
    </div>
  );
}
