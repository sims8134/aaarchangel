"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dictionaries } from "../lib/dictionaries";
import type { Locale } from "../lib/i18n";

type Props = {
  lang: Locale;
};

const languages = [
  { code: "en", flag: "/flags/128px-Flag_of_the_United_Kingdom.png" },
  { code: "fr", flag: "/flags/128px-Flag_of_France.png" },
  { code: "es", flag: "/flags/128px-Flag_of_Spain.png" },
  { code: "bg", flag: "/flags/128px-Flag_of_Bulgaria.png" },
] as const;

export default function Header({ lang }: Props) {
  const pathname = usePathname();
  const t = dictionaries[lang];

  const navItems = [
    { name: t.nav.home, href: `/${lang}` },
    { name: t.nav.articles, href: `/${lang}/articles` },
    { name: t.nav.resources, href: `/${lang}/resources` },
    { name: t.nav.shop, href: `/${lang}/shop` },
  ];

  function switchLanguage(targetLang: string) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLang}`;
    segments[0] = targetLang;
    return `/${segments.join("/")}`;
  }

  return (
    <header className="relative z-20 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href={`/${lang}`} className="flex items-center">
          <Image
            src="/logo_aaarchangel_white.png"
            alt="AAARCHANGEL"
            width={160}
            height={40}
            priority
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === `/${lang}`
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm uppercase tracking-[0.2em] transition ${
                  isActive ? "text-red-700" : "text-zinc-300 hover:text-red-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {languages.map((item) => (
            <Link
              key={item.code}
              href={switchLanguage(item.code)}
className={`flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border transition hover:border-red-700/50 ${
  item.code === lang
    ? "border-red-700 opacity-100 ring-2 ring-red-700/30"
    : "border-white/10 bg-white/5 opacity-50"
}`}
            >
              <Image
                src={item.flag}
                alt={item.code}
                width={24}
                height={24}
                className="h-full w-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}