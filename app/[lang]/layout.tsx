import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../lib/i18n";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aarchangel.com"),

  title: "Aarchangel — Preparedness & Resilience Knowledge Platform",
  description:
    "Open-source preparedness platform with guides on communication systems, situational awareness, resilience and civilian preparedness.",
  verification: {
  google: "kJw3k4qW73piarDOWMCLLSjhXrJZjnM1LABWEZ9lwcg",
    },
  keywords: [
    "preparedness",
    "survival knowledge",
    "resilience",
    "civil preparedness",
    "communication systems",
    "situational awareness",
    "prepping",
    "emergency preparedness",
  ],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    languages: {
      en: "/en",
      fr: "/fr",
      es: "/es",
      bg: "/bg",
    },
  },

  openGraph: {
    title: "Aarchangel",
    description: "Practical preparedness knowledge for uncertain times.",
    url: "https://aarchangel.com",
    siteName: "Aarchangel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aarchangel preparedness platform",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aarchangel",
    description: "Practical preparedness knowledge platform.",
    images: ["/og-image.jpg"],
  },
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <Header lang={lang as Locale} />
      {children}
      <Footer lang={lang as Locale} />
    </>
  );
}