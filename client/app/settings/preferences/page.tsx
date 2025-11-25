"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Mock notification preferences
const mockPreferences = {
  emailNotifications: true,
  smsNotifications: false,
  pushNotifications: true,
  marketingEmails: false,
};

export default function PreferencesPage() {
  const [preferences, setPreferences] = useState(mockPreferences);
  const [hasChanges, setHasChanges] = useState(false);

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // In a real app, you'd save to the backend here
    setHasChanges(false);
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-[#1A2C1A] mb-8">Preferences</h1>

      <Card>
        <CardContent className="space-y-8">
          {/* Notification Settings */}
          <div className="py-4">
            <div className="flex items-center justify-between mb-6">
              <Label className="text-base font-semibold text-[#1A2C1A]">
                Notification settings
              </Label>
              {hasChanges && (
                <Button size="sm" onClick={handleSave}>
                  Save Changes
                </Button>
              )}
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email notifications
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive notifications via email
                  </p>
                </div>
                <Checkbox
                  id="email"
                  checked={preferences.emailNotifications}
                  onCheckedChange={() => handleToggle("emailNotifications")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms" className="text-sm font-medium">
                    SMS notifications
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive notifications via text message
                  </p>
                </div>
                <Checkbox
                  id="sms"
                  checked={preferences.smsNotifications}
                  onCheckedChange={() => handleToggle("smsNotifications")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push" className="text-sm font-medium">
                    Push notifications
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive push notifications on your device
                  </p>
                </div>
                <Checkbox
                  id="push"
                  checked={preferences.pushNotifications}
                  onCheckedChange={() => handleToggle("pushNotifications")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing" className="text-sm font-medium">
                    Marketing emails
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive updates about new features and offers
                  </p>
                </div>
                <Checkbox
                  id="marketing"
                  checked={preferences.marketingEmails}
                  onCheckedChange={() => handleToggle("marketingEmails")}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
