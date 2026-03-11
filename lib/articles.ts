import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

const articlesDirectory = path.join(process.cwd(), "content/articles")

export type ArticleMeta = {
  title: string
  date: string
  excerpt: string
  readingTime: string
  slug: string
  cover?: string
}

export type TocItem = {
  id: string
  text: string
}

export type Article = {
  meta: {
    title: string
    date: string
    excerpt: string
    readingTime: string
    cover?: string
  }
  content: string
  toc: TocItem[]
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
}

function extractToc(markdown: string): TocItem[] {
  const lines = markdown.split("\n")

  return lines
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim()
      return {
        id: slugify(text),
        text,
      }
    })
}

function addHeadingIds(html: string): string {
  return html.replace(/<h2>(.*?)<\/h2>/g, (_match, text) => {
    const cleanText = String(text).replace(/<[^>]+>/g, "")
    const id = slugify(cleanText)
    return `<h2 id="${id}">${text}</h2>`
  })
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(articlesDirectory)

  const articles = files.map((file) => {
    const slug = file.replace(".md", "")

    const fullPath = path.join(articlesDirectory, file)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data } = matter(fileContents)

    return {
      ...(data as Omit<ArticleMeta, "slug">),
      slug,
    }
  })

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)

  const toc = extractToc(content)
  const htmlContent = await marked.parse(content)
  const contentWithIds = addHeadingIds(htmlContent)

  return {
    meta: data as Article["meta"],
    content: contentWithIds,
    toc,
  }
}