'use client'

import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { cn } from '@/lib/utils'
import {
  Check,
  Lock,
  Users,
  Clock,
  Award,
  BookOpen,
  Video,
  FileText,
  MessageSquare,
  Trophy,
  Star,
  ArrowRight,
  Calendar,
  Zap
} from 'lucide-react'

export default function SalesPage() {
  const modules = [
    {
      title: 'Human Development & Behavior',
      lessons: 12,
      duration: '180 minutes',
      topics: ['Developmental Theories', 'Psychopathology', 'Behavioral Frameworks', 'Crisis Intervention'],
    },
    {
      title: 'Assessment & Diagnosis',
      lessons: 15,
      duration: '225 minutes',
      topics: ['DSM-5 Criteria', 'Assessment Tools', 'Diagnostic Process', 'Cultural Considerations'],
    },
    {
      title: 'Therapeutic Interventions',
      lessons: 18,
      duration: '270 minutes',
      topics: ['CBT & DBT', 'Family Systems', 'Trauma-Informed Care', 'Group Therapy'],
    },
    {
      title: 'Professional Ethics & Practice',
      lessons: 10,
      duration: '150 minutes',
      topics: ['NASW Code of Ethics', 'Boundaries', 'Confidentiality', 'Legal Issues'],
    },
  ]

  const bonuses = [
    {
      icon: FileText,
      title: '500+ Practice Questions',
      value: '$97',
      description: 'Real exam-style questions with detailed explanations',
    },
    {
      icon: Video,
      title: 'Mock Exam Simulator',
      value: '$67',
      description: 'Full-length practice exams in timed mode',
    },
    {
      icon: BookOpen,
      title: 'Study Templates Pack',
      value: '$47',
      description: 'Flashcards, study schedules, and note templates',
    },
    {
      icon: MessageSquare,
      title: 'Live Q&A Sessions',
      value: '$197',
      description: 'Twice weekly with John (lifetime access)',
    },
  ]

  const paymentPlans = [
    {
      name: 'Pay in Full',
      price: 497,
      type: 'One-time payment',
      savings: 'Save $100',
      popular: true,
    },
    {
      name: '3 Payments',
      price: 199,
      type: 'per month for 3 months',
      savings: '',
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Decorative Gradient Blobs */}
      <div className="hidden lg:block fixed -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-primary/40 to-primary-light/30 opacity-30 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="hidden lg:block fixed top-20 right-0 w-72 h-72 bg-gradient-to-br from-accent/30 to-success/20 opacity-40 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="hidden lg:block fixed bottom-0 left-1/2 -translate-x-1/2 w-96 h-44 bg-gradient-to-br from-primary/20 via-accent/20 to-success/10 opacity-30 rounded-full blur-3xl z-0 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-6 md:mb-8">
            <Badge variant="accent" size="lg" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Join 2,000+ Successful Students
            </Badge>
            <h1 className="font-heading font-heading-extrabold text-4xl lg:text-6xl text-text-primary mb-6">
              Complete ASWB Exam <span className="text-primary">Mastery Program</span>
            </h1>
            <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto mb-8">
              Everything you need to pass your ASWB licensing exam on the first try, backed by an 89% pass rate and 30-day guarantee.
            </p>
          </div>

          {/* Course Header Card - Glassmorphism Style */}
          <div className="relative w-full rounded-3xl bg-white/60 border border-white/40 shadow-xl overflow-hidden backdrop-blur-xl mb-10">
            {/* Card Gradient Backgrounds */}
            <div className="hidden md:block absolute -top-20 -left-16 w-56 h-56 bg-gradient-to-br from-primary/40 to-primary-light/30 opacity-30 rounded-full blur-2xl" />
            <div className="hidden md:block absolute -bottom-12 -right-16 w-52 h-52 bg-gradient-to-br from-accent/40 to-success/30 opacity-40 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-10 pt-6 md:pt-10 pb-6 md:pb-7">
              {/* Course Icon */}
              <div className="flex-shrink-0 w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg">
                <Award className="w-16 h-16 text-white" />
              </div>

              {/* Course Info */}
              <div className="flex-1 flex flex-col gap-3">
                <h2 className="font-heading font-heading-extrabold text-3xl text-text-primary mb-1 leading-tight">
                  ASWB Exam Mastery
                </h2>
                <div className="flex flex-wrap gap-4 text-text-secondary font-body-medium text-sm">
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    14 hours
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    55 lessons
                  </span>
                  <span className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-success" />
                    All levels
                  </span>
                </div>
                <p className="text-text-primary font-body text-base mt-2 leading-relaxed">
                  Master all 4 core content areas with John&apos;s proven memory frameworks and real-world examples. From developmental theories to ethics, this comprehensive program prepares you for every section of the ASWB exam.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-heading font-heading-bold text-lg shadow">
                    J
                  </div>
                  <div>
                    <div className="text-text-primary font-heading-semibold text-sm">John</div>
                    <div className="text-text-secondary text-xs">Licensed Clinical Social Worker</div>
                  </div>
                </div>

                {/* Urgency Bar */}
                <div className="flex items-center gap-3 mt-4 p-3 rounded-xl bg-accent/10 border border-accent/20">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="flex-1">
                    <span className="font-heading-semibold text-text-primary text-sm">
                      Next cohort starts: <span className="text-accent">December 1, 2024</span>
                    </span>
                  </div>
                  <Badge variant="accent" size="sm">
                    <Zap className="w-3 h-3 mr-1" />
                    12 spots left
                  </Badge>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
                    onClick={() => (window.location.href = '/checkout')}
                  >
                    Enroll Now
                  </Button>
                  <div className="text-text-primary">
                    <span className="font-accent font-accent-bold text-2xl">$497</span>
                    <span className="text-text-secondary text-sm ml-1">one-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 max-w-content">
          <h2 className="section-title text-center mb-12">
            What You&apos;ll <span className="text-success">Achieve</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Pass your ASWB exam on the first try',
              'Master all 4 core content areas',
              'Memorize complex concepts effortlessly',
              'Build exam-taking confidence',
              'Understand real-world application',
              'Join a supportive community',
            ].map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <span className="text-text-primary font-body text-lg">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum & Details - Glassmorphism Layout */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Course Sidebar */}
            <aside className="md:col-span-1 bg-white/70 border border-white/40 rounded-2xl p-6 shadow-lg backdrop-blur-lg flex flex-col gap-5">
              <h2 className="font-heading font-heading-bold text-lg text-text-primary mb-2">
                About this course
              </h2>
              <p className="text-text-primary font-body text-sm leading-relaxed">
                Dive into ASWB exam essentials with John&apos;s proven methodology. Each module provides hands-on practice questions, memory frameworks, and real-world examples to solidify your learning.
              </p>
              <div>
                <h3 className="font-heading font-heading-semibold text-text-primary mb-2 text-sm">
                  What you&apos;ll learn:
                </h3>
                <ul className="space-y-2 text-text-primary text-sm">
                  {[
                    'Human development theories',
                    'DSM-5 diagnostic criteria',
                    'Evidence-based interventions',
                    'NASW Code of Ethics',
                    'Clinical assessment skills',
                    'Treatment planning',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-heading-semibold text-text-primary mb-2 text-sm">
                  Course includes:
                </h4>
                <ul className="space-y-2 text-text-primary text-sm">
                  {[
                    '55 video lessons',
                    '500+ practice questions',
                    'Mock exam simulator',
                    'Downloadable resources',
                    'Live Q&A sessions',
                    'Lifetime access',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Curriculum */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <h2 className="font-heading font-heading-bold text-xl text-text-primary">
                Complete Curriculum
              </h2>
              <p className="text-text-secondary font-body text-sm -mt-3">
                55 video lessons • 825 minutes • Lifetime access
              </p>

              <div className="flex flex-col gap-4">
                {modules.map((module, index) => (
                  <div
                    key={index}
                    className="relative bg-white/70 border border-white/40 rounded-2xl px-6 py-5 flex items-center justify-between shadow-sm backdrop-blur-lg group hover:bg-white/80 transition"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={cn(
                          'w-12 h-12 rounded-xl flex items-center justify-center shadow font-heading font-heading-bold text-white text-lg',
                          index === 0 && 'bg-gradient-to-br from-primary to-primary-light',
                          index === 1 && 'bg-gradient-to-br from-accent to-accent-light',
                          index === 2 && 'bg-gradient-to-br from-success to-success-light',
                          index === 3 && 'bg-gradient-to-br from-primary-light to-accent'
                        )}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-heading font-heading-semibold text-text-primary mb-1">
                          {module.title}
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs text-text-secondary">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5" />
                            {module.lessons} lessons
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ArrowRight className="w-5 h-5 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading font-heading-extrabold text-3xl text-center text-text-primary mb-2">
            Exclusive <span className="text-accent">Bonuses</span>
          </h2>
          <p className="text-center text-text-secondary font-body mb-8">
            $408 in bonus materials included free
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="relative bg-white/70 border border-white/40 rounded-2xl p-6 shadow-sm backdrop-blur-lg hover:bg-white/80 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 shadow">
                    <bonus.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading font-heading-semibold text-lg text-text-primary">
                        {bonus.title}
                      </h3>
                      <Badge variant="accent" size="sm">
                        {bonus.value}
                      </Badge>
                    </div>
                    <p className="text-text-secondary font-body text-sm">{bonus.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading font-heading-extrabold text-4xl text-center text-gray-900 mb-3">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="text-center text-gray-600 font-body text-lg mb-12">
            30-day money-back guarantee on all plans
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {paymentPlans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  'relative bg-white rounded-3xl p-10 shadow-xl flex flex-col',
                  plan.popular ? 'border-2 border-primary' : 'border border-gray-200'
                )}
              >
                <div className="flex-1">
                  {plan.popular && (
                    <div className="flex justify-center mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success font-body font-body-semibold text-sm">
                        <Trophy className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  {!plan.popular && <div className="h-[52px]" />}
                  <div className="text-center mb-8">
                    <h3 className="font-heading font-heading-bold text-2xl text-gray-900 mb-4">
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className="font-heading font-heading-extrabold text-5xl text-primary">
                        ${plan.price}
                      </span>
                    </div>
                    <p className="text-gray-600 font-body text-base mb-3">{plan.type}</p>
                    {plan.savings && (
                      <div className="inline-block px-4 py-1.5 rounded-full bg-success/10 text-success font-body font-body-semibold text-sm">
                        {plan.savings}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[
                      'Complete course access',
                      'All 55 video lessons',
                      '500+ practice questions',
                      'Live Q&A sessions',
                      'All bonus materials',
                      'Lifetime updates',
                      'Community access',
                      '30-day guarantee',
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-gray-700 font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="w-full py-4 px-6 rounded-full bg-primary hover:bg-primary-dark text-white font-heading font-heading-semibold text-lg transition-colors flex items-center justify-center gap-2"
                  onClick={() => (window.location.href = '/checkout')}
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="relative max-w-2xl mx-auto bg-success/10 border border-success/30 rounded-2xl p-6 backdrop-blur-lg shadow">
              <div className="flex items-center justify-center gap-4 text-success-dark">
                <Award className="w-8 h-8" />
                <p className="font-heading font-heading-semibold text-lg">
                  30-Day Money-Back Guarantee • No Questions Asked
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-border shadow-card-hover py-4 z-40">
        <div className="container mx-auto px-4 max-w-content">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <span className="font-accent font-accent-bold text-3xl text-primary">$497</span>
              <div>
                <p className="font-heading font-heading-semibold text-text-primary">
                  Complete ASWB Mastery
                </p>
                <p className="text-sm text-text-secondary">
                  <ProgressBar percentage={75} size="sm" showLabel={false} className="w-32" />
                  <span className="ml-2">You&apos;re 1 click away</span>
                </p>
              </div>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = '/checkout')}
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Add padding to prevent content from being hidden by sticky bar */}
      <div className="h-24" />

      <Footer />
    </div>
  )
}
