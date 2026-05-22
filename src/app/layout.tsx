import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IKON Strength & Performance | #1 Hybrid Gym in Torrance",
  description:
    "Olympic lifting, powerlifting, HIIT, personal training & nutrition coaching under one roof. South Bay's premier hybrid gym in Torrance, CA.",
  keywords: [
    "gym Torrance",
    "hybrid gym",
    "Olympic lifting",
    "powerlifting",
    "personal training",
    "HIIT",
    "South Bay gym",
  ],
  openGraph: {
    title: "IKON Strength & Performance",
    description: "#1 Hybrid Gym in Torrance, CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
        <Script
          src="https://is-boring.com/track.js"
          data-site-id="ikon-strength"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
