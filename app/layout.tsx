 import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/header";
import { SiteFooter } from "../components/footer";

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "Demo storefront with Next.js + shadcn/ui",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background text-foreground antialiased flex flex-col">
        <SiteHeader />
        <main className="flex-1 mx-auto max-w-7xl px-4 py-6 space-y-10">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}


