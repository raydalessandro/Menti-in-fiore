import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
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
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
