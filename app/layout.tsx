import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaarchangel.com"),
  title: "AAARCHANGEL",
  description: "Preparedness, knowledge and resilience.",
  verification: {
  google:"kJw3k4qW73piarDOWMCLLSjhXrJZjnM1LABWEZ9lwcg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060606] text-[#f3f1eb]`}>
        {children}
      </body>
    </html>
  );
}