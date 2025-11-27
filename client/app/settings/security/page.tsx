"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SecurityPage() {
  const [editMode, setEditMode] = useState<string | null>(null);
  const [password, setPassword] = useState("**********");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEditPassword = () => {
    setEditMode("password");
  };

  const handleSavePassword = () => {
    if (newPassword === confirmPassword && newPassword.length >= 8) {
      setPassword("**********");
      setEditMode(null);
      setNewPassword("");
      setConfirmPassword("");
      // In a real app, you'd call an API here
    }
  };

  const handleCancel = () => {
    setEditMode(null);
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-[#1A2C1A] mb-8">
        Login & security
      </h1>

      <Card>
        <CardContent className="space-y-8">
          {/* Password Section */}
          <div className="flex items-start justify-between py-4 border-b">
            <div className="flex-1">
              <Label className="text-sm text-gray-600">Password</Label>
              {editMode === "password" ? (
                <div className="mt-2 space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleSavePassword}>
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-base font-medium text-[#1A2C1A] mt-1">
                  {password}
                </p>
              )}
            </div>
            {editMode !== "password" && (
              <Button
                variant="ghost"
                size="sm"
                className="text-sm"
                onClick={handleEditPassword}
              >
                Edit
              </Button>
            )}
          </div>

          {/* Deactivate Account Section */}
          <div className="flex items-start justify-between py-4">
            <div className="flex-1">
              <Label className="text-sm text-gray-600">
                Deactivate your account
              </Label>
              <p className="text-sm text-gray-500 mt-1">
                This action cannot be undone
              </p>
            </div>
            <Button variant="destructive" size="sm" disabled>
              Deactivate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
