# MENTI IN FIORE - Developer Handoff Document
## Documento Integrativo per Implementazione GitHub

**Obiettivo:** Fornire tutte le informazioni necessarie per implementare il progetto Menti in Fiore su repository GitHub seguendo l'analisi EAR completata.

**Requisiti preliminari:**
- Repository GitHub creata e inizializzata
- Node.js 18+ installato
- Accesso al file `menti-in-fiore-ear-analysis.md` (analisi strategica completa)

---

## 📦 PARTE 1: SETUP INIZIALE

### Step 1: Inizializzazione Next.js

```bash
# Nella root della repository
npx create-next-app@latest . --typescript --tailwind --app --eslint

# Configurazione durante install:
✅ TypeScript: Yes
✅ ESLint: Yes
✅ Tailwind CSS: Yes
✅ src/ directory: No
✅ App Router: Yes
✅ Import alias (@/*): Yes
```

### Step 2: Installazione Dipendenze

```bash
npm install \
  @tailwindcss/typography \
  @tailwindcss/forms \
  clsx \
  tailwind-merge \
  lucide-react \
  date-fns \
  next-themes

# Dev dependencies
npm install -D \
  @types/node \
  prettier \
  prettier-plugin-tailwindcss
```

### Step 3: Struttura Folder

```
menti-in-fiore/
├── app/
│   ├── layout.tsx                  # Root layout con font & metadata
│   ├── page.tsx                    # Homepage
│   ├── blog/
│   │   ├── page.tsx               # Blog archive
│   │   └── [slug]/
│   │       └── page.tsx           # Single article
│   ├── categoria/
│   │   └── [slug]/
│   │       └── page.tsx           # Category archive
│   ├── chi-siamo/
│   │   └── page.tsx               # About page
│   ├── risorse/
│   │   └── page.tsx               # Resources
│   └── contatti/
│       └── page.tsx               # Contact
├── components/
│   ├── ui/
│   │   ├── button.tsx             # Button variants
│   │   ├── card.tsx               # Card base component
│   │   ├── input.tsx              # Form inputs
│   │   ├── badge.tsx              # Category badges
│   │   └── container.tsx          # Layout container
│   ├── blog/
│   │   ├── article-card.tsx       # Article cards (3 variants)
│   │   ├── article-grid.tsx       # Grid layout
│   │   ├── category-filter.tsx    # Category selector
│   │   └── related-articles.tsx   # Related posts
│   └── layout/
│       ├── header.tsx             # Site header
│       ├── footer.tsx             # Site footer
│       ├── navbar.tsx             # Navigation
│       └── newsletter-signup.tsx  # Newsletter form
├── lib/
│   ├── utils.ts                   # Utility functions (cn, etc)
│   ├── wordpress.ts               # WordPress API client
│   ├── constants.ts               # Site constants
│   └── ear/
│       ├── colors.ts              # EAR color palette
│       ├── typography.ts          # Type scale
│       └── spacing.ts             # Spacing system
├── public/
│   ├── fonts/                     # Local fonts (if needed)
│   └── images/                    # Static images
├── styles/
│   └── globals.css                # Global styles
├── types/
│   ├── wordpress.ts               # WP API types
│   └── article.ts                 # Article data types
└── tailwind.config.ts             # Tailwind configuration
```

---

## 🎨 PARTE 2: CONFIGURAZIONE TAILWIND

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // EAR Palette - Primari
        'verde-salvia': {
          DEFAULT: '#A8C5A8',
          50: '#F0F5F0',
          100: '#E1EBE1',
          200: '#C3D7C3',
          300: '#A8C5A8',
          400: '#8DB38D',
          500: '#72A172',
          600: '#5B815B',
          700: '#446144',
          800: '#2D412D',
          900: '#162016',
        },
        'beige-caldo': {
          DEFAULT: '#F5E6D3',
          50: '#FEFDFB',
          100: '#FDF9F3',
          200: '#FAF3E7',
          300: '#F5E6D3',
          400: '#F0D9BF',
          500: '#EBCCAB',
          600: '#E6BF97',
          700: '#D4A87A',
          800: '#C2915D',
          900: '#B07A40',
        },
        'blu-nebbia': {
          DEFAULT: '#C8D5E0',
          50: '#F5F7FA',
          100: '#EBF0F5',
          200: '#D7E0EB',
          300: '#C8D5E0',
          400: '#B9CAD5',
          500: '#AABFCA',
          600: '#9BB4BF',
          700: '#7D9DAC',
          800: '#5F8699',
          900: '#416F86',
        },
        // EAR Palette - Secondari
        'corallo-morbido': '#FFB5A7',
        'viola-lavanda': '#E8D5F2',
        'giallo-burro': '#FFF4D6',
        // Neutrali
        'nero-carbone': '#2A2A2A',
        'grigio-medio': '#707070',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-caveat)', 'cursive'],
      },
      fontSize: {
        // Type Scale Golden Ratio
        'hero': ['3.052rem', { lineHeight: '1.2', fontWeight: '600' }],
        '2xl': ['2.441rem', { lineHeight: '1.3', fontWeight: '600' }],
        'xl': ['1.953rem', { lineHeight: '1.4', fontWeight: '600' }],
        'lg': ['1.563rem', { lineHeight: '1.5', fontWeight: '600' }],
        'md': ['1.25rem', { lineHeight: '1.6', fontWeight: '500' }],
        'base': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'sm': ['0.8rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // Spacing Armonico 8px base
        '0.5': '4px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '6': '48px',
        '8': '64px',
        '12': '96px',
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
export default config
```

### styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }
  
  body {
    @apply bg-white text-nero-carbone antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }
}

@layer components {
  /* Container standard */
  .container-ear {
    @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  /* Prose ottimizzato per articoli */
  .article-content {
    @apply prose prose-lg max-w-none
      prose-headings:font-heading prose-headings:text-nero-carbone
      prose-p:text-nero-carbone prose-p:leading-relaxed
      prose-a:text-verde-salvia prose-a:no-underline hover:prose-a:underline
      prose-strong:text-nero-carbone prose-strong:font-semibold
      prose-img:rounded-lg prose-img:shadow-card;
  }
}

@layer utilities {
  /* Transizioni smooth */
  .transition-ear {
    @apply transition-all duration-300 ease-in-out;
  }

  /* Hover lift effect */
  .hover-lift {
    @apply transition-ear hover:translate-y-[-4px] hover:shadow-card-hover;
  }
}
```

---

## 🏗️ PARTE 3: COMPONENTI BASE

### components/ui/button.tsx

```typescript
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-heading font-semibold transition-ear',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde-salvia focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            // Variants
            'bg-verde-salvia text-white hover:brightness-110': variant === 'primary',
            'border-2 border-verde-salvia text-verde-salvia hover:bg-verde-salvia hover:text-white': variant === 'secondary',
            'hover:bg-beige-caldo': variant === 'ghost',
            // Sizes
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
```

### components/ui/badge.tsx

```typescript
import * as React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'babies' | 'toddlers' | 'preschool' | 'activities' | 'parents'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-ear',
          {
            'bg-verde-salvia/10 text-verde-salvia': variant === 'default',
            'bg-corallo-morbido/20 text-corallo-morbido': variant === 'babies',
            'bg-blu-nebbia/30 text-blu-nebbia-700': variant === 'toddlers',
            'bg-viola-lavanda/30 text-purple-700': variant === 'preschool',
            'bg-giallo-burro text-yellow-700': variant === 'activities',
            'bg-verde-salvia/20 text-verde-salvia-700': variant === 'parents',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge }
```

### components/blog/article-card.tsx

```typescript
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
```

### types/article.ts

```typescript
export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  featuredImage?: string
  category: string
  categorySlug: string
  categoryVariant?: 'babies' | 'toddlers' | 'preschool' | 'activities' | 'parents'
  date: string
  readingTime: number
  author?: {
    name: string
    avatar?: string
  }
  tags?: string[]
}

export interface Category {
  slug: string
  name: string
  description?: string
  count: number
  variant?: 'babies' | 'toddlers' | 'preschool' | 'activities' | 'parents'
}
```

### lib/utils.ts

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, parseISO } from 'date-fns'
import { it } from 'date-fns/locale'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return format(parseISO(date), 'd MMMM yyyy', { locale: it })
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}
```

---

## 🔌 PARTE 4: INTEGRAZIONE WORDPRESS

### lib/wordpress.ts

```typescript
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

  if (!res.ok) throw new Error('Failed to fetch posts')

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

  if (!res.ok) throw new Error('Failed to fetch categories')

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
```

---

## 📄 PARTE 5: PAGES TEMPLATE

### app/page.tsx (Homepage)

```typescript
import { getPosts, getCategories } from '@/lib/wordpress'
import { ArticleCard } from '@/components/blog/article-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function HomePage() {
  const { posts: featuredPosts } = await getPosts({ perPage: 1 })
  const { posts: recentPosts } = await getPosts({ perPage: 6 })
  const categories = await getCategories()

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
      {featuredPosts[0] && (
        <section className="py-12">
          <div className="container-ear">
            <h2 className="mb-6 font-heading text-2xl font-semibold">In Evidenza</h2>
            <ArticleCard article={featuredPosts[0]} variant="featured" />
          </div>
        </section>
      )}

      {/* Categories Grid */}
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

      {/* Recent Articles */}
      <section className="py-12">
        <div className="container-ear">
          <h2 className="mb-6 font-heading text-2xl font-semibold">Articoli Recenti</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.slice(1).map((post) => (
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

      {/* Newsletter CTA */}
      <section className="bg-verde-salvia/10 py-12">
        <div className="container-ear">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-2xl font-semibold">
              Ricevi Consigli Settimanali
            </h2>
            <p className="mb-6 text-grigio-medio">
              Iscriviti alla newsletter per ricevere guide, attività e risorse direttamente nella tua casella
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 rounded-md border border-grigio-medio/30 px-4 py-2 focus:border-verde-salvia focus:outline-none focus:ring-2 focus:ring-verde-salvia/50"
              />
              <Button type="submit">Iscriviti</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function getCategoryEmoji(slug: string): string {
  const emojis: Record<string, string> = {
    'babies': '👶',
    '0-2-anni': '👶',
    'toddlers': '🧸',
    '2-4-anni': '🧸',
    'preschools': '🎒',
    '4-6-anni': '🎒',
    'attivita': '🎨',
    'genitori': '❤️',
  }
  return emojis[slug] || '📚'
}
```

### app/blog/[slug]/page.tsx (Single Article)

```typescript
import { notFound } from 'next/navigation'
import { getPostBySlug, getPosts } from '@/lib/wordpress'
import { ArticleCard } from '@/components/blog/article-card'
import { Badge } from '@/components/ui/badge'
import { Clock, Calendar } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'

interface ArticlePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const { posts } = await getPosts({ perPage: 100 })
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getPostBySlug(params.slug)

  if (!article) {
    notFound()
  }

  // Get related articles (same category)
  const { posts: relatedPosts } = await getPosts({
    categories: article.categorySlug,
    perPage: 3,
  })
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
```

---

## ⚙️ PARTE 6: DEPLOYMENT

### Vercel Setup

1. **Connetti repository GitHub a Vercel:**
   - Vai su [vercel.com](https://vercel.com)
   - Import repository
   - Framework Preset: Next.js

2. **Environment Variables (.env.local):**
```bash
NEXT_PUBLIC_WORDPRESS_URL=https://mentiinfiore.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://mentiinfiore.com
```

3. **Build Settings (già auto-detect):**
```
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

4. **Performance Settings:**
   - Enable Edge Runtime per routes statiche
   - Image Optimization: Auto
   - Speed Insights: Enable

### WordPress Headless Setup

Nel backend WordPress, assicurati:
1. ✅ Permalink structure: Post name
2. ✅ REST API enabled (default)
3. ✅ CORS headers configurati (via plugin o .htaccess):

```apache
# In .htaccess WordPress
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
</IfModule>
```

---

## 📋 PARTE 7: CHECKLIST IMPLEMENTAZIONE

### Week 1: Foundation ✅
- [ ] Fork/clone repository
- [ ] Setup Next.js 15 + TypeScript
- [ ] Configurare Tailwind con palette EAR
- [ ] Creare struttura folder
- [ ] Setup fonts (Poppins, Inter, Caveat)
- [ ] Implementare lib/utils.ts e lib/wordpress.ts
- [ ] Definire types (article.ts, wordpress.ts)

### Week 2: UI Components ✅
- [ ] Button component (3 variants)
- [ ] Badge component (6 variants)
- [ ] ArticleCard (3 variants: featured, standard, mini)
- [ ] Container layout
- [ ] Header navigation
- [ ] Footer con links e social
- [ ] Newsletter signup form

### Week 3: Pages ✅
- [ ] Homepage con hero, featured, categories, recent
- [ ] Blog archive (/blog)
- [ ] Single article (/blog/[slug])
- [ ] Category archive (/categoria/[slug])
- [ ] Chi siamo page
- [ ] Contatti page

### Week 4: Features & Polish ✅
- [ ] SEO metadata (generateMetadata)
- [ ] Sitemap.xml dinamica
- [ ] robots.txt
- [ ] 404 custom page
- [ ] Loading states
- [ ] Error boundaries
- [ ] Related articles logic
- [ ] Search functionality (optional)
- [ ] Performance audit (Lighthouse)
- [ ] Deploy su Vercel

---

## 🎯 PARTE 8: PROMPT SUGGERITI PER CLAUDE

### Per iniziare lo sviluppo:
```
Sono pronto a sviluppare Menti in Fiore. Ho letto il documento di analisi EAR 
(menti-in-fiore-ear-analysis.md) e questo handoff document. 

Iniziamo con:
1. Setup iniziale Next.js + Tailwind con configurazione EAR
2. Creazione componenti UI base (Button, Badge, Card)

Procediamo passo dopo passo. Inizia con il setup e mostrami i file da creare.
```

### Per componenti specifici:
```
Crea il componente ArticleCard con le 3 varianti (featured, standard, mini) 
seguendo esattamente il design system EAR definito nel documento di analisi.
Usa la palette colori, spacing e typography scale specificati.
```

### Per integrazioni:
```
Implementa l'integrazione WordPress headless tramite REST API. 
Crea le funzioni in lib/wordpress.ts per:
- Fetch posts con paginazione
- Fetch singolo post per slug
- Fetch categorie
Include gestione errori e TypeScript types.
```

### Per testing & debug:
```
Ho deployato su Vercel ma le immagini non caricano correttamente.
Aiutami a debuggare la configurazione next/image e verifica 
che i domini WordPress siano whitelisted in next.config.js
```

---

## 🔧 PARTE 9: TROUBLESHOOTING COMUNE

### Problema: Immagini WordPress non caricano

**Soluzione:** Configurare `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mentiinfiore.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
```

### Problema: CORS errors con WordPress API

**Soluzione:** Installare plugin "WP REST API Controller" e abilitare CORS, oppure aggiungere a `functions.php`:
```php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
}, 15);
```

### Problema: Build fails su Vercel

**Checklist:**
- [ ] Tutte le env variables sono configurate
- [ ] TypeScript errors risolti (`npm run build` locale)
- [ ] Image domains configurati in next.config.js
- [ ] WordPress API accessibile pubblicamente

### Problema: Font non caricano

**Soluzione:** Usa next/font correttamente in `app/layout.tsx`:
```typescript
import { Inter, Poppins, Caveat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-poppins' })
const caveat = Caveat({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-caveat' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${poppins.variable} ${caveat.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

---

## 📚 PARTE 10: RISORSE & RIFERIMENTI

### Documentazione Tecnica
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Vercel Deployment](https://vercel.com/docs)

### Design System Reference
- `menti-in-fiore-ear-analysis.md` - Analisi completa EAR
- Figma (se disponibile) - Mockups & prototipi
- Brand guidelines - Tono di voce, valori

### Performance Targets
- Lighthouse Performance: 95+
- Lighthouse SEO: 100
- Lighthouse Accessibility: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

### Accessibility Standards
- WCAG 2.1 Level AA compliance
- Keyboard navigation completa
- Screen reader optimized
- Color contrast ratios: min 4.5:1

---

## ✅ FINAL CHECKLIST PRIMA DEL DEPLOY

**Code Quality:**
- [ ] ESLint 0 errors
- [ ] TypeScript strict mode enabled
- [ ] No console.log in production
- [ ] Componenti documentati (JSDoc comments)

**Performance:**
- [ ] Images ottimizzate (next/image)
- [ ] Fonts caricati ottimalmente (next/font)
- [ ] Code splitting verificato
- [ ] Lighthouse audit passed

**SEO:**
- [ ] Metadata configurati (title, description)
- [ ] Open Graph tags
- [ ] Schema.org markup
- [ ] Sitemap.xml generata
- [ ] robots.txt configurato

**Content:**
- [ ] Almeno 5 articoli pubblicati
- [ ] Chi siamo page completa
- [ ] Newsletter form funzionante
- [ ] Footer links verificati

**Functionality:**
- [ ] Navigazione funzionante
- [ ] Ricerca articoli (se implementata)
- [ ] Form validati
- [ ] Error states gestiti
- [ ] Loading states implementati

**Mobile:**
- [ ] Responsive design verificato
- [ ] Touch targets adeguati (min 44x44px)
- [ ] Font sizes leggibili mobile
- [ ] Hamburger menu funzionante

---

**END OF HANDOFF DOCUMENT**

Questo documento fornisce tutto il necessario per implementare Menti in Fiore.
Lavora fase per fase, testa frequentemente, e riferisciti sempre all'analisi EAR 
per decisioni di design e architettura.

**Prossimi step:**
1. Setup iniziale repository
2. Implementazione componenti base
3. Build pages principali
4. Testing & optimization
5. Deploy production

**Contatto:** Per domande o chiarimenti, fare riferimento all'analisi EAR completa 
nel file `menti-in-fiore-ear-analysis.md`.

---

**Documento preparato da:** EAR LAB - Ray  
**Framework:** Essenza-Armonia-Risonanza  
**Versione:** 1.0 - Developer Handoff  
**Data:** 16/01/2026
