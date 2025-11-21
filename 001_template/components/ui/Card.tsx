import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export function Card({ children, hover = false, padding = 'md', className, onClick }: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-neutral-border shadow-card',
        hover && 'transition-shadow duration-200 hover:shadow-card-hover',
        paddings[padding],
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
