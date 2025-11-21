'use client'

import React, { useState } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ChevronDown, Search, HelpCircle, BookOpen, CreditCard, Laptop, Users, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'exam' | 'course' | 'payment' | 'technical' | 'general'
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'exam', label: 'ASWB Exam', icon: BookOpen },
    { id: 'course', label: 'Course Content', icon: Users },
    { id: 'payment', label: 'Payment & Pricing', icon: CreditCard },
    { id: 'technical', label: 'Technical', icon: Laptop },
  ]

  const faqs: FAQItem[] = [
    // Exam Questions
    {
      id: '1',
      category: 'exam',
      question: 'What is the ASWB exam and who needs to take it?',
      answer: 'The ASWB (Association of Social Work Boards) exam is a standardized licensing exam for social workers in the United States and Canada. There are four levels: Bachelor\'s, Master\'s, Advanced Generalist, and Clinical. You need to pass the appropriate level to become licensed in your state or province.',
    },
    {
      id: '2',
      category: 'exam',
      question: 'How long should I study for the ASWB exam?',
      answer: 'Most students study for 6-12 weeks, dedicating 10-15 hours per week. With StudyWithJohn\'s focused approach, many students successfully pass with 8 weeks of consistent study. The key is quality over quantity - our memory frameworks help you retain more in less time.',
    },
    {
      id: '3',
      category: 'exam',
      question: 'What is the passing score for the ASWB exam?',
      answer: 'You need a scaled score of 400 out of 600 to pass (approximately 70% correct). The exam is adaptive, meaning the difficulty adjusts based on your performance. Our practice tests simulate this adaptive format to prepare you.',
    },
    {
      id: '4',
      category: 'exam',
      question: 'How many questions are on the ASWB exam?',
      answer: 'The exam contains 170 multiple-choice questions, with 150 scored questions and 20 unscored pretest questions. You\'ll have 4 hours to complete the exam. Our mock exams replicate this exact format and timing.',
    },
    // Course Questions
    {
      id: '5',
      category: 'course',
      question: 'How is StudyWithJohn different from other ASWB prep courses?',
      answer: 'StudyWithJohn uses unique memory frameworks and real-world examples that make complex concepts stick. Unlike generic courses, John is a licensed clinical social worker who understands both the exam and actual practice. You also get personalized support through live Q&A sessions and direct access to John.',
    },
    {
      id: '6',
      category: 'course',
      question: 'How long do I have access to the course?',
      answer: 'You have LIFETIME access to the course! Study at your own pace, and come back anytime for refreshers or updates. All future updates and new content are included at no additional cost.',
    },
    {
      id: '7',
      category: 'course',
      question: 'What if I fail the exam after taking the course?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with the course. If you fail after completing at least 80% of the course and attending live sessions, we provide FREE continued access and additional support until you pass.',
    },
    {
      id: '8',
      category: 'course',
      question: 'Are the practice questions similar to the real exam?',
      answer: 'Yes! Our 500+ practice questions are written by licensed social workers and modeled after actual ASWB exam questions. Students consistently report that our questions are very similar to what they see on test day.',
    },
    {
      id: '9',
      category: 'course',
      question: 'Can I access the course on mobile devices?',
      answer: 'Absolutely! The course is fully responsive and works on all devices - desktop, tablet, and mobile. Download the study materials and flashcards for offline access.',
    },
    // Payment Questions
    {
      id: '10',
      category: 'payment',
      question: 'What payment options are available?',
      answer: 'We offer two options: 1) Pay in full ($497) and save $100, or 2) 3 monthly payments of $199. Both options include full course access, all bonuses, and lifetime updates.',
    },
    {
      id: '11',
      category: 'payment',
      question: 'Is there a refund policy?',
      answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with the course for any reason within 30 days of purchase, contact us for a full refund - no questions asked.',
    },
    {
      id: '12',
      category: 'payment',
      question: 'Do you offer discounts for groups or organizations?',
      answer: 'Yes! We offer special pricing for schools, agencies, and groups of 5 or more. Contact us at support@studywithjohn.com for a custom quote.',
    },
    {
      id: '13',
      category: 'payment',
      question: 'Is payment secure?',
      answer: 'Absolutely. We use Stripe for payment processing, which is bank-level secure and PCI compliant. We never store your credit card information on our servers.',
    },
    // Technical Questions
    {
      id: '14',
      category: 'technical',
      question: 'What are the technical requirements?',
      answer: 'You need a modern web browser (Chrome, Safari, Firefox, or Edge) and an internet connection. The course works on Windows, Mac, iOS, and Android devices. Minimum internet speed of 5 Mbps recommended for video playback.',
    },
    {
      id: '15',
      category: 'technical',
      question: 'Can I download the videos and study materials?',
      answer: 'Study materials (PDFs, flashcards, templates) are downloadable. Videos are streamed for security but can be viewed offline through our mobile app (coming soon).',
    },
    {
      id: '16',
      category: 'technical',
      question: 'What if I have trouble accessing the course?',
      answer: 'Our support team is available Monday-Friday, 9am-6pm EST. Email support@studywithjohn.com or use the live chat. We typically respond within 24 hours (often much faster).',
    },
    // General Questions
    {
      id: '17',
      category: 'general',
      question: 'Who is John and what are his credentials?',
      answer: 'John is a licensed clinical social worker (LCSW) with over 10 years of experience in both clinical practice and exam preparation coaching. He has personally helped over 2,000 students pass their ASWB exams and maintains an 89% pass rate.',
    },
    {
      id: '18',
      category: 'general',
      question: 'How long are the video lessons?',
      answer: 'Individual lessons range from 10-30 minutes for focused learning. The complete course contains 55 lessons totaling approximately 14 hours of video content, plus practice questions and live sessions.',
    },
    {
      id: '19',
      category: 'general',
      question: 'Are live Q&A sessions recorded?',
      answer: 'Yes! All live sessions are recorded and added to your course library within 24 hours. You can watch them anytime, even if you can\'t attend live.',
    },
    {
      id: '20',
      category: 'general',
      question: 'Can I start immediately after purchasing?',
      answer: 'Yes! You get instant access to the entire course immediately after purchase. Start watching lessons, downloading materials, and taking practice tests right away.',
    },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10 py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-content text-center">
          <Badge variant="primary" size="lg" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h1 className="font-heading font-heading-extrabold text-4xl lg:text-6xl text-text-primary mb-6">
            How Can We <span className="text-primary">Help You?</span>
          </h1>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto mb-8">
            Find answers to common questions about the ASWB exam, our course, and getting started.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-neutral-border bg-white shadow-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 max-w-content">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-lg font-body font-body-medium transition-all',
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-card'
                    : 'bg-neutral-soft text-text-secondary hover:bg-neutral-border'
                )}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.length === 0 ? (
              <Card padding="lg" className="text-center">
                <p className="text-text-secondary font-body">
                  No questions found matching &quot;{searchQuery}&quot;. Try a different search term.
                </p>
              </Card>
            ) : (
              filteredFAQs.map((faq) => (
                <Card key={faq.id} padding="none" className="overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-neutral-background/50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading font-heading-semibold text-lg text-text-primary mb-1">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-text-secondary transition-transform flex-shrink-0 mt-1',
                        openFAQ === faq.id && 'transform rotate-180'
                      )}
                    />
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-6 animate-slide-down">
                      <p className="text-text-secondary font-body leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container mx-auto px-4 max-w-content">
          <Card padding="lg" className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-heading font-heading-bold text-3xl text-text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-text-secondary font-body text-lg mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Contact Support
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = '/sales')}
              >
                View Course Details
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
