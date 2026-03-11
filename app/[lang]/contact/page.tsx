import { dictionaries } from "../../../lib/dictionaries";
import { type Locale } from "../../../lib/i18n";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = dictionaries[lang];

  return (
    <main className="mx-auto max-w-6xl px-6 py-28 text-white">
      <div className="max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          {t.contact.label}
        </p>

        <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.06em] text-red-700 sm:text-5xl">
          {t.contact.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {t.contact.intro}
        </p>
      </div>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            {t.contact.formLabel}
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                {t.contact.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t.contact.namePlaceholder}
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-700/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                {t.contact.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-700/50"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                {t.contact.subject}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder={t.contact.subjectPlaceholder}
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-700/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder={t.contact.messagePlaceholder}
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-700/50"
              />
            </div>

            <button
              type="submit"
              className="inline-flex rounded-2xl border border-red-700 bg-red-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            >
              {t.contact.send}
            </button>
          </form>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            {t.contact.directLabel}
          </p>

          <a
            href="mailto:contact@aaarchangel.com"
            className="mt-5 block text-2xl font-semibold text-red-700 transition hover:text-red-400"
          >
            contact@aaarchangel.com
          </a>

          <p className="mt-6 text-base leading-8 text-zinc-400">
            {t.contact.directText}
          </p>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
              {t.contact.notesLabel}
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              {t.contact.notesText}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
