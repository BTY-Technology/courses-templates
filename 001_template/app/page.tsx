"use client";

import React from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/marketing/HeroSection";
import { TestimonialCard } from "@/components/marketing/TestimonialCard";
import { CourseCard } from "@/components/marketing/CourseCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Brain,
  Target,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Download,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import type { Testimonial, Course } from "@/types";

export default function HomePage() {
  // Sample data - in production, fetch from API
  const sampleTestimonials: Testimonial[] = [
    {
      id: "1",
      studentName: "Sarah Johnson",
      studentImage: "",
      studentCredentials: "LMSW, New York",
      quote:
        "John's unique memory frameworks made complex concepts stick. I passed on my first try with a score I never thought possible!",
      rating: 5,
      passResult: "Passed First Try",
      featured: true,
      createdAt: new Date(),
    },
    {
      id: "2",
      studentName: "Michael Chen",
      studentImage: "",
      studentCredentials: "LCSW, California",
      quote:
        "The practice questions were incredibly similar to the actual exam. John's teaching style is engaging and easy to follow.",
      rating: 5,
      passResult: "Passed First Try - 92%",
      featured: false,
      createdAt: new Date(),
    },
    {
      id: "3",
      studentName: "Aisha Williams",
      studentImage: "",
      studentCredentials: "LICSW, Massachusetts",
      quote:
        "Best investment I made in my career. The personalized support and study plan made all the difference.",
      rating: 5,
      passResult: "Passed with 90%",
      featured: false,
      createdAt: new Date(),
    },
  ];

  const sampleCourse: Course = {
    id: "1",
    title: "Complete ASWB Exam Mastery",
    subtitle: "Everything you need to pass your ASWB exam on the first try",
    description:
      "Comprehensive exam preparation with proven frameworks and strategies",
    price: 497,
    currency: "USD",
    thumbnail: "",
    modules: [],
    features: [
      "Lifetime access to all course materials",
      "500+ practice questions with detailed explanations",
      "John's proprietary memory frameworks",
      "Live Q&A sessions twice weekly",
    ],
    bonuses: [],
    guarantee: "30-day money-back guarantee",
    enrollment: {
      current: 2000,
      cohortStartDate: new Date(),
    },
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* What Makes Different Section */}
      <section className="section bg-white relative z-10">
        <div className="container mx-auto px-4 max-w-content">
          <div className="text-center mb-16">
            <h2 className="section-title">
              What Makes StudyWithJohn{" "}
              <span className="text-primary">Different?</span>
            </h2>
            <p className="section-subtitle">
              Not just another exam prep course. A proven system that actually
              works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Memory Frameworks",
                description:
                  "Unique mnemonics and memory devices that make complex concepts stick forever.",
              },
              {
                icon: Target,
                title: "Focused Strategy",
                description:
                  "Study what matters most. No fluff, no wasted time on low-yield content.",
              },
              {
                icon: MessageCircle,
                title: "Personal Support",
                description:
                  "Direct access to John for questions. You're never studying alone.",
              },
              {
                icon: TrendingUp,
                title: "89% Pass Rate",
                description:
                  "Our students consistently outperform the national average.",
              },
            ].map((feature, index) => (
              <Card key={index} hover padding="lg" className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-heading-semibold text-xl text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary font-body">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Breakdown Section */}
      <section className="section bg-neutral-background relative z-10">
        <div className="container mx-auto px-4 max-w-content">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Complete <span className="text-primary">Course Breakdown</span>
            </h2>
            <p className="section-subtitle">
              Structured, comprehensive, and designed for success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  module: 1,
                  title: "Human Development & Behavior",
                  lessons: 12,
                  description:
                    "Master developmental theories, psychopathology, and behavioral frameworks",
                },
                {
                  module: 2,
                  title: "Assessment & Diagnosis",
                  lessons: 15,
                  description:
                    "Learn DSM-5 criteria, assessment tools, and diagnostic processes",
                },
                {
                  module: 3,
                  title: "Therapeutic Interventions",
                  lessons: 18,
                  description:
                    "Evidence-based practices, treatment modalities, and intervention strategies",
                },
                {
                  module: 4,
                  title: "Professional Ethics & Practice",
                  lessons: 10,
                  description:
                    "NASW Code of Ethics, boundaries, and real-world ethical dilemmas",
                },
              ].map((module, index) => (
                <Card key={index} hover padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-heading font-heading-bold text-xl flex-shrink-0">
                      {module.module}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-heading font-heading-semibold text-xl text-text-primary">
                          {module.title}
                        </h3>
                        <Badge variant="primary" size="sm">
                          {module.lessons} Lessons
                        </Badge>
                      </div>
                      <p className="text-text-secondary font-body mb-4">
                        {module.description}
                      </p>
                      <Button variant="outline" size="sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Preview Module
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = "/sales")}
              >
                View Full Curriculum
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section bg-white relative z-10">
        <div className="container mx-auto px-4 max-w-content">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Real Students, <span className="text-success">Real Results</span>
            </h2>
            <p className="section-subtitle">
              Join thousands who&apos;ve achieved their social work dreams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {sampleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variant={testimonial.featured ? "featured" : "default"}
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/success-stories")}
            >
              Read More Success Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Free Lead Magnet Section */}
      <section id="lead-magnet" className="section bg-[#E8F1F5] relative z-10">
        <div className="container mx-auto px-4 max-w-content">
          <div className="max-w-4xl mx-auto">
            <Card padding="none" className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left - Content */}
                <div className="p-8 lg:p-12">
                  <Badge variant="accent" size="lg" className="mb-4">
                    <Download className="w-4 h-4 mr-2" />
                    FREE Resource
                  </Badge>
                  <h2 className="font-heading font-heading-extrabold text-3xl lg:text-4xl text-text-primary mb-4">
                    ASWB Rapid Study Guide
                  </h2>
                  <p className="text-text-secondary font-body text-lg mb-6">
                    Get instant access to my proven study framework that helped
                    2,000+ students pass their exam.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Essential memory frameworks",
                      "High-yield topic checklist",
                      "Study schedule template",
                      "Practice question samples",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-text-primary font-body">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right - Form */}
                <div className="bg-primary p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-heading font-heading-bold text-2xl text-white mb-6">
                    Download Your Free Guide
                  </h3>
                  <form className="space-y-4">
                    <div className="flex flex-col gap-1 w-full">
                      <label className="text-sm font-body font-body-medium text-white">
                        First Name<span className="text-accent ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        required
                        className="px-4 py-3 border rounded-lg font-body text-text-primary border-neutral-border bg-white hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <label className="text-sm font-body font-body-medium text-white">
                        Email Address<span className="text-accent ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="px-4 py-3 border rounded-lg font-body text-text-primary border-neutral-border bg-white hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <Button variant="primary" size="lg" fullWidth type="submit">
                      <Download className="w-5 h-5 mr-2" />
                      Get Free Study Guide
                    </Button>
                    <p className="text-white/80 text-xs text-center font-body">
                      No spam. Unsubscribe anytime. Your info is safe with us.
                    </p>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* John's Story Section */}
      <section className="section bg-white relative z-10">
        <div className="container mx-auto px-4 max-w-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&h=750&fit=crop&auto=format"
                  alt="John - Licensed Clinical Social Worker"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <Badge variant="primary" size="md" className="mb-4">
                <Award className="w-4 h-4 mr-2" />
                Meet Your Instructor
              </Badge>
              <h2 className="font-heading font-heading-extrabold text-4xl text-text-primary mb-6">
                Why John Teaches
              </h2>
              <div className="space-y-4 text-text-secondary font-body text-lg">
                <p>
                  As a licensed clinical social worker with over 10 years of
                  experience, I remember the anxiety and overwhelm of preparing
                  for the ASWB exam. Traditional study methods felt disconnected
                  from real-world practice.
                </p>
                <p>
                  That&apos;s why I created StudyWithJohn - a preparation program
                  that bridges the gap between exam content and practical social
                  work. My unique memory frameworks and teaching methodology
                  have helped over 2,000 students pass their exams with
                  confidence.
                </p>
                <p className="font-body-medium text-primary">
                  &quot;My mission is simple: help every aspiring social worker
                  achieve their dream of becoming licensed so they can make a
                  real difference in people&apos;s lives.&quot;
                </p>
              </div>
              <div className="mt-8">
                <Button variant="primary" size="lg">
                  Learn More About John
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-primary-dark text-white relative z-10">
        <div className="container mx-auto px-4 max-w-content text-center">
          <h2 className="font-heading font-heading-extrabold text-4xl lg:text-5xl mb-6">
            Ready to Pass Your ASWB Exam?
          </h2>
          <p className="text-xl text-white/90 font-body max-w-3xl mx-auto mb-8">
            Join 2,000+ successful students who trusted StudyWithJohn to achieve
            their social work dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/sales")}
            >
              Enroll in Full Course
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => (window.location.href = "/#lead-magnet")}
            >
              Get Free Study Guide
            </Button>
          </div>
          <p className="text-white/70 text-sm font-body mt-8">
            30-day money-back guarantee • Lifetime access • No risk
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
