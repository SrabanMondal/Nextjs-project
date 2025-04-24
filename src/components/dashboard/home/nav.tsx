// components/TopNavbar.tsx
"use client";

import Image from "next/image";
import React from "react";
import { CiSettings } from "react-icons/ci";
export default function TopNavbar() {
  return (
    <nav className="w-full flex items-center justify-end px-4 py-2 bg-white shadow-md sticky h-16 md:h-14">
      <div className="flex items-center gap-4">
        <CiSettings className="text-gray-600 text-xl cursor-pointer" />
        <Image
          src="/avatar.png"
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      </div>
    </nav>
  );
}
