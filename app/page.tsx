import { getPosts, getCategories } from '@/lib/wordpress'
import { ArticleCard } from '@/components/blog/article-card'
import { Button } from '@/components/ui/button'
import { NewsletterSignup } from '@/components/layout/newsletter-signup'
import Link from 'next/link'

function getCategoryEmoji(slug: string): string {
  const emojis: Record<string, string> = {
    'babies': '👶',
    '0-2-anni': '👶',
    'toddlers': '🧸',
    '2-4-anni': '🧸',
    'preschools': '🎒',
    'preschool': '🎒',
    '4-6-anni': '🎒',
    'attivita': '🎨',
    'genitori': '❤️',
  }
  return emojis[slug] || '📚'
}

export default async function HomePage() {
  // Fetch data with fallbacks for offline/error scenarios
  const { posts: allPosts } = await getPosts({ perPage: 7 }).catch(() => ({ posts: [], total: 0 }))
  const categories = await getCategories().catch(() => [])

  const featuredPost = allPosts[0] || null
  const recentPosts = allPosts.slice(1, 7)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige-caldo to-white py-12 md:py-20">
        <div className="container-ear">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-heading text-hero text-nero-carbone">
              Crescere Insieme, con Consapevolezza
            </h1>
            <p className="mb-8 text-lg text-grigio-medio">
              Guide, attività e supporto per genitori ed educatori nel viaggio della crescita infantile 0-6 anni
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/blog">Esplora gli Articoli</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/risorse">Risorse Gratuite</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12">
          <div className="container-ear">
            <h2 className="mb-6 font-heading text-2xl font-semibold">In Evidenza</h2>
            <ArticleCard article={featuredPost} variant="featured" />
          </div>
        </section>
      )}

      {/* Categories Grid */}
      {categories.length > 0 && (
        <section className="bg-beige-caldo/30 py-12">
          <div className="container-ear">
            <h2 className="mb-8 text-center font-heading text-2xl font-semibold">
              Esplora per Età
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.slice(0, 4).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categoria/${category.slug}`}
                  className="group rounded-lg bg-white p-6 text-center shadow-card transition-ear hover-lift"
                >
                  <div className="mb-3 text-4xl">{getCategoryEmoji(category.slug)}</div>
                  <h3 className="mb-2 font-heading text-lg font-semibold group-hover:text-verde-salvia transition-ear">
                    {category.name}
                  </h3>
                  <p className="text-sm text-grigio-medio">{category.count} articoli</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles */}
      {recentPosts.length > 0 && (
        <section className="py-12">
          <div className="container-ear">
            <h2 className="mb-6 font-heading text-2xl font-semibold">Articoli Recenti</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <ArticleCard key={post.id} article={post} variant="standard" />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="secondary">
                <Link href="/blog">Vedi Tutti gli Articoli</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <NewsletterSignup />
    </div>
  )
}
