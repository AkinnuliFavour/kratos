"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

// Mock data
const mockUserData = {
  name: "Chiamaka Onyechi",
  email: "thechiamakaonyechi@gmail.com",
  phone: "+234 *** *** 6023",
  address: "Not Provided",
  avatar: "https://github.com/shadcn.png",
  verified: true,
};

export default function PersonalInformationPage() {
  const [userData, setUserData] = useState(mockUserData);
  const [editMode, setEditMode] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState("");

  const handleEdit = (field: string, currentValue: string) => {
    setEditMode(field);
    setTempValue(currentValue);
  };

  const handleSave = (field: keyof typeof userData) => {
    setUserData({ ...userData, [field]: tempValue });
    setEditMode(null);
    setTempValue("");
  };

  const handleCancel = () => {
    setEditMode(null);
    setTempValue("");
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-[#1A2C1A] mb-8">
        Personal information
      </h1>

      <Card>
        <CardContent className="space-y-8">
          {/* Name Section */}
          <div className="flex items-start justify-between py-4 border-b">
            <div className="flex items-center gap-4 flex-1">
              <Avatar className="h-16 w-16">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback className="bg-[#10B981] text-white text-xl">
                  {userData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Label className="text-sm text-gray-600">Name</Label>
                {editMode === "name" ? (
                  <div className="mt-2 space-y-2">
                    <Input
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      className="max-w-md"
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleSave("name")}>
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-base font-medium text-[#1A2C1A] mt-1">
                    {userData.name}
                  </p>
                )}
              </div>
            </div>
            {editMode !== "name" && (
              <Button
                variant="ghost"
                size="sm"
                className="text-sm"
                onClick={() => handleEdit("name", userData.name)}
              >
                Edit
              </Button>
            )}
          </div>

          {/* Email Section */}
          <div className="flex items-start justify-between py-4 border-b">
            <div className="flex-1">
              <Label className="text-sm text-gray-600">Email address</Label>
              {editMode === "email" ? (
                <div className="mt-2 space-y-2">
                  <Input
                    type="email"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="max-w-md"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleSave("email")}>
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-base font-medium text-[#1A2C1A] mt-1">
                  {userData.email}
                </p>
              )}
            </div>
            {editMode !== "email" && (
              <Button
                variant="ghost"
                size="sm"
                className="text-sm"
                onClick={() => handleEdit("email", userData.email)}
              >
                Edit
              </Button>
            )}
          </div>

          {/* Phone Number Section */}
          <div className="flex items-start justify-between py-4 border-b">
            <div className="flex-1">
              <Label className="text-sm text-gray-600">Phone Number</Label>
              {editMode === "phone" ? (
                <div className="mt-2 space-y-2">
                  <Input
                    type="tel"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="max-w-md"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleSave("phone")}>
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-base font-medium text-[#1A2C1A] mt-1">
                  {userData.phone}
                </p>
              )}
            </div>
            {editMode !== "phone" && (
              <Button
                variant="ghost"
                size="sm"
                className="text-sm"
                onClick={() => handleEdit("phone", userData.phone)}
              >
                Edit
              </Button>
            )}
          </div>

          {/* Residential Address Section */}
          <div className="flex items-start justify-between py-4 border-b">
            <div className="flex-1">
              <Label className="text-sm text-gray-600">
                Residential address
              </Label>
              {editMode === "address" ? (
                <div className="mt-2 space-y-2">
                  <Input
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="max-w-md"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleSave("address")}>
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-base font-medium text-[#1A2C1A] mt-1">
                  {userData.address}
                </p>
              )}
            </div>
            {editMode !== "address" && (
              <Button
                variant="ghost"
                size="sm"
                className="text-sm"
                onClick={() => handleEdit("address", userData.address)}
              >
                Edit
              </Button>
            )}
          </div>

          {/* Identity Verification Section */}
          <div className="flex items-start justify-between py-4">
            <div className="flex-1">
              <Label className="text-sm text-gray-600">
                Identity verification
              </Label>
              <div className="flex items-center gap-2 mt-1">
                {userData.verified ? (
                  <Badge
                    variant="default"
                    className="bg-[#10B981] hover:bg-[#10B981]/90"
                  >
                    Verified
                  </Badge>
                ) : (
                  <Badge variant="secondary">Not Verified</Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
