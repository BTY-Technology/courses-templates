'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { CheckCircle, Clock, Users, CreditCard, ArrowLeft, Shield, Award } from 'lucide-react'

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'applepay'>('card')
  const [isProcessing, setIsProcessing] = useState(false)

  const coursePrice = 497
  const bonusValue = 408
  const discount = 100
  const total = coursePrice - discount

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page or course dashboard
      window.location.href = '/course/dashboard'
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-neutral-background flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Panel - Course Info */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-gradient-to-br from-primary/5 to-primary/10">
            {/* Logo/Brand */}
            <div className="mb-12">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <span className="text-white font-heading font-heading-bold text-lg">J</span>
                </div>
                <span className="text-primary font-heading font-heading-bold text-xl">StudyWithJohn</span>
              </Link>
            </div>

            {/* Course Title */}
            <div className="mb-12">
              <h1 className="font-heading font-heading-extrabold text-3xl md:text-4xl text-text-primary mb-4">
                Complete ASWB Exam Mastery
              </h1>
              <p className="text-text-secondary font-body text-lg leading-relaxed">
                Everything you need to pass your ASWB licensing exam on the first try. Proven frameworks, 500+ practice questions, and lifetime access to all materials.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-heading font-heading-semibold text-text-primary mb-1">
                    Lifetime Access
                  </h3>
                  <p className="text-text-secondary text-sm font-body">
                    All course materials, updates, and bonuses forever
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-heading-semibold text-text-primary mb-1">
                    30-Day Guarantee
                  </h3>
                  <p className="text-text-secondary text-sm font-body">
                    Full refund if you&apos;re not completely satisfied
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-heading-semibold text-text-primary mb-1">
                    Community & Support
                  </h3>
                  <p className="text-text-secondary text-sm font-body">
                    Live Q&A sessions and direct access to John
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-heading font-heading-semibold text-text-primary mb-1">
                    89% Pass Rate
                  </h3>
                  <p className="text-text-secondary text-sm font-body">
                    Join 2,000+ students who passed on their first try
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-primary/10">
              <p className="text-xs text-text-secondary font-body mb-3">
                🔒 Secure payment processing
              </p>
              <div className="flex items-center gap-4 text-xs text-text-secondary">
                <span>Stripe secured</span>
                <span>•</span>
                <span>SSL encrypted</span>
                <span>•</span>
                <span>PCI compliant</span>
              </div>
            </div>
          </div>

          {/* Right Panel - Payment Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-white">
            {/* Order Summary */}
            <div className="mb-10">
              <h2 className="text-xs font-heading font-heading-semibold text-text-secondary mb-6 uppercase tracking-wider">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-text-primary font-body">
                  <span>ASWB Exam Mastery Course</span>
                  <span className="font-body-medium">${coursePrice}</span>
                </div>
                <div className="flex justify-between text-text-primary font-body">
                  <span>Bonus Materials</span>
                  <span className="font-body-medium">${bonusValue}</span>
                </div>
                <div className="flex justify-between text-success font-body">
                  <span>Early Bird Discount</span>
                  <span className="font-body-medium">-${discount}</span>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-border flex justify-between">
                  <span className="font-heading font-heading-semibold text-text-primary text-lg">
                    Total Today
                  </span>
                  <span className="font-accent font-accent-bold text-2xl text-primary">
                    ${total}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="mb-8">
              <h2 className="text-xs font-heading font-heading-semibold text-text-secondary mb-4 uppercase tracking-wider">
                Payment Method
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`flex-1 py-3 px-4 border rounded-lg flex items-center justify-center font-body font-body-medium text-sm transition-all ${
                    paymentMethod === 'card'
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-neutral-border bg-white text-text-secondary hover:border-primary/50'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Card
                </button>
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className={`flex-1 py-3 px-4 border rounded-lg flex items-center justify-center font-body font-body-medium text-sm transition-all ${
                    paymentMethod === 'paypal'
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-neutral-border bg-white text-text-secondary hover:border-primary/50'
                  }`}
                >
                  PayPal
                </button>
                <button
                  onClick={() => setPaymentMethod('applepay')}
                  className={`flex-1 py-3 px-4 border rounded-lg flex items-center justify-center font-body font-body-medium text-sm transition-all ${
                    paymentMethod === 'applepay'
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-neutral-border bg-white text-text-secondary hover:border-primary/50'
                  }`}
                >
                  Apple Pay
                </button>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Card number"
                type="text"
                placeholder="1234 5678 9012 3456"
                fullWidth
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Expiry"
                  type="text"
                  placeholder="MM / YY"
                  fullWidth
                  required
                />
                <Input
                  label="CVC"
                  type="text"
                  placeholder="123"
                  fullWidth
                  required
                />
              </div>

              <Input
                label="Name on card"
                type="text"
                placeholder="John Smith"
                fullWidth
                required
              />

              <Input
                label="Email address"
                type="email"
                placeholder="john@example.com"
                fullWidth
                required
                helperText="We'll send your receipt and course access here"
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isProcessing}
                disabled={isProcessing}
                className="mt-6"
              >
                {isProcessing ? 'Processing...' : `Complete Purchase - $${total}`}
              </Button>

              <p className="text-xs text-text-secondary text-center mt-4 font-body">
                By completing your purchase, you agree to our{' '}
                <Link href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Terms of Service
                </Link>
              </p>
            </form>

            {/* Back Link */}
            <div className="mt-8 text-center">
              <Link
                href="/sales"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-body text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to course details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
