import Image from "next/image";
import type { Locale } from "../../../lib/i18n";

type ShopCategory = {
  title: string;
  text: string;
};

type DigitalGuide = {
  title: string;
  category: "Communications" | "Intelligence" | "Preparedness";
  format: string;
  description: string;
  image: string;
  href: string;
};

type ShopUi = {
  label: string;
  title: string;
  intro: string;
  categories: ShopCategory[];
  featuredLabel: string;
  featuredTitle: string;
  button: string;
  futureLabel: string;
  futureTitle: string;
  futureText: string;
};

const digitalGuides: DigitalGuide[] = [
  {
    title: "Civilian Communications Preparedness",
    category: "Communications",
    format: "Digital Guide",
    description: "A structured guide to practical civilian communication systems, tools and redundancy.",
    image: "/categories/communication_img.png",
    href: "#",
  },
  {
    title: "Field Intelligence Introduction",
    category: "Intelligence",
    format: "Digital Guide",
    description: "An introduction to observation, reporting and useful analytical foundations.",
    image: "/categories/intelligence_img.png",
    href: "#",
  },
  {
    title: "The Basics EDC Guide",
    category: "Preparedness",
    format: "Digital Guide",
    description: "A practical guide to everyday carry logic, essentials and realistic organization.",
    image: "/categories/preparedness_img.png",
    href: "#",
  },
];

function getUi(lang: Locale): ShopUi {
  const map: Record<Locale, ShopUi> = {
    en: {
      label: "Store",
      title: "Shop",
      intro: "Premium digital guides and future practical items built around communications, intelligence and preparedness.",
      categories: [
        { title: "Digital guides", text: "Complete paid publications covering communications, intelligence and preparedness." },
        { title: "Printable packs", text: "Curated printable reference sets, cards and practical premium documents." },
        { title: "Physical items", text: "Possible future additions such as velcro patches, flags and other field-oriented items." },
      ],
      featuredLabel: "Featured",
      featuredTitle: "Digital guides",
      button: "View guide",
      futureLabel: "Future",
      futureTitle: "The shop will expand gradually",
      futureText: "The first focus is on complete digital guides. Printable packs and physical items may be added later as the project grows.",
    },
    fr: {
      label: "Boutique",
      title: "Shop",
      intro: "Guides numériques premium et futurs articles pratiques autour des communications, du renseignement et de la préparation.",
      categories: [
        { title: "Guides numériques", text: "Publications complètes payantes couvrant les communications, le renseignement et la préparation." },
        { title: "Packs imprimables", text: "Ensembles imprimables sélectionnés, cartes et documents pratiques premium." },
        { title: "Articles physiques", text: "Ajouts possibles plus tard comme patchs velcro, drapeaux et autres objets orientés terrain." },
      ],
      featuredLabel: "Sélection",
      featuredTitle: "Guides numériques",
      button: "Voir le guide",
      futureLabel: "À venir",
      futureTitle: "La boutique s'élargira progressivement",
      futureText: "L'accent est d'abord mis sur les guides numériques complets. Des packs imprimables et des articles physiques pourront être ajoutés plus tard.",
    },
    es: {
      label: "Tienda",
      title: "Shop",
      intro: "Guías digitales premium y futuros artículos prácticos centrados en comunicaciones, inteligencia y preparación.",
      categories: [
        { title: "Guías digitales", text: "Publicaciones completas de pago sobre comunicaciones, inteligencia y preparación." },
        { title: "Packs imprimibles", text: "Conjuntos imprimibles seleccionados, tarjetas y documentos prácticos premium." },
        { title: "Artículos físicos", text: "Posibles futuras incorporaciones como parches velcro, banderas y otros objetos orientados al terreno." },
      ],
      featuredLabel: "Destacado",
      featuredTitle: "Guías digitales",
      button: "Ver guía",
      futureLabel: "Próximamente",
      futureTitle: "La tienda se ampliará gradualmente",
      futureText: "El primer enfoque son las guías digitales completas. Más adelante podrán añadirse packs imprimibles y artículos físicos.",
    },
    bg: {
      label: "Магазин",
      title: "Shop",
      intro: "Премиум дигитални ръководства и бъдещи практични продукти, свързани с комуникации, разузнаване и подготовка.",
      categories: [
        { title: "Дигитални ръководства", text: "Платени пълни публикации за комуникации, разузнаване и подготовка." },
        { title: "Печатни пакети", text: "Подбрани печатни комплекти, карти и практически премиум материали." },
        { title: "Физически продукти", text: "Възможни бъдещи добавки като велкро пачове, знамена и други полеви артикули." },
      ],
      featuredLabel: "Избрани",
      featuredTitle: "Дигитални ръководства",
      button: "Виж ръководството",
      futureLabel: "Бъдеще",
      futureTitle: "Магазинът ще се разширява постепенно",
      futureText: "Първият фокус е върху пълни дигитални ръководства. По-късно могат да бъдат добавени печатни пакети и физически продукти.",
    },
  };

  return map[lang];
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = getUi(lang);

  return (
    <main className="mx-auto max-w-7xl px-6 py-28 text-white">
      <div className="max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          {t.label}
        </p>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.06em] text-red-700 sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
          {t.intro}
        </p>
      </div>

      <section className="mt-16 grid gap-14 md:grid-cols-3">
        {t.categories.map((item: ShopCategory) => (
          <article key={item.title} className="border-t border-white/10 pt-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.14em] text-red-700">
              {item.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              {item.text}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-24">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            {t.featuredLabel}
          </p>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.05em] text-red-700">
            {t.featuredTitle}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {digitalGuides.map((guide: DigitalGuide) => (
            <article
              key={guide.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-red-700/40 hover:shadow-[0_0_40px_rgba(185,28,28,0.12)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />
              </div>

              <div className="p-6 transition duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">{guide.category}</p>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">{guide.format}</p>
                </div>
                <h3 className="mt-4 text-2xl leading-tight text-white">
                  {guide.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-zinc-400">
                  {guide.description}
                </p>
                <div className="mt-8">
                  <a
                    href={guide.href}
                    className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-red-700/40 hover:bg-white/10"
                  >
                    {t.button}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 border-t border-white/10 pt-10">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            {t.futureLabel}
          </p>
          <h2 className="mt-4 text-2xl font-bold uppercase tracking-[0.05em] text-red-700">
            {t.futureTitle}
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-400">
            {t.futureText}
          </p>
        </div>
      </section>
    </main>
  );
}
