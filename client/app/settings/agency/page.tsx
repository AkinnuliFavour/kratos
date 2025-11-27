"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// Mock agent data
const mockAgentData = {
  name: "Chiamaka Onyechi",
  title: "Local Housing Agent - Akure",
  bio: "Trusted local expert helping students and residents find safe, affordable housing across Akure.",
  verified: true,
};

export default function AgencyPage() {
  const [agentData, setAgentData] = useState(mockAgentData);
  const [editMode, setEditMode] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState("");

  const handleEdit = (field: string, currentValue: string) => {
    setEditMode(field);
    setTempValue(currentValue);
  };

  const handleSave = (field: keyof typeof agentData) => {
    setAgentData({ ...agentData, [field]: tempValue });
    setEditMode(null);
    setTempValue("");
  };

  const handleCancel = () => {
    setEditMode(null);
    setTempValue("");
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-[#1A2C1A] mb-8">Agent Status:</h1>

      <Card>
        <CardContent className="space-y-8">
          {/* Agent Name */}
          <div className="py-4">
            <h2 className="text-xl font-semibold text-[#1A2C1A] mb-6">
              {agentData.name}
            </h2>
          </div>

          {/* Title Section */}
          <div className="flex items-start justify-between py-4 border-b">
            <div className="flex-1">
              <Label className="text-sm text-gray-600">Title</Label>
              {editMode === "title" ? (
                <div className="mt-2 space-y-2">
                  <Input
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="max-w-md"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleSave("title")}>
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-base font-medium text-[#1A2C1A] mt-1">
                  {agentData.title}
                </p>
              )}
            </div>
            {editMode !== "title" && (
              <Button
                variant="ghost"
                size="sm"
                className="text-sm"
                onClick={() => handleEdit("title", agentData.title)}
              >
                Edit
              </Button>
            )}
          </div>

          {/* Bio/Description Section */}
          <div className="flex items-start justify-between py-4 border-b">
            <div className="flex-1">
              <Label className="text-sm text-gray-600">Bio/Description</Label>
              {editMode === "bio" ? (
                <div className="mt-2 space-y-2">
                  <Textarea
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="max-w-md min-h-[100px]"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleSave("bio")}>
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-base font-medium text-[#1A2C1A] mt-1">
                  {agentData.bio}
                </p>
              )}
            </div>
            {editMode !== "bio" && (
              <Button
                variant="ghost"
                size="sm"
                className="text-sm"
                onClick={() => handleEdit("bio", agentData.bio)}
              >
                Edit
              </Button>
            )}
          </div>

          {/* Verification & Documents Section */}
          <div className="flex items-start justify-between py-4 border-b">
            <div className="flex-1">
              <Label className="text-sm text-gray-600">
                Verification & Documents
              </Label>
              <div className="flex items-center gap-2 mt-1">
                {agentData.verified ? (
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
            <Button variant="ghost" size="sm" className="text-sm">
              View
            </Button>
          </div>

          {/* Earnings Section */}
          <div className="py-4">
            <h3 className="text-xl font-semibold text-[#1A2C1A]">Earnings</h3>
            <p className="text-sm text-gray-500 mt-2">
              Track your commission and payment history
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
