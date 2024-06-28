"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sideBarContent } from "@/data";
import { Nav } from "./nav";

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 z-50 w-auto h-[calc(100vh-12px)] px-1 border-r-2 border-gray-400">
      {/* icon to increase and decrease the sidebar */}
      {isCollapsed ? (
        <ChevronRight
          className="size-5 absolute z-10 top-1/2 right-[-11px] bg-slate-100 border border-slate-200 rounded-full"
          onClick={toggle}
        />
      ) : (
        <ChevronLeft
          className="size-5 absolute z-10 top-1/2 right-[-11px] bg-slate-100 border border-slate-200 rounded-full"
          onClick={toggle}
        />
      )}

      {/* navbar contents */}
      <Nav isCollapsed={isCollapsed} links={sideBarContent} />
    </div>
  );
}
