// User and Authentication Types
export interface User {
  id: string
  email: string
  name: string
  role: 'student' | 'admin'
  image?: string
  createdAt: Date
  updatedAt: Date
}

export interface AuthSession {
  user: User
  accessToken: string
  refreshToken?: string
}

// Course and Module Types
export interface Module {
  id: string
  title: string
  description: string
  order: number
  estimatedTime: number // in minutes
  lessons: Lesson[]
  isLocked: boolean
  completionPercentage: number
}

export interface Lesson {
  id: string
  moduleId: string
  title: string
  description: string
  order: number
  type: 'video' | 'reading' | 'quiz' | 'practice'
  videoUrl?: string
  videoDuration?: number // in seconds
  content?: string
  resources?: Resource[]
  isCompleted: boolean
}

export interface Resource {
  id: string
  title: string
  type: 'pdf' | 'link' | 'template'
  url: string
  downloadable: boolean
}

// Course Purchase and Enrollment
export interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  price: number
  currency: string
  thumbnail: string
  modules: Module[]
  features: string[]
  bonuses: string[]
  guarantee: string
  enrollment: {
    current: number
    max?: number
    cohortStartDate?: Date
  }
}

export interface PaymentPlan {
  id: string
  name: string
  type: 'full' | 'installment'
  amount: number
  installments?: number
  installmentAmount?: number
  frequency?: 'monthly' | 'weekly'
}

// Progress Tracking
export interface StudentProgress {
  userId: string
  courseId: string
  overallCompletion: number
  modulesCompleted: string[]
  lessonsCompleted: string[]
  quizzesCompleted: string[]
  totalTimeSpent: number // in minutes
  lastAccessedAt: Date
  badges: Badge[]
  streak: number // consecutive days
}

export interface Badge {
  id: string
  title: string
  description: string
  icon: string
  earnedAt: Date
  category: 'completion' | 'milestone' | 'performance' | 'streak'
}

// Practice and Quiz Types
export interface Quiz {
  id: string
  lessonId: string
  title: string
  description: string
  questions: Question[]
  passingScore: number
  timeLimit?: number // in minutes
  attemptsAllowed: number
}

export interface Question {
  id: string
  type: 'multiple_choice' | 'true_false' | 'scenario'
  question: string
  options: QuestionOption[]
  correctAnswer: string | string[]
  explanation: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface QuestionOption {
  id: string
  text: string
  value: string
}

export interface QuizAttempt {
  id: string
  quizId: string
  userId: string
  score: number
  totalQuestions: number
  correctAnswers: number
  timeSpent: number // in seconds
  answers: UserAnswer[]
  completedAt: Date
}

export interface UserAnswer {
  questionId: string
  answer: string | string[]
  isCorrect: boolean
  timeSpent: number // in seconds
}

// Mock Exam Types
export interface MockExam {
  id: string
  title: string
  description: string
  totalQuestions: number
  duration: number // in minutes
  passingScore: number
  categories: ExamCategory[]
  isFullLength: boolean
}

export interface ExamCategory {
  name: string
  questionCount: number
  percentage: number
}

// Flashcard Types
export interface Flashcard {
  id: string
  front: string
  back: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
  userRating?: 'easy' | 'good' | 'hard' | 'again'
  nextReviewDate?: Date
}

export interface FlashcardDeck {
  id: string
  title: string
  description: string
  cards: Flashcard[]
  totalCards: number
  masteredCards: number
}

// Testimonial and Success Story Types
export interface Testimonial {
  id: string
  studentName: string
  studentImage: string
  studentCredentials: string
  quote: string
  rating: number
  passResult: string
  videoUrl?: string
  featured: boolean
  createdAt: Date
}

export interface SuccessStory {
  id: string
  studentName: string
  studentImage: string
  beforeStory: string
  afterStory: string
  examScore?: string
  timeToPass: string
  keyTakeaways: string[]
  testimonial: string
}

// Live Session Types
export interface LiveSession {
  id: string
  title: string
  description: string
  instructor: string
  scheduledAt: Date
  duration: number // in minutes
  meetingUrl: string
  isRecorded: boolean
  recordingUrl?: string
  maxParticipants?: number
  currentParticipants: number
  status: 'upcoming' | 'live' | 'completed' | 'cancelled'
}

// Community and Discussion Types
export interface Discussion {
  id: string
  moduleId?: string
  lessonId?: string
  authorId: string
  authorName: string
  authorImage: string
  title: string
  content: string
  replies: Reply[]
  upvotes: number
  isResolved: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Reply {
  id: string
  discussionId: string
  authorId: string
  authorName: string
  authorImage: string
  content: string
  upvotes: number
  createdAt: Date
}

// Analytics and Performance Types
export interface PerformanceAnalytics {
  userId: string
  strengths: string[]
  weaknesses: string[]
  categoryScores: CategoryScore[]
  averageQuizScore: number
  totalQuestionsAttempted: number
  accuracy: number
  recommendedFocus: string[]
}

export interface CategoryScore {
  category: string
  score: number
  questionsAttempted: number
  accuracy: number
}

// Lead Magnet and Email Types
export interface LeadMagnetSubmission {
  email: string
  name?: string
  source: 'homepage' | 'popup' | 'salespage' | 'blog'
  submittedAt: Date
}

export interface EmailSequence {
  id: string
  name: string
  emails: SequenceEmail[]
}

export interface SequenceEmail {
  id: string
  subject: string
  content: string
  delayDays: number
  openRate?: number
  clickRate?: number
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: 'live_session' | 'course_update' | 'achievement' | 'reminder'
  title: string
  message: string
  actionUrl?: string
  isRead: boolean
  createdAt: Date
}

// FAQ Types
export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'exam' | 'course' | 'payment' | 'technical' | 'general'
  order: number
  isPopular: boolean
}

// Payment and Stripe Types
export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: 'pending' | 'succeeded' | 'failed'
  courseId: string
  userId: string
  paymentMethod: string
  createdAt: Date
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: {
    message: string
    code: string
  }
  meta?: {
    page?: number
    limit?: number
    total?: number
  }
}

// Form Types
export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface LeadMagnetFormData {
  name: string
  email: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  className?: string
}

export interface ProgressBarProps {
  percentage: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'success' | 'accent'
  animated?: boolean
  className?: string
}

export interface CourseCardProps {
  course: Partial<Course>
  onClick?: () => void
  showProgress?: boolean
  progress?: number
}

export interface TestimonialCardProps {
  testimonial: Testimonial
  variant?: 'default' | 'featured'
}

export interface ModuleCardProps {
  module: Module
  onExpand?: () => void
  isExpanded?: boolean
}
