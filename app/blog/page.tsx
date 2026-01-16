import { getPosts } from '@/lib/wordpress'
import { ArticleCard } from '@/components/blog/article-card'

export const metadata = {
  title: 'Blog - Menti in Fiore',
  description: 'Tutti gli articoli su educazione infantile, attività e consigli per genitori ed educatori',
}

export default async function BlogPage() {
  const { posts } = await getPosts({ perPage: 12 }).catch(() => ({ posts: [], total: 0 }))

  return (
    <div className="py-12">
      <div className="container-ear">
        <h1 className="mb-8 font-heading text-hero text-nero-carbone">
          Blog
        </h1>
        <p className="mb-12 text-lg text-grigio-medio max-w-3xl">
          Esplora tutti i nostri articoli su educazione infantile, attività pratiche e consigli per genitori ed educatori.
        </p>

        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.id} article={post} variant="standard" />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-grigio-medio">Nessun articolo disponibile al momento.</p>
          </div>
        )}
      </div>
    </div>
  )
}
