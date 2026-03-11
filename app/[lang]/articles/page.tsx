import Image from "next/image"
import Link from "next/link"
import { getAllArticles } from "../../../lib/articles"
import { dictionaries } from "../../../lib/dictionaries"
import { type Locale } from "../../../lib/i18n"

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const t = dictionaries[lang]
  const articles = getAllArticles()

  return (
    <main className="mx-auto max-w-7xl px-6 py-28 text-white">
      <div className="max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Journal
        </p>

        <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.06em] text-red-700 sm:text-5xl">
          {t.nav.articles}
        </h1>

        <p className="mt-6 max-w-xl text-zinc-400">
          {t.articles.pageIntro}
        </p>
      </div>

      <section className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/${lang}/articles/${article.slug}`}
            className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-red-700/40"
          >
            {article.cover && (
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={article.cover}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>

              <h2 className="mt-4 text-2xl leading-tight text-white">
                {article.title}
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-400">
                {article.excerpt}
              </p>

              <div className="mt-6 text-[10px] uppercase tracking-[0.24em] text-red-700 transition group-hover:text-red-400">
                {t.articles.readArticle}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
