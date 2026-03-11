"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dictionaries } from "../lib/dictionaries";
import type { Locale } from "../lib/i18n";

type Props = {
  lang: Locale;
};

export default function Footer({ lang }: Props) {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const t = dictionaries[lang];

  const footerLinks = [
    { name: t.nav.about, href: `/${lang}/about` },
    { name: t.nav.contact, href: `/${lang}/contact` },
    { name: t.nav.legal, href: `/${lang}/legal` },
  ];

  return (
    <footer className="relative z-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-3">
          <div className="text-center lg:text-left">
            <div className="text-sm font-semibold tracking-[0.3em] text-white">
              AAARCHANGEL
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/logo_aaarchangel_white.png"
              alt="AAARCHANGEL"
              width={220}
              height={80}
              className="h-28 w-auto opacity-95"
            />
          </div>

          <nav className="flex justify-center gap-8 text-[10px] uppercase tracking-[0.2em] lg:justify-end">
            {footerLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition ${
                    isActive ? "text-red-700" : "text-zinc-400 hover:text-red-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          © {year} AAARCHANGEL
        </div>
      </div>
    </footer>
  );
}