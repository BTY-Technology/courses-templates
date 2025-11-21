import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ProgressBarProps } from '@/types'

export function ProgressBar({
  percentage,
  showLabel = true,
  size = 'md',
  color = 'success',
  animated = true,
  className,
}: ProgressBarProps) {
  const [currentPercentage, setCurrentPercentage] = useState(animated ? 0 : percentage)

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setCurrentPercentage(percentage)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [percentage, animated])

  const heights = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6',
  }

  const colors = {
    primary: 'bg-primary',
    success: 'bg-success',
    accent: 'bg-accent',
  }

  const isComplete = percentage >= 100

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between mb-1">
        {showLabel && (
          <span className="text-sm font-body text-text-secondary">
            {isComplete ? 'Completed!' : `${Math.round(percentage)}%`}
          </span>
        )}
      </div>
      <div className={cn('w-full bg-neutral-soft rounded-full overflow-hidden', heights[size])}>
        <div
          className={cn(
            'h-full rounded-full transition-all duration-1000 ease-out relative',
            colors[color]
          )}
          style={{ width: `${Math.min(currentPercentage, 100)}%` }}
        >
          {isComplete && (
            <div className="absolute inset-0 flex items-center justify-end pr-2">
              <svg
                className="w-4 h-4 text-white animate-scale-in"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
