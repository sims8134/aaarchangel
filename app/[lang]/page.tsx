import Image from "next/image";
import Link from "next/link";
import { dictionaries } from "../../lib/dictionaries";
import { type Locale } from "../../lib/i18n";

const categoryImages = {
  communications: "/categories/communication_img.png",
  intelligence: "/categories/intelligence_img.png",
  preparedness: "/categories/preparedness_img.png",
};

const articleKeys = ["first", "second", "third"] as const;

function TopographicBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: "url('/topo-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]" />
      <div className="absolute right-[-10%] top-[-10%] h-80 w-80 rounded-full bg-red-700/10 blur-3xl" />
    </div>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = dictionaries[lang];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-[#f3f1eb]">
      <TopographicBackground />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-28 sm:pb-36 sm:pt-36">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-red-700" />
            {t.home.badge}
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.94] tracking-[0.05em] text-red-700 sm:text-6xl xl:text-7xl">
            {t.home.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
            {t.home.intro}
          </p>

          <div className="mt-12">
            <Link
              href={`/${lang}/articles`}
              className="inline-flex rounded-2xl border border-red-700 bg-red-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            >
              {t.home.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid gap-8 md:grid-cols-3">
          {(Object.keys(categoryImages) as Array<keyof typeof categoryImages>).map((key) => (
            <article
              key={key}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-red-700/40 hover:shadow-[0_0_40px_rgba(185,28,28,0.12)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={categoryImages[key]}
                  alt={t.categories[key].title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />
              </div>
              <div className="p-6 transition duration-300 group-hover:-translate-y-1">
                <h2 className="text-lg font-semibold uppercase tracking-[0.14em] text-red-700">
                  {t.categories[key].title}
                </h2>
                <p className="mt-3 text-base leading-7 text-zinc-300">
                  {t.categories[key].description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="relative z-10 mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Selected articles
          </p>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.05em] text-red-700">
            {t.home.recent}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {articleKeys.map((key) => (
            <article
              key={key}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-700/40"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                {t.articles[key].category}
              </p>
              <h3 className="mt-4 text-2xl leading-tight text-white">
                {t.articles[key].title}
              </h3>
              <p className="mt-4 text-base leading-8 text-zinc-400">
                {t.articles[key].excerpt}
              </p>
              <div className="mt-8">
                <Link
                  href={`/${lang}/articles`}
                  className="text-[10px] uppercase tracking-[0.2em] text-red-700 transition hover:text-red-400"
                >
                  {t.articles.readArticle}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Resources & Shop */}
      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 py-28 sm:py-36 md:grid-cols-2">
        <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-red-700/40">
          <div className="relative aspect-[16/10] w-full">
            <Image src="/categories/intelligence_img.png" alt="Resources" fill className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
          <div className="p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{t.nav.resources}</p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.05em] text-red-700">{t.home.resources}</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-zinc-400">{t.home.resourcesDesc}</p>
            <div className="mt-8">
              <Link href={`/${lang}/resources`} className="text-[10px] uppercase tracking-[0.2em] text-red-700 transition hover:text-red-400">
                {t.home.resourcesCta}
              </Link>
            </div>
          </div>
        </article>

        <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-red-700/40">
          <div className="relative aspect-[16/10] w-full">
            <Image src="/categories/preparedness_img.png" alt="Shop" fill className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
          <div className="p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{t.nav.shop}</p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.05em] text-red-700">{t.home.shop}</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-zinc-400">{t.home.shopDesc}</p>
            <div className="mt-8">
              <Link href={`/${lang}/shop`} className="text-[10px] uppercase tracking-[0.2em] text-red-700 transition hover:text-red-400">
                {t.home.shopCta}
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
