import React from "react";
import { Package, Truck } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function TopHeader() {
  return (
    <header className="w-full border-b border-[#e5e1d8] bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-5 relative">
        {/* Logo (Centered on mobile, left-aligned on desktop) */}
        <NavLink
          to="/"
          className="text-3xl font-black tracking-tight text-black shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0"
        >
          Huel<sup className="text-xs align-super">®</sup>
        </NavLink>

        {/* Right Info (Hidden on mobile, visible on desktop) */}
        <div className="hidden md:flex h-full items-center text-[13px] font-medium text-black ml-auto">
          <div className="flex h-full items-center gap-2 border-l border-[#e5e1d8] px-6 lg:px-8">
            <Package size={15} strokeWidth={1.8} />
            <span>Minimum 12 items</span>
          </div>

          <div className="flex h-full items-center gap-2 border-l border-[#e5e1d8] px-6 lg:px-8">
            <Truck size={16} strokeWidth={1.8} />
            <span>Free delivery over £45</span>
          </div>
        </div>
      </div>
    </header>
  );
}