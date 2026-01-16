import { notFound } from 'next/navigation'
import { getPostBySlug, getPosts } from '@/lib/wordpress'
import { ArticleCard } from '@/components/blog/article-card'
import { Badge } from '@/components/ui/badge'
import { Clock, Calendar } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const { posts } = await getPosts({ perPage: 100 }).catch(() => ({ posts: [], total: 0 }))
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getPostBySlug(slug)

  if (!article) {
    return {
      title: 'Articolo non trovato',
    }
  }

  return {
    title: `${article.title} - Menti in Fiore`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: article.featuredImage ? [article.featuredImage] : [],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getPostBySlug(slug)

  if (!article) {
    notFound()
  }

  // Get related articles (same category)
  const { posts: relatedPosts } = await getPosts({
    categories: article.categorySlug,
    perPage: 3,
  }).catch(() => ({ posts: [], total: 0 }))

  const filteredRelated = relatedPosts.filter((p) => p.id !== article.id).slice(0, 2)

  return (
    <article className="py-8">
      {/* Header */}
      <div className="container-ear mb-8">
        <div className="mx-auto max-w-3xl">
          <Badge variant={article.categoryVariant} className="mb-4">
            {article.category}
          </Badge>
          <h1 className="mb-4 font-heading text-hero text-nero-carbone">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-grigio-medio">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(article.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {article.readingTime} min di lettura
            </span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {article.featuredImage && (
        <div className="container-ear mb-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container-ear">
        <div className="mx-auto max-w-3xl">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content || '' }}
          />
        </div>
      </div>

      {/* Related Articles */}
      {filteredRelated.length > 0 && (
        <div className="container-ear mt-12">
          <h2 className="mb-6 font-heading text-2xl font-semibold">Articoli Correlati</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {filteredRelated.map((post) => (
              <ArticleCard key={post.id} article={post} variant="standard" />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
