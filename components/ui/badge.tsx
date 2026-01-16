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
            'bg-corallo-morbido/20 text-red-700': variant === 'babies',
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
