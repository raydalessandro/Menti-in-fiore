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
          'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 shadow-soft',
          {
            'bg-verde-menta-light text-verde-menta-dark border border-verde-menta': variant === 'default' || variant === 'parents',
            'bg-rosa-pastello-lighter text-rosa-pastello border border-rosa-pastello': variant === 'babies',
            'bg-azzurro-cielo-light text-azzurro-cielo border border-azzurro-cielo': variant === 'toddlers',
            'bg-viola-sogno-light text-viola-sogno-dark border border-viola-sogno': variant === 'preschool',
            'bg-giallo-sole-light text-yellow-700 border border-giallo-sole': variant === 'activities',
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
