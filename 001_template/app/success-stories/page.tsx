'use client'

import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { TestimonialCard } from '@/components/marketing/TestimonialCard'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Award, TrendingUp, Users, Target, ArrowRight } from 'lucide-react'
import type { Testimonial } from '@/types'

export default function SuccessStoriesPage() {
  // Sample testimonials - in production, fetch from API
  const testimonials: Testimonial[] = [
    {
      id: '1',
      studentName: 'Sarah Johnson',
      studentImage: '',
      studentCredentials: 'LMSW, New York',
      quote: 'John\'s unique memory frameworks made complex concepts stick. I passed on my first try with a score I never thought possible! The practice questions were spot-on and the community support was invaluable.',
      rating: 5,
      passResult: 'Passed First Try - 88%',
      featured: true,
      createdAt: new Date('2024-09-15'),
    },
    {
      id: '2',
      studentName: 'Michael Chen',
      studentImage: '',
      studentCredentials: 'LCSW, California',
      quote: 'The practice questions were incredibly similar to the actual exam. John\'s teaching style is engaging and easy to follow. I felt completely prepared on exam day.',
      rating: 5,
      passResult: 'Passed First Try - 92%',
      featured: true,
      createdAt: new Date('2024-08-22'),
    },
    {
      id: '3',
      studentName: 'Aisha Williams',
      studentImage: '',
      studentCredentials: 'LICSW, Massachusetts',
      quote: 'Best investment I made in my career. The personalized support and study plan made all the difference. John answered every question I had within 24 hours.',
      rating: 5,
      passResult: 'Passed with 90%',
      featured: false,
      createdAt: new Date('2024-07-10'),
    },
    {
      id: '4',
      studentName: 'David Rodriguez',
      studentImage: '',
      studentCredentials: 'LMSW, Texas',
      quote: 'Failed my first attempt with another program. StudyWithJohn helped me understand what I was missing. Passed on my second try with confidence!',
      rating: 5,
      passResult: 'Passed Second Attempt - 85%',
      featured: false,
      createdAt: new Date('2024-06-18'),
    },
    {
      id: '5',
      studentName: 'Emily Patel',
      studentImage: '',
      studentCredentials: 'LCSW, Illinois',
      quote: 'The memory devices are genius! I still remember them months after passing. The mock exams prepared me perfectly for the real thing.',
      rating: 5,
      passResult: 'Passed First Try - 91%',
      featured: false,
      createdAt: new Date('2024-05-25'),
    },
    {
      id: '6',
      studentName: 'James Thompson',
      studentImage: '',
      studentCredentials: 'LMSW, Florida',
      quote: 'As a working parent, I needed a flexible study schedule. StudyWithJohn\'s self-paced format was perfect. Studied during nap times and passed!',
      rating: 5,
      passResult: 'Passed First Try - 87%',
      featured: false,
      createdAt: new Date('2024-04-12'),
    },
    {
      id: '7',
      studentName: 'Maria Garcia',
      studentImage: '',
      studentCredentials: 'LICSW, Washington',
      quote: 'The live Q&A sessions were incredibly helpful. John\'s real-world examples made the ethics section so much clearer. Highly recommend!',
      rating: 5,
      passResult: 'Passed First Try - 93%',
      featured: false,
      createdAt: new Date('2024-03-08'),
    },
    {
      id: '8',
      studentName: 'Robert Lee',
      studentImage: '',
      studentCredentials: 'LCSW, Oregon',
      quote: 'The study materials are comprehensive and well-organized. I felt prepared for every section of the exam. Worth every penny!',
      rating: 5,
      passResult: 'Passed First Try - 89%',
      featured: false,
      createdAt: new Date('2024-02-20'),
    },
    {
      id: '9',
      studentName: 'Jennifer Brown',
      studentImage: '',
      studentCredentials: 'LMSW, Arizona',
      quote: 'John\'s teaching style made studying enjoyable. The community forum connected me with other students who became study buddies.',
      rating: 5,
      passResult: 'Passed First Try - 86%',
      featured: false,
      createdAt: new Date('2024-01-15'),
    },
  ]

  const stats = [
    {
      icon: Award,
      value: '89%',
      label: 'Pass Rate',
      description: 'Above national average',
    },
    {
      icon: Users,
      value: '2,000+',
      label: 'Students Passed',
      description: 'And counting',
    },
    {
      icon: TrendingUp,
      value: '4.9/5',
      label: 'Average Rating',
      description: 'From 500+ reviews',
    },
    {
      icon: Target,
      value: '92%',
      label: 'First Try Pass',
      description: 'Success rate',
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-success/5 via-white to-success/10 py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-content">
          <div className="text-center mb-12">
            <Badge variant="success" size="lg" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Real Results from Real Students
            </Badge>
            <h1 className="font-heading font-heading-extrabold text-4xl lg:text-6xl text-text-primary mb-6">
              Success <span className="text-success">Stories</span>
            </h1>
            <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
              Join thousands of social workers who&apos;ve achieved their licensing dreams with StudyWithJohn.
              Read their inspiring journeys from student to licensed professional.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-success" />
                </div>
                <p className="font-accent font-accent-bold text-3xl lg:text-4xl text-text-primary mb-1">
                  {stat.value}
                </p>
                <p className="font-heading font-heading-semibold text-sm text-text-primary mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-text-secondary">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 max-w-content">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Featured <span className="text-primary">Success Stories</span>
            </h2>
            <p className="section-subtitle">
              Our top-performing students share their journey to success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {testimonials
              .filter((t) => t.featured)
              .map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  variant="featured"
                />
              ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="section bg-neutral-background">
        <div className="container mx-auto px-4 max-w-content">
          <div className="text-center mb-12">
            <h2 className="section-title">All Student Reviews</h2>
            <p className="section-subtitle">
              Hear from the entire StudyWithJohn community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials
              .filter((t) => !t.featured)
              .map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 max-w-content text-center">
          <h2 className="font-heading font-heading-extrabold text-4xl lg:text-5xl mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 font-body max-w-3xl mx-auto mb-8">
            Join our community of successful social workers. Start your journey to becoming licensed today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = '/sales')}
            >
              Enroll in Course
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => (window.location.href = '/#lead-magnet')}
            >
              Get Free Study Guide
            </Button>
          </div>
          <p className="text-white/70 text-sm font-body mt-8">
            Join 2,000+ students who passed their ASWB exam
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
