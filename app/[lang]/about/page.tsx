import { dictionaries } from "../../../lib/dictionaries";
import { type Locale } from "../../../lib/i18n";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = dictionaries[lang];

  return (
    <main className="mx-auto max-w-5xl px-6 py-28 text-white">
      <div className="max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          {t.about.label}
        </p>

        <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.06em] text-red-700 sm:text-5xl">
          {t.about.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {t.about.intro}
        </p>
      </div>

      <section className="mt-20 grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold uppercase tracking-[0.14em] text-red-700">
            {t.about.purposeTitle}
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-300">
            {t.about.purpose1}
          </p>
          <p className="mt-5 text-base leading-8 text-zinc-300">
            {t.about.purpose2}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold uppercase tracking-[0.14em] text-red-700">
            {t.about.approachTitle}
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-300">
            {t.about.approach1}
          </p>
          <p className="mt-5 text-base leading-8 text-zinc-300">
            {t.about.approach2}
          </p>
        </div>
      </section>

      <section className="mt-24 border-t border-white/10 pt-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-red-700">
              {t.categories.communications.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              {t.about.commDesc}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-red-700">
              {t.categories.intelligence.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              {t.about.intelDesc}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-red-700">
              {t.categories.preparedness.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              {t.about.prepDesc}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
