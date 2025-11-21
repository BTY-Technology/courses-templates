'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Course, Module, Lesson, StudentProgress } from '@/types'
import { useAuth } from './AuthContext'

interface CourseContextType {
  course: Course | null
  progress: StudentProgress | null
  isLoading: boolean
  currentModule: Module | null
  currentLesson: Lesson | null
  loadCourse: (courseId: string) => Promise<void>
  completeLesson: (lessonId: string) => Promise<void>
  updateProgress: (progress: Partial<StudentProgress>) => void
  setCurrentModule: (module: Module) => void
  setCurrentLesson: (lesson: Lesson) => void
}

const CourseContext = createContext<CourseContextType | undefined>(undefined)

export function CourseProvider({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useAuth()
  const [course, setCourse] = useState<Course | null>(null)
  const [progress, setProgress] = useState<StudentProgress | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentModule, setCurrentModule] = useState<Module | null>(null)
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)

  useEffect(() => {
    // Demo mode - no API calls needed
    if (isAuthenticated && user && !progress) {
      // Set mock progress data
      setProgress({
        userId: user.id,
        courseId: '1',
        overallCompletion: 45,
        modulesCompleted: ['1', '2'],
        lessonsCompleted: Array.from({ length: 18 }, (_, i) => `${i + 1}`),
        quizzesCompleted: Array.from({ length: 12 }, (_, i) => `${i + 1}`),
        totalTimeSpent: 420,
        lastAccessedAt: new Date(),
        badges: [],
        streak: 7,
      })
    }
  }, [isAuthenticated, user, progress])

  const loadCourse = async (courseId: string) => {
    // Demo mode - return mock course data
    setIsLoading(true)
    setTimeout(() => {
      setCourse({
        id: courseId,
        title: 'Complete ASWB Exam Mastery',
        subtitle: 'Everything you need to pass your ASWB exam on the first try',
        description: 'Comprehensive exam preparation',
        price: 497,
        currency: 'USD',
        thumbnail: '',
        modules: [],
        features: [],
        bonuses: [],
        guarantee: '30-day money-back guarantee',
        enrollment: { current: 2000 },
      })
      setIsLoading(false)
    }, 300)
  }

  const completeLesson = async (lessonId: string) => {
    // Demo mode - update progress locally
    if (!user || !progress) return

    const updatedProgress = {
      ...progress,
      lessonsCompleted: [...progress.lessonsCompleted, lessonId],
      overallCompletion: Math.min(progress.overallCompletion + 2, 100),
    }
    setProgress(updatedProgress)
  }

  const updateProgress = (updatedProgress: Partial<StudentProgress>) => {
    if (progress) {
      setProgress({ ...progress, ...updatedProgress })
    }
  }

  return (
    <CourseContext.Provider
      value={{
        course,
        progress,
        isLoading,
        currentModule,
        currentLesson,
        loadCourse,
        completeLesson,
        updateProgress,
        setCurrentModule,
        setCurrentLesson,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export function useCourse() {
  const context = useContext(CourseContext)
  if (context === undefined) {
    throw new Error('useCourse must be used within a CourseProvider')
  }
  return context
}
