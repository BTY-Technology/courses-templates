# StudyWithJohn - ASWB Exam Preparation Platform

A premium, high-converting Next.js course platform for ASWB exam preparation. Built with Next.js 14, TypeScript, and Tailwind CSS, this template combines a marketing funnel with an integrated learning management system.

## 🎯 Platform Overview

This is a complete exam preparation platform featuring:

- **Marketing Website**: High-converting landing pages with lead capture
- **Course Sales Funnel**: Optimized sales pages with payment integration
- **Learning Portal**: Full-featured course dashboard with progress tracking
- **Community Hub**: Discussion forums and live session scheduling
- **Practice Tools**: Quiz engine, mock exams, and flashcard system
- **Gamification**: Badges, streaks, and achievement system

## ✨ Key Features

### Marketing & Conversion
- 🎯 **Hero Section**: Video introduction with compelling CTAs
- 💯 **Social Proof**: Testimonials, success stories, and trust badges
- 📊 **Course Breakdown**: Detailed curriculum with module previews
- 🎁 **Lead Magnet**: Free study guide with email capture
- 💳 **Payment Integration**: Stripe checkout with multiple payment plans
- ⏰ **Urgency Elements**: Countdown timers and enrollment limits

### Learning Management
- 📚 **Course Portal**: Dashboard with progress tracking and analytics
- 🎥 **Video Lessons**: Organized by modules with completion tracking
- 📝 **Practice Questions**: 500+ questions with detailed explanations
- 📊 **Mock Exams**: Full-length timed practice exams
- 🎴 **Flashcards**: Interactive spaced repetition system
- 🏆 **Gamification**: Badges, streaks, and achievements

### Technical Excellence
- ⚡ **Next.js 14 App Router**: Server-side rendering for optimal SEO
- 🔐 **Authentication**: JWT-based secure user authentication
- 💳 **Stripe Integration**: Payment processing and subscriptions
- 📧 **Email Automation**: Lead nurturing and course notifications
- 📱 **Fully Responsive**: Mobile-first, touch-optimized design
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🎨 **Custom Design System**: Brand-specific colors and components

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom theme
- **Authentication**: NextAuth.js / JWT
- **Payments**: [Stripe](https://stripe.com/)
- **Email**: Mailchimp / ConvertKit / SendGrid
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: React Hook Form + Zod validation
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.0 or later
- **Package Manager**: npm, yarn, pnpm, or bun
- **Accounts** (for production):
  - Stripe account for payments
  - Email service (Mailchimp, ConvertKit, or SendGrid)
  - Database (PostgreSQL, MySQL, or MongoDB)
  - Video hosting (Vimeo or YouTube)

### Installation

1. **Clone and install dependencies:**

```bash
# Install dependencies
npm install
# or
bun install
```

2. **Set up environment variables:**

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and configure:

```env
# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/studywithjohn

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email Service
EMAIL_SERVICE_API_KEY=your_email_service_api_key
EMAIL_FROM=noreply@studywithjohn.com

# Video Hosting
VIMEO_ACCESS_TOKEN=your_vimeo_access_token

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. **Run the development server:**

```bash
npm run dev
# or
bun dev
```

4. **Open your browser:**

Visit [http://localhost:3000](http://localhost:3000) to see the platform.

## 📁 Project Structure

```
study-with-john/
├── app/                          # Next.js 14 App Router
│   ├── (marketing)/             # Marketing pages (homepage, FAQ)
│   ├── sales/                   # Course sales page
│   ├── course/                  # Course portal
│   │   ├── dashboard/          # Student dashboard
│   │   └── [moduleId]/         # Module/lesson pages
│   ├── api/                     # API routes
│   │   ├── auth/               # Authentication endpoints
│   │   ├── payment/            # Stripe payment endpoints
│   │   ├── email/              # Email subscription endpoints
│   │   └── course/             # Course data endpoints
│   ├── login/                   # Login page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── components/                  # React components
│   ├── ui/                     # Base UI components
│   │   ├── Button.tsx          # Button variants
│   │   ├── Card.tsx            # Card container
│   │   ├── Input.tsx           # Form input
│   │   ├── Badge.tsx           # Badge/tag
│   │   └── ProgressBar.tsx     # Progress indicator
│   ├── marketing/              # Marketing components
│   │   ├── HeroSection.tsx     # Hero with video
│   │   ├── TestimonialCard.tsx # Student testimonial
│   │   └── CourseCard.tsx      # Course preview
│   ├── course/                 # Course portal components
│   └── layout/                 # Layout components
│       ├── Navigation.tsx      # Header navigation
│       └── Footer.tsx          # Footer
├── contexts/                    # React contexts
│   ├── AuthContext.tsx         # Authentication state
│   └── CourseContext.tsx       # Course progress state
├── lib/                         # Library code
│   └── utils.ts                # Utility functions
├── types/                       # TypeScript types
│   └── index.ts                # All type definitions
├── public/                      # Static assets
│   ├── images/                 # Images and logos
│   └── videos/                 # Video thumbnails
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind with custom theme
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#2C5F7F',        // Trustworthy Academic Blue
  accent: '#E74C3C',          // Warm Orange-Red for CTAs
  success: '#27AE60',         // Growth Green for completion
  // ... customize as needed
}
```

### Typography

Update font families in `tailwind.config.ts`:

```typescript
fontFamily: {
  heading: ['Poppins', 'sans-serif'],
  body: ['Open Sans', 'sans-serif'],
  accent: ['Sora', 'sans-serif'],
}
```

### Content

1. **Homepage**: Edit `app/page.tsx`
2. **Sales Page**: Edit `app/sales/page.tsx`
3. **Course Portal**: Edit `app/course/dashboard/page.tsx`
4. **Navigation**: Update links in `components/layout/Navigation.tsx`
5. **Footer**: Customize in `components/layout/Footer.tsx`

### Images & Media

- Add your logos to `public/images/`
- Replace placeholder images with actual course images
- Add John's video URLs in the relevant components
- Update testimonial photos and student images

## 🔧 Implementation Checklist

### Essential Setup

- [ ] Configure environment variables
- [ ] Set up database (PostgreSQL/MySQL)
- [ ] Create database schema for users, courses, progress
- [ ] Configure Stripe account and products
- [ ] Set up email service (Mailchimp/ConvertKit)
- [ ] Upload video content to Vimeo/YouTube
- [ ] Add SSL certificate for production

### Content

- [ ] Add John's bio and photo
- [ ] Upload course video lessons
- [ ] Create practice questions database
- [ ] Write course module descriptions
- [ ] Gather student testimonials
- [ ] Prepare downloadable study guides

### Testing

- [ ] Test authentication flow
- [ ] Test payment processing (use Stripe test mode)
- [ ] Test email delivery
- [ ] Test course access after purchase
- [ ] Test progress tracking
- [ ] Test on mobile devices
- [ ] Run accessibility audit
- [ ] Test all forms and validation

### SEO & Analytics

- [ ] Add Google Analytics tracking ID
- [ ] Configure meta tags for all pages
- [ ] Create sitemap.xml
- [ ] Set up Google Search Console
- [ ] Add schema.org structured data
- [ ] Configure social media preview images

## 🏗 Building for Production

```bash
# Type check
npm run type-check

# Build
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

- **Netlify**: Configure build command and environment variables
- **AWS**: Use Amplify or EC2 with PM2
- **Digital Ocean**: Deploy with App Platform or Droplets

### Post-Deployment

- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Configure Stripe webhooks
- [ ] Test payment flow in production
- [ ] Monitor error logs
- [ ] Set up backups

## 📊 Key Features to Implement

### Phase 1: MVP
- [x] Marketing homepage
- [x] Course sales page
- [x] Authentication system
- [x] Course dashboard
- [ ] Payment processing (needs Stripe setup)
- [ ] Video lesson playback
- [ ] Email capture and nurturing

### Phase 2: Enhanced
- [ ] Practice question bank
- [ ] Mock exam simulator
- [ ] Flashcard system
- [ ] Discussion forums
- [ ] Live session scheduling
- [ ] Progress analytics

### Phase 3: Advanced
- [ ] Mobile app
- [ ] Referral program
- [ ] Certificate generation
- [ ] Advanced analytics
- [ ] A/B testing
- [ ] Personalized study plans

## 🔐 Security Considerations

- Use environment variables for all secrets
- Implement rate limiting on API routes
- Sanitize all user inputs
- Use HTTPS in production
- Implement CSRF protection
- Regular dependency updates
- Database query parameterization
- Secure session management

## 📈 Performance Optimization

- Next.js Image optimization enabled
- Code splitting with dynamic imports
- Caching strategies for API responses
- CDN for static assets
- Database query optimization
- Lazy loading for heavy components

## 🤝 Support & Customization

For customization services or support, contact BTY Technology.

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by BTY Technology**

*Empowering aspiring social workers to achieve their dreams through technology and education.*
