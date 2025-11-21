import React from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  children,
  className,
}: ButtonProps) {
  const baseStyles = 'font-heading font-heading-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-dark shadow-lg hover:shadow-xl backdrop-blur-sm bg-opacity-90',
    secondary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl backdrop-blur-sm bg-opacity-90',
    success: 'bg-success text-white hover:bg-success-dark shadow-lg hover:shadow-xl backdrop-blur-sm bg-opacity-90',
    outline: 'bg-transparent border-2 border-primary text-primary hover:border-primary-dark hover:text-primary-dark',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}
