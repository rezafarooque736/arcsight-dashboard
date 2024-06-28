import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

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
          "w-screen min-h-screen bg-white text-black antialiased dark:bg-gray-950"
        )}
      >
        {/* main page */}
        <main className="w-full h-full">{children}</main>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
