"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MessageCircle, HelpCircle, AlertCircle } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-[#1A2C1A] mb-8">
        Support & Feedback:
      </h1>

      <Card>
        <CardContent className="space-y-6">
          {/* Contact Support */}
          <div className="flex items-center justify-between py-4 border-b">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <Label className="text-base font-semibold text-[#1A2C1A]">
                  Contact support
                </Label>
                <p className="text-sm text-gray-500 mt-1">
                  Get in touch with our support team
                </p>
              </div>
            </div>
            <Button size="sm" variant="outline" asChild>
              <Link href="mailto:support@roomradar.com">Contact</Link>
            </Button>
          </div>

          {/* FAQs */}
          <div className="flex items-center justify-between py-4 border-b">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <HelpCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <Label className="text-base font-semibold text-[#1A2C1A]">
                  FAQs
                </Label>
                <p className="text-sm text-gray-500 mt-1">
                  Find answers to commonly asked questions
                </p>
              </div>
            </div>
            <Button size="sm" variant="outline" asChild>
              <Link href="/faqs">View FAQs</Link>
            </Button>
          </div>

          {/* Report a Problem */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-50 rounded-lg">
                <AlertCircle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <Label className="text-base font-semibold text-[#1A2C1A]">
                  Report a problem
                </Label>
                <p className="text-sm text-gray-500 mt-1">
                  Let us know about any issues you&apos;re experiencing
                </p>
              </div>
            </div>
            <Button size="sm" variant="outline" asChild>
              <Link href="/report">Report</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
