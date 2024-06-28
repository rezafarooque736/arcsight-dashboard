"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { LogOutIcon } from "lucide-react";

export function Nav({ links, isCollapsed }) {
  const pathName = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    // Call the logout API to clear cookies
    await fetch("/api/logout", {
      method: "POST",
    });

    // Clear tokens from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // redirect to login page
    router.push("/");
  };
  return (
    <TooltipProvider>
      <div className="flex flex-col justify-between h-full">
        <div
          data-collapsed={isCollapsed}
          className="flex flex-col gap-2 py-2 data-[collapsed=true]:py-2 items-center"
        >
          <Image
            src={"railtel_logo.svg"}
            alt="RailTel"
            width={36}
            height={60}
            className="rounded-full h-[60px] w-9"
          />
          <nav className="grid gap-2">
            {links.map((link) =>
              isCollapsed ? (
                <Tooltip key={link.title} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        buttonVariants({
                          variant: link.href === pathName ? "default" : "ghost",
                          size: "icon",
                        }),
                        "h-9 w-9",
                        link.variant === "default" &&
                          "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                      )}
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="sr-only">{link.title}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                  >
                    {link.title}
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Link
                  key={link.title}
                  href={link.href}
                  className={cn(
                    buttonVariants({
                      variant: link.href === pathName ? "default" : "ghost",
                      size: "sm",
                    }),
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                    "justify-start"
                  )}
                >
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.title}
                </Link>
              )
            )}
          </nav>
        </div>
        <Button variant="destructive" className="p-3" onClick={handleLogout}>
          <LogOutIcon className="w-4 h-4" />
        </Button>
      </div>
    </TooltipProvider>
  );
}
