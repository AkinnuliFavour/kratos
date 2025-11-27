"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const settingsLinks = [
  { href: "/settings", label: "Personal information" },
  { href: "/settings/security", label: "Login & security" },
  { href: "/settings/preferences", label: "Preferences" },
  { href: "/settings/billing", label: "Payment & Billing" },
  { href: "/settings/agency", label: "Agency" },
  { href: "/settings/support", label: "Support & Feedback" },
];

export default function SettingsNav() {
  const pathname = usePathname();

  const activeLink = settingsLinks.find((link) => link.href === pathname);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 border-r bg-white min-h-[calc(100vh-73px)] p-6">
        <h2 className="text-2xl font-bold text-[#1A2C1A] mb-6">Settings:</h2>
        <nav className="space-y-2">
          {settingsLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-gray-100 text-[#1A2C1A] font-semibold"
                  : "text-[#1A2C1A] hover:bg-gray-50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Dropdown */}
      <div className="md:hidden w-full border-b bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1A2C1A]">Settings:</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                {activeLink?.label || "Select section"}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {settingsLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "w-full cursor-pointer",
                      pathname === link.href && "font-semibold text-[#10B981]"
                    )}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
