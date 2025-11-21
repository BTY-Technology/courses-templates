import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = false, className, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label className="text-sm font-body font-body-medium text-text-primary">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'px-4 py-3 border rounded-lg font-body text-text-primary',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'transition-all duration-200',
            error
              ? 'border-accent bg-accent/5'
              : 'border-neutral-border bg-white hover:border-primary/50',
            props.disabled && 'opacity-50 cursor-not-allowed bg-neutral-soft',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-accent">{error}</p>}
        {helperText && !error && <p className="text-sm text-text-secondary">{helperText}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
