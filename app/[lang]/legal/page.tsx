import { dictionaries } from "../../../lib/dictionaries";
import { type Locale } from "../../../lib/i18n";

export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = dictionaries[lang];

  return (
    <main className="mx-auto max-w-4xl px-6 py-28 text-white">
      <div className="max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          {t.legal.label}
        </p>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.06em] text-red-700 sm:text-5xl">
          {t.legal.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {t.legal.intro}
        </p>
      </div>

      <section className="mt-20">
        <h2 className="text-lg font-semibold uppercase tracking-[0.14em] text-red-700">
          {t.legal.noticeTitle}
        </h2>
        <p className="mt-6 text-base leading-8 text-zinc-300">{t.legal.notice1}</p>
        <p className="mt-4 text-base leading-8 text-zinc-300">Contact: contact@aaarchangel.com</p>
      </section>

      <section className="mt-20">
        <h2 className="text-lg font-semibold uppercase tracking-[0.14em] text-red-700">
          {t.legal.privacyTitle}
        </h2>
        <p className="mt-6 text-base leading-8 text-zinc-300">{t.legal.privacy1}</p>
        <p className="mt-4 text-base leading-8 text-zinc-300">{t.legal.privacy2}</p>
      </section>

      <section className="mt-20">
        <h2 className="text-lg font-semibold uppercase tracking-[0.14em] text-red-700">
          {t.legal.disclaimerTitle}
        </h2>
        <p className="mt-6 text-base leading-8 text-zinc-300">{t.legal.disclaimer1}</p>
        <p className="mt-4 text-base leading-8 text-zinc-300">{t.legal.disclaimer2}</p>
      </section>

      <section className="mt-20 border-t border-white/10 pt-10">
        <h2 className="text-lg font-semibold uppercase tracking-[0.14em] text-red-700">
          {t.legal.copyrightTitle}
        </h2>
        <p className="mt-6 text-base leading-8 text-zinc-300">{t.legal.copyright1}</p>
        <p className="mt-4 text-base leading-8 text-zinc-300">{t.legal.copyright2}</p>
      </section>
    </main>
  );
}
