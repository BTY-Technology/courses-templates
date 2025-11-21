'use client'

import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import {
  BookOpen,
  Trophy,
  Calendar,
  TrendingUp,
  PlayCircle,
  Lock,
  CheckCircle,
  Clock,
  Target,
  Award
} from 'lucide-react'

export default function CourseDashboard() {
  const studentProgress = {
    overallCompletion: 45,
    modulesCompleted: 2,
    totalModules: 4,
    lessonsCompleted: 18,
    totalLessons: 55,
    quizzesPassed: 12,
    totalQuizzes: 20,
    averageScore: 87,
    streak: 7,
    timeSpent: 420, // minutes
  }

  const modules = [
    {
      id: '1',
      title: 'Human Development & Behavior',
      lessons: 12,
      completed: 12,
      isLocked: false,
      progress: 100,
    },
    {
      id: '2',
      title: 'Assessment & Diagnosis',
      lessons: 15,
      completed: 6,
      isLocked: false,
      progress: 40,
    },
    {
      id: '3',
      title: 'Therapeutic Interventions',
      lessons: 18,
      completed: 0,
      isLocked: false,
      progress: 0,
    },
    {
      id: '4',
      title: 'Professional Ethics & Practice',
      lessons: 10,
      completed: 0,
      isLocked: true,
      progress: 0,
    },
  ]

  const upcomingLiveSessions = [
    {
      title: 'Q&A Session: Assessment Techniques',
      date: new Date('2024-12-05T18:00:00'),
      instructor: 'John',
      spots: 15,
    },
    {
      title: 'Mock Exam Review Session',
      date: new Date('2024-12-08T14:00:00'),
      instructor: 'John',
      spots: 8,
    },
  ]

  const recentBadges = [
    { title: 'First Module Complete', icon: '🎯' },
    { title: '7-Day Streak', icon: '🔥' },
    { title: 'Quiz Master', icon: '🏆' },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="bg-gradient-to-br from-primary/5 to-primary/10 py-12">
        <div className="container mx-auto px-4 max-w-content">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="font-heading font-heading-extrabold text-4xl text-text-primary mb-2">
              Welcome back, Student!
            </h1>
            <p className="text-text-secondary font-body text-lg">
              Keep up the great work. You&apos;re {studentProgress.overallCompletion}% of the way to passing your exam.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card padding="md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-accent font-accent-bold text-text-primary">
                    {studentProgress.overallCompletion}%
                  </p>
                  <p className="text-sm text-text-secondary">Complete</p>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-accent font-accent-bold text-text-primary">
                    {Math.floor(studentProgress.timeSpent / 60)}h
                  </p>
                  <p className="text-sm text-text-secondary">Study Time</p>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-accent font-accent-bold text-text-primary">
                    {studentProgress.averageScore}%
                  </p>
                  <p className="text-sm text-text-secondary">Avg Score</p>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <p className="text-2xl font-accent font-accent-bold text-text-primary">
                    {studentProgress.streak}
                  </p>
                  <p className="text-sm text-text-secondary">Day Streak</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Overall Progress */}
          <Card padding="lg" className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-heading-semibold text-2xl text-text-primary">
                Your Progress
              </h2>
              <Badge variant="success">
                On Track
              </Badge>
            </div>
            <ProgressBar
              percentage={studentProgress.overallCompletion}
              size="lg"
              showLabel
              animated
            />
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div>
                <p className="text-text-secondary text-sm mb-1">Modules</p>
                <p className="font-accent font-accent-bold text-xl text-primary">
                  {studentProgress.modulesCompleted}/{studentProgress.totalModules}
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Lessons</p>
                <p className="font-accent font-accent-bold text-xl text-primary">
                  {studentProgress.lessonsCompleted}/{studentProgress.totalLessons}
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Quizzes</p>
                <p className="font-accent font-accent-bold text-xl text-primary">
                  {studentProgress.quizzesPassed}/{studentProgress.totalQuizzes}
                </p>
              </div>
            </div>
          </Card>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Modules */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-heading font-heading-semibold text-2xl text-text-primary">
                  Course Modules
                </h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>

              {modules.map((module) => (
                <Card key={module.id} hover padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-heading font-heading-bold text-xl flex-shrink-0">
                      {module.progress === 100 ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : module.isLocked ? (
                        <Lock className="w-6 h-6" />
                      ) : (
                        <PlayCircle className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-heading font-heading-semibold text-lg text-text-primary mb-1">
                            {module.title}
                          </h3>
                          <p className="text-sm text-text-secondary">
                            {module.completed}/{module.lessons} lessons completed
                          </p>
                        </div>
                        {module.isLocked && (
                          <Badge variant="neutral" size="sm">
                            <Lock className="w-3 h-3 mr-1" />
                            Locked
                          </Badge>
                        )}
                      </div>
                      <ProgressBar
                        percentage={module.progress}
                        size="sm"
                        showLabel={false}
                        className="mb-3"
                      />
                      <Button
                        variant={module.progress > 0 ? 'primary' : 'secondary'}
                        size="sm"
                        disabled={module.isLocked}
                      >
                        {module.progress === 0 ? 'Start Module' : 'Continue Learning'}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Badges */}
              <Card padding="lg">
                <h3 className="font-heading font-heading-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Recent Achievements
                </h3>
                <div className="space-y-3">
                  {recentBadges.map((badge, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-neutral-background rounded-lg"
                    >
                      <span className="text-2xl">{badge.icon}</span>
                      <p className="text-sm font-body font-body-medium text-text-primary">
                        {badge.title}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" fullWidth className="mt-4">
                  View All Badges
                </Button>
              </Card>

              {/* Upcoming Live Sessions */}
              <Card padding="lg">
                <h3 className="font-heading font-heading-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Sessions
                </h3>
                <div className="space-y-4">
                  {upcomingLiveSessions.map((session, index) => (
                    <div key={index} className="pb-4 border-b border-neutral-border last:border-0 last:pb-0">
                      <p className="font-body font-body-medium text-text-primary mb-1">
                        {session.title}
                      </p>
                      <p className="text-sm text-text-secondary mb-2">
                        {session.date.toLocaleDateString()} at {session.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                      <Badge variant="success" size="sm">
                        {session.spots} spots left
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="sm" fullWidth className="mt-4">
                  Join Next Session
                </Button>
              </Card>

              {/* Quick Links */}
              <Card padding="lg">
                <h3 className="font-heading font-heading-semibold text-lg text-text-primary mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" fullWidth>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Practice Questions
                  </Button>
                  <Button variant="outline" size="sm" fullWidth>
                    <Trophy className="w-4 h-4 mr-2" />
                    Take Mock Exam
                  </Button>
                  <Button variant="outline" size="sm" fullWidth>
                    <Target className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
