import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import { CourseCardProps } from '@/types'
import { Clock, BookOpen, Award } from 'lucide-react'

export function CourseCard({ course, onClick, showProgress = false, progress = 0 }: CourseCardProps) {
  return (
    <Card hover padding="none" className="overflow-hidden cursor-pointer" onClick={onClick}>
      {/* Course Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        {course.thumbnail ? (
          <Image
            src={course.thumbnail}
            alt={course.title || 'Course'}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <BookOpen className="w-16 h-16 opacity-50" />
          </div>
        )}

        {/* Featured Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="accent" size="sm">
            <Award className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 space-y-4">
        {/* Title and Description */}
        <div>
          <h3 className="font-heading font-heading-bold text-xl text-text-primary mb-2">
            {course.title}
          </h3>
          {course.subtitle && (
            <p className="text-text-secondary font-body text-sm line-clamp-2">
              {course.subtitle}
            </p>
          )}
        </div>

        {/* Course Meta */}
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          {course.modules && (
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{course.modules.length} Modules</span>
            </div>
          )}
          {course.enrollment && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.enrollment.current}+ Students</span>
            </div>
          )}
        </div>

        {/* Features */}
        {course.features && course.features.length > 0 && (
          <ul className="space-y-2">
            {course.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-success flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary font-body">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Progress Bar (if showProgress) */}
        {showProgress && (
          <div className="pt-2 border-t border-neutral-border">
            <ProgressBar percentage={progress} size="sm" />
          </div>
        )}

        {/* Price */}
        {course.price !== undefined && (
          <div className="flex items-center justify-between pt-2 border-t border-neutral-border">
            <div>
              <span className="font-accent font-accent-bold text-2xl text-primary">
                ${course.price}
              </span>
              {course.currency && (
                <span className="text-sm text-text-secondary ml-1">{course.currency}</span>
              )}
            </div>
            <button className="text-accent hover:text-accent-dark font-body font-body-medium text-sm transition-colors">
              Learn More →
            </button>
          </div>
        )}
      </div>
    </Card>
  )
}
