"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/agent/dashboard", label: "Dashboard" },
    { href: "/agent/dashboard/listings", label: "Listings" },
    { href: "/agent/dashboard/messages", label: "Messages" },
  ];

  return (
    <nav className="w-full border-b bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section: Logo and Brand */}
        <Link href="/agent/dashboard" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#10B981" />
            <circle cx="16" cy="16" r="12" fill="white" />
            <circle cx="16" cy="16" r="8" fill="#10B981" />
            <circle cx="16" cy="16" r="4" fill="white" />
            <circle cx="16" cy="16" r="2" fill="#10B981" />
          </svg>
          <span className="text-2xl font-bold text-[#10B981]">RoomRadar</span>
        </Link>

        {/* Center Section: Navigation Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-[#10B981]",
                pathname === link.href
                  ? "text-[#1A2C1A] font-semibold"
                  : "text-[#1A2C1A]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section: Icons and Avatar */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <button
            className="rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-[#1A2C1A]" />
          </button>
          <button
            className="rounded-fullhover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-[#1A2C1A]" />
          </button>

          {/* Mobile: Avatar with Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full" aria-label="User menu">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback className="bg-[#10B981] text-white">
                    U
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 md:hidden">
              {navLinks.map((link) => (
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
    </nav>
  );
}
