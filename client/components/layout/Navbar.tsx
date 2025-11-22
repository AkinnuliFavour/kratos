"use client";

import Image from "next/image";
import { useSidebar } from "@/components/ui/sidebar";
import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    {
      label: "Dashboard",
      href: "/Dashboard/Home",
    },
    {
      label: "Explore",
      href: "/Explore",
    },
    {
      label: "Saved",
      href: "/Saved",
    },
    {
      label: "Messages",
      href: "/Messages",
    },
  ];

  const { toggleSidebar } = useSidebar();
  const [activeLink, setActiveLink] = useState("Dashboard");

  return (
    <nav className="w-full pt-7  px-4 xl:px-[82px]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src="/images/radar-icon.svg"
            alt="Room Radar Icon"
            width={35}
            height={46}
            className="h-8 w-8"
          />
          <p className="font-semibold text-xl md:text-[28px] text-[#00FF11]">
            RoomRadar
          </p>
        </div>

        <div className="flex items-center gap-4 xl:hidden">
          <Search className="lg:hidden"/>
          <div className="hidden lg:flex items-center rounded-[27px] shadow-[0px_4px_4px_0px_#00000040] py-2.5 px-4 gap-2">
            <Search size={31} className="font-light" />
            <input
              type="text"
              className="outline-none border-none w-full text-[17px] font-normal"
              placeholder="Search"
            />
          </div>
          <button
            onClick={() => toggleSidebar()}
            className="w-5 h-4 flex flex-col justify-between"
          >
            <span className="h-0.5 bg-black w-full"></span>
            <span className="h-0.5 bg-black w-full"></span>
            <span className="h-0.5 bg-black w-full"></span>
          </button>
          <div className="block">
            <Image
              src="/images/profile-icon.svg"
              width={47}
              height={47}
              alt="Profile Image"
            />
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-[34px]">
          <ul className="flex items-center gap-[34px]">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`font-normal text-[17px] text-[#00B90C] ${
                  activeLink === link.label ? "text-[#00FF11] underline" : ""
                }`}
                onClick={() => setActiveLink(link.label)}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center rounded-[27px] shadow-[0px_4px_4px_0px_#00000040] py-2.5 px-4 gap-2">
            <Search size={31} className="font-light" />
            <input
              type="text"
              className="outline-none border-none w-full text-[17px] font-normal"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="hidden xl:block">
          <Image
            src="/images/profile-icon.svg"
            width={47}
            height={47}
            alt="Profile Image"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
