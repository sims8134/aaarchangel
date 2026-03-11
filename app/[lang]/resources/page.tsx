"use client";

import Image from "next/image";
import { use, useMemo, useState } from "react";
import type { Locale } from "../../../lib/i18n";

type Category = "All" | "Communications" | "Intelligence" | "Preparedness";

type ResourceItem = {
  title: string;
  category: Exclude<Category, "All">;
  format: string;
  description: string;
  image: string;
  href: string;
};

const resources: ResourceItem[] = [
  {
    title: "Field Intelligence Introduction",
    category: "Intelligence",
    format: "PDF / DOCX",
    description: "A practical introduction to observation, reporting and analytical structure.",
    image: "/categories/intelligence_img.png",
    href: "#",
  },
  {
    title: "Writing an Intelligence Report",
    category: "Intelligence",
    format: "PDF / DOCX",
    description: "A concise framework for producing clear and structured intelligence reports.",
    image: "/categories/intelligence_img.png",
    href: "#",
  },
  {
    title: "Civilian Communications Preparedness",
    category: "Communications",
    format: "PDF / DOCX",
    description: "A practical introduction to civilian communications, tools and redundancy.",
    image: "/categories/communication_img.png",
    href: "#",
  },
  {
    title: "Baofeng Basics Guide",
    category: "Communications",
    format: "PDF / DOCX",
    description: "A simple entry guide to basic radio use, setup and field communication habits.",
    image: "/categories/communication_img.png",
    href: "#",
  },
  {
    title: "The Basics EDC Guide",
    category: "Preparedness",
    format: "PDF / DOCX",
    description: "A practical document covering everyday carry logic, essentials and organization.",
    image: "/categories/preparedness_img.png",
    href: "#",
  },
  {
    title: "72h Survival Bag Guide",
    category: "Preparedness",
    format: "PDF / DOCX",
    description: "A structured introduction to a simple, useful and realistic short-term bag setup.",
    image: "/categories/preparedness_img.png",
    href: "#",
  },
];

function getUi(lang: Locale) {
  const map = {
    en: {
      label: "Library",
      title: "Resources",
      intro: "Free downloadable guides, checklists, printable notes and practical reference material.",
      filters: { all: "All", communications: "Communications", intelligence: "Intelligence", preparedness: "Preparedness" },
      download: "Download",
      notes: "Notes",
      notesTitle: "More free materials will be added over time",
      notesText: "This section will gradually include checklists, memory sheets, printable cards and practical downloadable references.",
    },
    fr: {
      label: "Bibliothèque",
      title: "Ressources",
      intro: "Guides gratuits à télécharger, checklists, fiches imprimables et documents pratiques de référence.",
      filters: { all: "Tout", communications: "Communications", intelligence: "Renseignement", preparedness: "Préparation" },
      download: "Télécharger",
      notes: "Notes",
      notesTitle: "D'autres ressources gratuites seront ajoutées progressivement",
      notesText: "Cette section inclura progressivement des checklists, fiches mémoire, cartes imprimables et références pratiques téléchargeables.",
    },
    es: {
      label: "Biblioteca",
      title: "Recursos",
      intro: "Guías gratuitas descargables, checklists, fichas imprimables y material práctico de referencia.",
      filters: { all: "Todo", communications: "Comunicaciones", intelligence: "Inteligencia", preparedness: "Preparación" },
      download: "Descargar",
      notes: "Notas",
      notesTitle: "Se añadirán más materiales gratuitos con el tiempo",
      notesText: "Esta sección incluirá progresivamente checklists, fichas de memoria, tarjetas imprimibles y referencias prácticas descargables.",
    },
    bg: {
      label: "Библиотека",
      title: "Ресурси",
      intro: "Безплатни ръководства за изтегляне, чеклисти, принтируеми бележки и практични справочни материали.",
      filters: { all: "Всички", communications: "Комуникации", intelligence: "Разузнаване", preparedness: "Подготовка" },
      download: "Изтегли",
      notes: "Бележки",
      notesTitle: "Още безплатни материали ще бъдат добавяни постепенно",
      notesText: "Тази секция постепенно ще включва чеклисти, кратки справочни листове, карти за печат и практически материали за изтегляне.",
    },
  } as const;

  return map[lang];
}

export default function ResourcesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = use(params);
  const t = getUi(lang);

  const filters = [
    { key: "All" as Category, label: t.filters.all },
    { key: "Communications" as Category, label: t.filters.communications },
    { key: "Intelligence" as Category, label: t.filters.intelligence },
    { key: "Preparedness" as Category, label: t.filters.preparedness },
  ];

  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredResources = useMemo(() => {
    if (activeFilter === "All") return resources;
    return resources.filter((resource) => resource.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-28 text-white">
      <div className="max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{t.label}</p>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.06em] text-red-700 sm:text-5xl">{t.title}</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">{t.intro}</p>
      </div>

      <section className="mt-12 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                isActive
                  ? "border-red-700 bg-red-700 text-white"
                  : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-red-700/40 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredResources.map((resource) => (
          <article
            key={`${resource.category}-${resource.title}`}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-red-700/40 hover:shadow-[0_0_40px_rgba(185,28,28,0.12)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={resource.image}
                alt={resource.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />
            </div>

            <div className="p-6 transition duration-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">{resource.category}</p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">{resource.format}</p>
              </div>
              <h2 className="mt-4 text-2xl leading-tight text-white">{resource.title}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-400">{resource.description}</p>
              <div className="mt-8">
                <a
                  href={resource.href}
                  className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-red-700/40 hover:bg-white/10"
                >
                  {t.download}
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-24 border-t border-white/10 pt-10">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{t.notes}</p>
          <h2 className="mt-4 text-2xl font-bold uppercase tracking-[0.05em] text-red-700">{t.notesTitle}</h2>
          <p className="mt-5 text-base leading-8 text-zinc-400">{t.notesText}</p>
        </div>
      </section>
    </main>
  );
}
