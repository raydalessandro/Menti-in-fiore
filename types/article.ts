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
