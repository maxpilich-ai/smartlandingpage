import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Construction & Remodeling | Minnesota's #1 Insurance Restoration",
  description: "Storm damage? We fight your insurance company so you don't have to. Free drone inspection, Xactimate estimates, 98% claim approval rate. Serving Minnesota & Florida since 2004.",
  keywords: "storm damage contractor Minnesota, roofing insurance claim, hail damage repair, Smart Construction Remodeling, GAF Master Elite, Blaine MN contractor",
  openGraph: {
    title: "Smart Construction & Remodeling — We Fight Insurance So You Don't Have To",
    description: "Free drone inspection. Direct insurance billing. 15,000+ projects completed. 98% claim approval rate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
