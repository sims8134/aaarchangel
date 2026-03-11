import Image from "next/image"
import Link from "next/link"
import { getArticleBySlug, getAllArticles } from "../../../../lib/articles"
import { notFound } from "next/navigation"
import { locales, type Locale } from "../../../../lib/i18n"

export async function generateStaticParams() {
  const articles = getAllArticles()

  return locales.flatMap((lang) =>
    articles.map((article) => ({
      lang,
      slug: article.slug,
    }))
  )
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>
}) {
  const { lang, slug } = await params

  let article
  try {
    article = await getArticleBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20 text-white">
      <article>
        <Link
          href={`/${lang}/articles`}
          className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 transition hover:text-zinc-300"
        >
          ← Back to articles
        </Link>

        {article.meta.cover && (
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={article.meta.cover}
                alt={article.meta.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          </div>
        )}

        <header className="mt-12 max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Article
          </p>

          <h1 className="mt-6 text-4xl font-bold uppercase tracking-[0.05em] sm:text-5xl">
            {article.meta.title}
          </h1>

          <div className="mt-6 flex gap-4 text-sm text-zinc-400">
            <span>{article.meta.date}</span>
            <span>•</span>
            <span>{article.meta.readingTime}</span>
          </div>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {article.meta.excerpt}
          </p>
        </header>

        {article.toc.length > 0 && (
          <nav className="mt-12 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Contents
            </p>

            <ul className="mt-4 space-y-3">
              {article.toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-zinc-300 transition hover:text-white"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div
          className="prose prose-invert mt-16 max-w-3xl prose-headings:uppercase prose-headings:tracking-[0.04em] prose-p:text-zinc-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  )
}
