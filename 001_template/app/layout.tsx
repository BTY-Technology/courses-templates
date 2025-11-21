import type { Metadata } from 'next'
import { Poppins, Open_Sans, Sora } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import { CourseProvider } from '@/contexts/CourseContext'
import { Watermark } from '@/components/Watermark'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'StudyWithJohn - ASWB Exam Preparation | BTY Technology',
    template: '%s | StudyWithJohn | BTY Technology',
  },
  description: 'Pass your ASWB exam with confidence. Join thousands of social workers who passed on their first try with John\'s proven methodology.',
  keywords: 'ASWB exam, social work exam prep, LMSW, LCSW, social work licensing',
  authors: [{ name: 'John' }],
  icons: {
    icon: '/btyfavi.svg',
    shortcut: '/btyfavi.svg',
    apple: '/btyfavi.svg',
  },
  openGraph: {
    title: 'StudyWithJohn - ASWB Exam Preparation',
    description: 'Pass your ASWB exam with confidence. 89% pass rate, 2000+ students.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudyWithJohn - ASWB Exam Preparation',
    description: 'Pass your ASWB exam with confidence. 89% pass rate, 2000+ students.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable} ${sora.variable}`}>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js" defer></script>
      </head>
      <body className="font-body bg-neutral-background text-text-primary antialiased">
        <AuthProvider>
          <CourseProvider>
            {children}
            <Watermark />
          </CourseProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
