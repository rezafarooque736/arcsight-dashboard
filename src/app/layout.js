import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/sidebar/side-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Application Security | Dashboard",
  description: "Web Application Security Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "w-full min-h-screen flex bg-white text-black antialiased dark:bg-gray-950"
        )}
      >
        {/* sidebar */}
        <SideNavbar />

        {/* main page */}
        <div className="w-full px-3 pb-3">{children}</div>
      </body>
    </html>
  );
}
