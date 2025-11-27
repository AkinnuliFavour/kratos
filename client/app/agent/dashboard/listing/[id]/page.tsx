"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Send, 
  Refrigerator, 
  Blinds, 
  Wind, 
  Fence, 
  Box, 
  Table, 
  Bath,
  Play
} from "lucide-react";
import Image from "next/image";
import * as React from "react";

export default function ListingPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">The Haven Lodge</h1>
          <p className="text-muted-foreground mt-1">33 Off Oja Crescent, Akure</p>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500">
          <Heart className="h-6 w-6" />
        </Button>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px]">
        <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden bg-muted">
          <Image 
            src="/placeholder-building.jpg" 
            alt="Main building view" 
            fill 
            className="object-cover"
          />
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden bg-muted h-full min-h-[190px]">
            <Image 
              src="/placeholder-building.jpg" 
              alt={`Building view ${i}`} 
              fill 
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Description */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Description:</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              The Haven Lodge offers modern, self-contained apartments designed specifically 
              for students who value comfort and proximity to campus. Each unit comes with a 
              private bathroom, tiled kitchen, wardrobe, and ceiling fan. The compound is fully 
              fenced with a security gate, constant water supply, and a calm environment ideal 
              for studying.
            </p>
          </section>

          <hr className="border-border" />

          {/* Location */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Location:</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">South Gate, FUTA Akure</span>
              <span className="font-medium">Ondo State, Nigeria</span>
            </div>
            <div className="relative w-full h-[250px] rounded-2xl overflow-hidden bg-muted">
              {/* Placeholder for Map */}
              <div className="absolute inset-0 bg-yellow-50 flex items-center justify-center">
                 <Image 
                    src="/placeholder-map.jpg" 
                    alt="Map Location" 
                    fill
                    className="object-cover opacity-80"
                 />
                 <MapPin className="h-8 w-8 text-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="currentColor" />
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar - Contact Card */}
        <div className="lg:col-span-1">
          <Card className="p-6 bg-muted/30 border-none shadow-none rounded-3xl">
            <h3 className="font-semibold mb-6">Person to Contact</h3>
            
            <div className="flex items-center gap-3 mb-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>PJ</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-sm uppercase">Peter Johnson E.</h4>
                <p className="text-xs text-muted-foreground">Local Housing Agent - Akure</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mb-8 leading-relaxed">
              Trusted local agent helping students and residents find safe, affordable housing across Akure.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-between p-3 border rounded-xl bg-background/50">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span className="text-xs uppercase font-medium">Phone</span>
                </div>
                <span className="text-xs font-semibold">070601425509</span>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-xl bg-background/50">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs uppercase font-medium">Whatsapp</span>
                </div>
                <span className="text-xs font-semibold">070601425509</span>
              </div>
            </div>

            <Button className="w-full rounded-full bg-green-600 hover:bg-green-700 text-white h-12">
              Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      </div>

      <hr className="border-border" />

      {/* Property Details */}
      <section>
        <h2 className="text-orange-400 font-medium mb-6">Property Details:</h2>
        <div className="grid grid-cols-2 gap-y-4 gap-x-12 max-w-2xl">
          <div className="flex justify-between">
            <span className="text-orange-400 text-sm">Available apartments: 5</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-400 text-sm">Bedroom: 2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-400 text-sm">Price: ₦ 180,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-400 text-sm">Bathroom: 1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-400 text-sm">Apartment Size: 12ft x 14ft</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-400 text-sm">Kitchen: 1</span>
          </div>
        </div>
      </section>

      <hr className="border-border" />

      {/* Features */}
      <section>
        <h2 className="text-green-600 font-semibold mb-6">Features:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-2 text-green-600">
            <Refrigerator className="h-4 w-4" />
            <span className="text-sm">Refrigerator</span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Blinds className="h-4 w-4" />
            <span className="text-sm">Curtain</span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Wind className="h-4 w-4" />
            <span className="text-sm">Air Conditioner</span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Fence className="h-4 w-4" />
            <span className="text-sm">Fence</span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Box className="h-4 w-4" />
            <span className="text-sm">Wardrobe</span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Table className="h-4 w-4" />
            <span className="text-sm">Table</span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Bath className="h-4 w-4" />
            <span className="text-sm">Toilet</span>
          </div>
        </div>
      </section>

      <hr className="border-border" />

      {/* Videos */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-lg">Videos:</h2>
          <Button variant="link" className="text-xs text-muted-foreground">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-muted group cursor-pointer">
              <Image 
                src="/placeholder-room.jpg" 
                alt={`Room video thumbnail ${i}`} 
                fill 
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center pl-1">
                  <Play className="h-4 w-4 text-black fill-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
