import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'
import type { Article } from '@/types/article'

interface ArticleCardProps {
  article: Article
  variant?: 'featured' | 'standard' | 'mini'
}

export function ArticleCard({ article, variant = 'standard' }: ArticleCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={`/blog/${article.slug}`} className="group block">
        <div className="overflow-hidden rounded-lg bg-white shadow-card transition-ear hover-lift">
          <div className="grid gap-0 md:grid-cols-5">
            {/* Image Section - 60% */}
            <div className="relative aspect-video md:col-span-3 md:aspect-auto">
              <Image
                src={article.featuredImage || '/images/placeholder.jpg'}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nero-carbone/50 to-transparent" />
              <div className="absolute left-4 top-4">
                <Badge variant={article.categoryVariant}>{article.category}</Badge>
              </div>
            </div>

            {/* Content Section - 40% */}
            <div className="flex flex-col justify-center p-6 md:col-span-2">
              <h2 className="mb-3 font-heading text-xl font-semibold text-nero-carbone group-hover:text-verde-salvia transition-ear">
                {article.title}
              </h2>
              <p className="mb-4 line-clamp-2 text-sm text-grigio-medio">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-grigio-medio">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readingTime} min
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'mini') {
    return (
      <Link href={`/blog/${article.slug}`} className="group flex gap-3 hover-lift rounded-md p-2">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
          <Image
            src={article.featuredImage || '/images/placeholder.jpg'}
            alt={article.title}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="flex-1">
          <h5 className="mb-1 line-clamp-2 text-sm font-medium text-nero-carbone group-hover:text-verde-salvia transition-ear">
            {article.title}
          </h5>
          <time className="text-xs text-grigio-medio" dateTime={article.date}>
            {formatDate(article.date)}
          </time>
        </div>
      </Link>
    )
  }

  // Standard variant (default)
  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <article className="overflow-hidden rounded-lg bg-white shadow-card transition-ear hover-lift">
        <div className="relative aspect-[4/3]">
          <Image
            src={article.featuredImage || '/images/placeholder.jpg'}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute left-3 top-3">
            <Badge variant={article.categoryVariant}>{article.category}</Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 font-heading text-lg font-semibold text-nero-carbone group-hover:text-verde-salvia transition-ear">
            {article.title}
          </h3>
          <p className="mb-3 line-clamp-3 text-sm text-grigio-medio">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-grigio-medio">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readingTime} min
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
