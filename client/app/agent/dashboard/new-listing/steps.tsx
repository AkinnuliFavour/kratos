"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin,
  Upload as UploadIcon,
  X,
  Plus,
  Minus,
  Phone,
  MessageCircle,
  Home,
} from "lucide-react";
import { useEffect, useRef } from "react";

export interface ListingFormData {
  propertyTitle: string;
  propertyType: string;
  price: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  mainPhoto: string;
  otherPhotos: string[];
  videos: string[];
  description: string;
  features: {
    bedrooms: number;
    kitchens: number;
    bathrooms: number;
    amenities: string[];
  };
  contactInfo: {
    name: string;
    phone: string;
    whatsapp: string;
    avatar: string;
  };
}

interface StepProps {
  formData: ListingFormData;
  updateFormData: (data: Partial<ListingFormData>) => void;
}

// Step 1: Basic Info
export function BasicInfoStep({ formData, updateFormData }: StepProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize map when component mounts
    if (typeof window !== "undefined" && mapRef.current) {
      import("leaflet").then((L) => {
        // Check if map already exists
        if (mapRef.current && !mapRef.current.hasChildNodes()) {
          const map = L.map(mapRef.current).setView(
            [formData.location.lat || 6.5244, formData.location.lng || 3.3792],
            13
          );

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
          }).addTo(map);

          if (formData.location.lat && formData.location.lng) {
            L.marker([formData.location.lat, formData.location.lng]).addTo(map);
          }
        }
      });
    }
  }, [formData.location.lat, formData.location.lng]);

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          updateFormData({
            location: {
              ...formData.location,
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const propertyTypes = [
    { value: "self-contained", label: "Self-Contained" },
    { value: "1-bedroom", label: "1 Bedroom Flat" },
    { value: "2-bedroom", label: "2 Bedroom Flat" },
    { value: "3-bedroom", label: "3 Bedroom Flat" },
    { value: "hostel", label: "Hostel Room" },
    { value: "mini-flat", label: "Mini Flat" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#1A2C1A]">Basic Info:</h2>

      <div className="space-y-2">
        <Label htmlFor="propertyTitle">Property title:</Label>
        <Input
          id="propertyTitle"
          placeholder="Enter property title"
          value={formData.propertyTitle}
          onChange={(e) => updateFormData({ propertyTitle: e.target.value })}
          maxLength={100}
        />
        <p className="text-xs text-gray-500 text-right">
          {formData.propertyTitle.length}/100 characters
        </p>
      </div>

      <div className="space-y-3">
        <Label>Property type:</Label>
        <RadioGroup
          value={formData.propertyType}
          onValueChange={(value) => updateFormData({ propertyType: value })}
          className="grid grid-cols-2 gap-4"
        >
          {propertyTypes.map((type) => (
            <div
              key={type.value}
              className="flex items-center space-x-2 border rounded-lg p-3 hover:border-green-600 cursor-pointer"
            >
              <RadioGroupItem value={type.value} id={type.value} />
              <Label htmlFor={type.value} className="cursor-pointer flex-1">
                {type.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price:</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            ₦
          </span>
          <Input
            id="price"
            type="text"
            placeholder="0"
            value={formData.price}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              updateFormData({ price: value });
            }}
            className="pl-8"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location:</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            id="location"
            placeholder="The Apartment Address"
            value={formData.location.address}
            onChange={(e) =>
              updateFormData({
                location: { ...formData.location, address: e.target.value },
              })
            }
            className="pl-10"
          />
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleUseCurrentLocation}
          className="w-full bg-green-600 text-white hover:bg-green-700"
        >
          Use My Current Location
        </Button>
      </div>

      <div className="h-64 rounded-lg overflow-hidden border" ref={mapRef} />
    </div>
  );
}

// Step 2: Upload Images
export function UploadImagesStep({ formData, updateFormData }: StepProps) {
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleMainPhotoUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size must be less than 5MB");
        return;
      }
      const base64 = await fileToBase64(file);
      updateFormData({ mainPhoto: base64 });
    }
  };

  const handleOtherPhotosUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);
    const base64Promises = files.map(async (file) => {
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} is too large. Maximum size is 5MB`);
        return null;
      }
      return await fileToBase64(file);
    });
    const base64Images = (await Promise.all(base64Promises)).filter(
      Boolean
    ) as string[];
    updateFormData({ otherPhotos: [...formData.otherPhotos, ...base64Images] });
  };

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const base64Promises = files.map(async (file) => {
      if (file.size > 50 * 1024 * 1024) {
        alert(`${file.name} is too large. Maximum size is 50MB`);
        return null;
      }
      return await fileToBase64(file);
    });
    const base64Videos = (await Promise.all(base64Promises)).filter(
      Boolean
    ) as string[];
    updateFormData({ videos: [...formData.videos, ...base64Videos] });
  };

  const removeOtherPhoto = (index: number) => {
    const newPhotos = formData.otherPhotos.filter((_, i) => i !== index);
    updateFormData({ otherPhotos: newPhotos });
  };

  const removeVideo = (index: number) => {
    const newVideos = formData.videos.filter((_, i) => i !== index);
    updateFormData({ videos: newVideos });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-[#1A2C1A]">Upload Images:</h2>

      <div className="space-y-2">
        <Label>Upload Main Photo:</Label>
        <label className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-green-600 transition-colors min-h-[200px]">
          <input
            type="file"
            accept="image/*"
            onChange={handleMainPhotoUpload}
            className="hidden"
          />
          {formData.mainPhoto ? (
            <div className="relative w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={formData.mainPhoto}
                alt="Main"
                className="max-h-48 rounded object-cover"
              />
              <Button
                type="button"
                size="icon-sm"
                variant="destructive"
                className="absolute top-2 right-2"
                onClick={(e) => {
                  e.preventDefault();
                  updateFormData({ mainPhoto: "" });
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <UploadIcon className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">Add Photo</p>
            </>
          )}
        </label>
      </div>

      <div className="space-y-2">
        <Label>Upload Other Photos:</Label>
        <div className="grid grid-cols-3 gap-4">
          {formData.otherPhotos.map((photo, index) => (
            <div key={index} className="relative border rounded-lg p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={`Other ${index + 1}`}
                className="w-full h-32 object-cover rounded"
              />
              <Button
                type="button"
                size="icon-sm"
                variant="destructive"
                className="absolute top-1 right-1"
                onClick={() => removeOtherPhoto(index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
          <label className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-green-600 transition-colors h-32">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleOtherPhotosUpload}
              className="hidden"
            />
            <UploadIcon className="h-6 w-6 text-gray-400 mb-1" />
            <p className="text-xs text-gray-600">Add Photo</p>
          </label>
        </div>
        <Button type="button" variant="outline" className="w-full">
          Add More Photos
        </Button>
      </div>

      <div className="space-y-2">
        <Label>Upload Videos:</Label>
        <div className="grid grid-cols-2 gap-4">
          {formData.videos.map((video, index) => (
            <div key={index} className="relative border rounded-lg p-2">
              <video
                src={video}
                className="w-full h-32 object-cover rounded"
                controls
              />
              <Button
                type="button"
                size="icon-sm"
                variant="destructive"
                className="absolute top-1 right-1"
                onClick={() => removeVideo(index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
          <label className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-green-600 transition-colors h-32">
            <input
              type="file"
              accept="video/*"
              multiple
              onChange={handleVideoUpload}
              className="hidden"
            />
            <UploadIcon className="h-6 w-6 text-gray-400 mb-1" />
            <p className="text-xs text-gray-600">Upload Video</p>
          </label>
          {formData.videos.length > 0 && (
            <Button type="button" variant="outline" className="h-32">
              Add More Videos
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

// Step 3: Property Details
export function PropertyDetailsStep({ formData, updateFormData }: StepProps) {
  const amenities = [
    "Constant Power",
    "Running Water",
    "Security Officer",
    "Wardrobe",
    "Fence",
    "Toilet",
    "Wifi",
    "TV",
    "Air Conditioning",
    "Refrigerator",
  ];

  const toggleAmenity = (amenity: string) => {
    const currentAmenities = formData.features.amenities;
    const newAmenities = currentAmenities.includes(amenity)
      ? currentAmenities.filter((a) => a !== amenity)
      : [...currentAmenities, amenity];
    updateFormData({
      features: { ...formData.features, amenities: newAmenities },
    });
  };

  const updateCount = (
    field: "bedrooms" | "kitchens" | "bathrooms",
    delta: number
  ) => {
    const newValue = Math.max(0, formData.features[field] + delta);
    updateFormData({
      features: { ...formData.features, [field]: newValue },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#1A2C1A]">
        Property Details:
      </h2>

      <div className="space-y-2">
        <Label htmlFor="description">Description:</Label>
        <Textarea
          id="description"
          placeholder="Describe the property..."
          value={formData.description}
          onChange={(e) => updateFormData({ description: e.target.value })}
          maxLength={500}
          rows={6}
          className="resize-none"
        />
        <p className="text-xs text-gray-500 text-right">
          {formData.description.length}/500 characters
        </p>
      </div>

      <div className="space-y-3">
        <Label>Apartment Features:</Label>
        <div className="grid grid-cols-3 gap-4">
          {["bedrooms", "kitchens", "bathrooms"].map((field) => (
            <div key={field} className="border rounded-lg p-3 space-y-2">
              <Label className="text-sm capitalize">
                {field.replace(/s$/, "")}
              </Label>
              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  size="icon-sm"
                  variant="outline"
                  onClick={() =>
                    updateCount(
                      field as "bedrooms" | "kitchens" | "bathrooms",
                      -1
                    )
                  }
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold">
                  {
                    formData.features[
                      field as keyof typeof formData.features
                    ] as number
                  }
                </span>
                <Button
                  type="button"
                  size="icon-sm"
                  variant="outline"
                  onClick={() =>
                    updateCount(
                      field as "bedrooms" | "kitchens" | "bathrooms",
                      1
                    )
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          {amenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center space-x-2 border rounded-lg p-3"
            >
              <Checkbox
                id={amenity}
                checked={formData.features.amenities.includes(amenity)}
                onCheckedChange={() => toggleAmenity(amenity)}
              />
              <Label htmlFor={amenity} className="cursor-pointer flex-1">
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button type="button" variant="outline" className="w-full">
        <UploadIcon className="h-4 w-4 mr-2" />
        Upload Additional Photos
      </Button>
    </div>
  );
}

// Step 4: Your Contact
export function ContactStep({ formData }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#1A2C1A]">Your Contact:</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={formData.contactInfo.avatar} />
            <AvatarFallback>
              {formData.contactInfo.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <Label className="text-sm text-gray-500">Name:</Label>
            <p className="text-lg font-semibold">{formData.contactInfo.name}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
            <Phone className="h-5 w-5 text-gray-500" />
            <div className="flex-1">
              <Label className="text-xs text-gray-500">Phone:</Label>
              <p className="font-medium">{formData.contactInfo.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
            <MessageCircle className="h-5 w-5 text-gray-500" />
            <div className="flex-1">
              <Label className="text-xs text-gray-500">WhatsApp:</Label>
              <p className="font-medium">{formData.contactInfo.whatsapp}</p>
            </div>
          </div>
        </div>

        <Button type="button" variant="outline" className="w-full">
          Go to your Settings
        </Button>
      </div>
    </div>
  );
}

// Step 5: Publish Confirmation
export function PublishConfirmationStep() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12">
      <div className="w-64 h-64 relative">
        <Home className="w-full h-full text-green-600" />
      </div>
      <h2 className="text-2xl font-semibold text-[#1A2C1A] text-center">
        Do you Want to
        <br />
        Publish This Listing?
      </h2>
    </div>
  );
}
