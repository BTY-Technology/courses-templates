import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { TestimonialCardProps } from '@/types'
import { Star, CheckCircle } from 'lucide-react'

export function TestimonialCard({ testimonial, variant = 'default' }: TestimonialCardProps) {
  const isFeatured = variant === 'featured' || testimonial.featured

  return (
    <Card
      hover
      className={isFeatured ? 'border-2 border-primary' : ''}
      padding="lg"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light overflow-hidden">
              {testimonial.studentImage ? (
                <Image
                  src={testimonial.studentImage}
                  alt={testimonial.studentName}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-heading font-heading-bold text-xl">
                  {testimonial.studentName.charAt(0)}
                </div>
              )}
            </div>
            {testimonial.passResult && (
              <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <h4 className="font-heading font-heading-semibold text-lg text-text-primary">
              {testimonial.studentName}
            </h4>
            <p className="text-sm text-text-secondary font-body">
              {testimonial.studentCredentials}
            </p>
            {/* Star Rating */}
            <div className="flex gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < testimonial.rating ? 'text-accent fill-accent' : 'text-neutral-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="flex-1 mb-4">
          <p className="text-text-primary font-body text-base leading-relaxed">
            &quot;{testimonial.quote}&quot;
          </p>
        </blockquote>

        {/* Pass Result Badge */}
        {testimonial.passResult && (
          <div className="inline-flex items-center gap-2 bg-success/10 text-success-dark px-4 py-2 rounded-lg font-body font-body-medium text-sm">
            <CheckCircle className="w-4 h-4" />
            {testimonial.passResult}
          </div>
        )}

        {/* Video Testimonial */}
        {testimonial.videoUrl && (
          <div className="mt-4">
            <button className="text-primary hover:text-primary-dark font-body font-body-medium text-sm flex items-center gap-2 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Watch Video Testimonial
            </button>
          </div>
        )}
      </div>
    </Card>
  )
}
