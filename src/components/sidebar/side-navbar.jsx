"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sideBarContent } from "@/data/constants";
import { Nav } from "./nav";

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggle = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="relative w-auto px-2 border-r-2">
      {/* icon to increase and decrease the sidebar */}
      <Button
        size={"icon"}
        variant={"outline"}
        className="absolute top-1/2 right-[-20px] rounded-full"
        onClick={toggle}
      >
        {isCollapsed ? (
          <ChevronRight className="size-5" />
        ) : (
          <ChevronRight className="rotate-180 size-5" />
        )}
      </Button>

      {/* navbar contents */}
      <Nav isCollapsed={isCollapsed} links={sideBarContent} />
    </div>
  );
}
