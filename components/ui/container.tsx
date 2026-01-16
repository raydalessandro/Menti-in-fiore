import * as React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn('container-ear', className)} {...props}>
      {children}
    </div>
  )
}
