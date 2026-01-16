import { getPosts, getCategories } from '@/lib/wordpress'
import { ArticleCard } from '@/components/blog/article-card'
import { Button } from '@/components/ui/button'
import { NewsletterSignup } from '@/components/layout/newsletter-signup'
import { WaveShape } from '@/components/ui/wave-shape'
import { BlobShape } from '@/components/ui/blob-shape'
import Link from 'next/link'
import { Sparkles, Heart, BookOpen, Users } from 'lucide-react'

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
    'consigli-per-i-genitori': '💝',
  }
  return emojis[slug] || '📚'
}

function getCategoryColor(slug: string): string {
  const colors: Record<string, string> = {
    'babies': 'bg-rosa-pastello-lighter border-rosa-pastello',
    'toddlers': 'bg-azzurro-cielo-light border-azzurro-cielo',
    'preschools': 'bg-viola-sogno-light border-viola-sogno',
    'attivita': 'bg-giallo-sole-light border-giallo-sole',
    'consigli-per-i-genitori': 'bg-verde-menta-light border-verde-menta',
  }
  return colors[slug] || 'bg-white border-gray-200'
}

export default async function HomePage() {
  // Fetch data with fallbacks for offline/error scenarios
  const { posts: allPosts } = await getPosts({ perPage: 7 }).catch(() => ({ posts: [], total: 0 }))
  const categories = await getCategories().catch(() => [])

  const featuredPost = allPosts[0] || null
  const recentPosts = allPosts.slice(1, 7)

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section con Wave e Blob */}
      <section className="relative bg-gradient-to-br from-rosa-pastello-lighter via-viola-sogno-light to-azzurro-cielo-light py-16 md:py-24">
        {/* Blob decorativi floating */}
        <BlobShape color="yellow" size="lg" className="absolute -right-20 top-10 opacity-40" />
        <BlobShape color="tosca" size="md" className="absolute -left-16 bottom-20 opacity-30 animate-float-slow" />
        <BlobShape color="pink" size="sm" className="absolute right-1/4 bottom-10 opacity-50 animate-float-delay" />

        <div className="container-ear relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Headline poetica */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-2 shadow-soft backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-viola-sogno" />
              <span className="font-accent text-lg text-viola-sogno">Ogni bambino è un giardino in fiore</span>
              <Sparkles className="h-5 w-5 text-viola-sogno" />
            </div>

            <h1 className="mb-6 font-heading text-4xl font-bold text-nero-carbone md:text-6xl">
              <span className="text-rosa-pastello">Crescere</span> Insieme,{' '}
              <span className="text-viola-sogno">con Consapevolezza</span>
            </h1>

            <p className="mb-8 text-lg text-grigio-medio md:text-xl">
              🌈 Coltiviamo insieme intelligenza, creatività e autostima -<br className="hidden md:block" />
              passo dopo passo, età dopo età
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-playful hover:opacity-90">
                <Link href="/blog">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Esplora gli Articoli
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="border-2 border-viola-sogno text-viola-sogno hover:bg-viola-sogno hover:text-white">
                <Link href="/risorse">
                  <Heart className="mr-2 h-5 w-5" />
                  Risorse Gratuite
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave shape bottom */}
        <WaveShape color="white" position="bottom" className="h-24" />
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12 md:py-16">
          <div className="container-ear">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-gradient-playful"></div>
              <h2 className="font-heading text-3xl font-bold text-nero-carbone">✨ In Evidenza</h2>
            </div>
            <ArticleCard article={featuredPost} variant="featured" />
          </div>
        </section>
      )}

      {/* Categories Grid - Esplora per Età */}
      {categories.length > 0 && (
        <section className="relative bg-gradient-to-b from-azzurro-cielo-light to-white py-12 md:py-16">
          <div className="container-ear relative z-10">
            <div className="mb-10 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-1 w-12 rounded-full bg-gradient-calm"></div>
                <h2 className="font-heading text-3xl font-bold text-nero-carbone">
                  Esplora per Età
                </h2>
                <div className="h-1 w-12 rounded-full bg-gradient-calm"></div>
              </div>
              <p className="text-grigio-medio">Contenuti pensati per ogni fase della crescita</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.slice(0, 4).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categoria/${category.slug}`}
                  className={`group rounded-2xl border-2 p-6 text-center shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-playful ${getCategoryColor(category.slug)}`}
                >
                  <div className="mb-4 text-6xl">{getCategoryEmoji(category.slug)}</div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-nero-carbone">
                    {category.name}
                  </h3>
                  <p className="text-sm text-grigio-medio">{category.count} articoli</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Blob decorativo */}
          <BlobShape color="purple" size="lg" className="absolute -right-32 top-1/2 opacity-20" />
        </section>
      )}

      {/* Recent Articles */}
      {recentPosts.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container-ear">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-gradient-sunshine"></div>
              <h2 className="font-heading text-3xl font-bold text-nero-carbone">
                🌟 Articoli Recenti
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <ArticleCard key={post.id} article={post} variant="standard" />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="secondary" size="lg" className="border-2 border-rosa-pastello text-rosa-pastello hover:bg-rosa-pastello hover:text-white">
                <Link href="/blog">
                  <Users className="mr-2 h-5 w-5" />
                  Vedi Tutti gli Articoli
                </Link>
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
