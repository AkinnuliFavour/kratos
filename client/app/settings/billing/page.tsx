"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

// Mock payment data
const mockPaymentMethods = [{ id: 1, type: "Bank Account", last4: "****" }];

const mockPaymentHistory = [
  {
    id: 1,
    date: "Oct 6, 2025",
    item: "GreenVille Lodge",
    amount: "₦ 180,000",
    status: "Successful",
    reference: "RR-PMT-546A7",
  },
  {
    id: 2,
    date: "Sep 20, 2025",
    item: "GoldenMall North Gate",
    amount: "₦ 250,000",
    status: "Successful",
    reference: "RR-RFD-12704",
  },
];

export default function BillingPage() {
  return (
    <div className="max-w-6xl">
      <h1 className="text-3xl font-bold text-[#1A2C1A] mb-8">
        Payment & Billing
      </h1>

      <div className="space-y-6">
        {/* Saved Payment Methods */}
        <Card>
          <CardContent className="py-6">
            <div className="flex items-center justify-between mb-4">
              <Label className="text-base font-semibold text-[#1A2C1A]">
                Saved payment methods
              </Label>
              <Button size="sm" variant="outline">
                Add
              </Button>
            </div>
            <div className="border-t pt-4">
              {mockPaymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm">{method.type}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card>
          <CardContent className="py-6">
            <div className="flex items-center justify-between mb-6">
              <Label className="text-base font-semibold text-[#1A2C1A]">
                Payment history
              </Label>
              <Button size="sm" variant="ghost">
                Clear
              </Button>
            </div>

            {/* Table Header */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 border-b px-6 py-3 grid grid-cols-5 gap-4 text-sm font-medium text-gray-600">
                <div>Date</div>
                <div>Item</div>
                <div>Amount</div>
                <div>Status</div>
                <div>Reference ID</div>
              </div>

              {/* Table Rows */}
              {mockPaymentHistory.map((payment) => (
                <div
                  key={payment.id}
                  className="border-b last:border-b-0 px-6 py-4 grid grid-cols-5 gap-4 items-center"
                >
                  <div className="text-sm">{payment.date}</div>
                  <div className="text-sm">{payment.item}</div>
                  <div className="text-sm font-medium">{payment.amount}</div>
                  <div>
                    <Badge
                      variant="default"
                      className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50"
                    >
                      ✓ {payment.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    {payment.reference}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
