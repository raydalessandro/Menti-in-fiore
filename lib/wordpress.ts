import { Article, Category } from '@/types/article'
import { calculateReadingTime } from './utils'

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://mentiinfiore.com/wp-json/wp/v2'

interface WPPost {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  date: string
  featured_media: number
  categories: number[]
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
    }>>
  }
}

export async function getPosts(params?: {
  page?: number
  perPage?: number
  categories?: string
  search?: string
}): Promise<{ posts: Article[], total: number }> {
  const searchParams = new URLSearchParams({
    _embed: 'wp:featuredmedia,wp:term',
    per_page: String(params?.perPage || 10),
    page: String(params?.page || 1),
    ...(params?.categories && { categories: params.categories }),
    ...(params?.search && { search: params.search }),
  })

  const res = await fetch(`${WORDPRESS_API_URL}/posts?${searchParams}`, {
    next: { revalidate: 3600 } // Revalidate every hour
  })

  if (!res.ok) {
    console.error('Failed to fetch posts:', res.status, res.statusText)
    return { posts: [], total: 0 }
  }

  const total = parseInt(res.headers.get('X-WP-Total') || '0')
  const wpPosts: WPPost[] = await res.json()

  const posts = wpPosts.map(transformWPPost)

  return { posts, total }
}

export async function getPostBySlug(slug: string): Promise<Article | null> {
  const res = await fetch(
    `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=wp:featuredmedia,wp:term`,
    { next: { revalidate: 3600 } }
  )

  if (!res.ok) return null

  const wpPosts: WPPost[] = await res.json()
  if (wpPosts.length === 0) return null

  return transformWPPost(wpPosts[0])
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${WORDPRESS_API_URL}/categories?per_page=100`, {
    next: { revalidate: 86400 } // Revalidate daily
  })

  if (!res.ok) {
    console.error('Failed to fetch categories:', res.status, res.statusText)
    return []
  }

  const wpCategories = await res.json()

  return wpCategories.map((cat: any) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    count: cat.count,
    variant: mapCategoryToVariant(cat.slug),
  }))
}

function transformWPPost(wpPost: WPPost): Article {
  const category = wpPost._embedded?.['wp:term']?.[0]?.[0]
  const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0]

  return {
    id: String(wpPost.id),
    slug: wpPost.slug,
    title: wpPost.title.rendered,
    excerpt: stripHtml(wpPost.excerpt.rendered),
    content: wpPost.content.rendered,
    featuredImage: featuredMedia?.source_url,
    category: category?.name || 'Uncategorized',
    categorySlug: category?.slug || 'uncategorized',
    categoryVariant: mapCategoryToVariant(category?.slug),
    date: wpPost.date,
    readingTime: calculateReadingTime(wpPost.content.rendered),
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

function mapCategoryToVariant(slug?: string): Article['categoryVariant'] {
  const mapping: Record<string, Article['categoryVariant']> = {
    'babies': 'babies',
    '0-2-anni': 'babies',
    'toddlers': 'toddlers',
    '2-4-anni': 'toddlers',
    'preschools': 'preschool',
    '4-6-anni': 'preschool',
    'attivita': 'activities',
    'genitori': 'parents',
    'consigli-per-i-genitori': 'parents',
  }
  return slug ? mapping[slug] : undefined
}
