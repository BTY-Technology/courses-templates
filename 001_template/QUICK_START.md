# Quick Start Guide - StudyWithJohn Platform

Get your ASWB exam prep platform up and running in minutes!

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies

```bash
# Using npm
npm install

# Using bun (recommended for speed)
bun install
```

### Step 2: Environment Setup

```bash
# Copy the example environment file
cp .env.local.example .env.local
```

For local development, you can use these placeholder values:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-dev-secret-key-replace-in-production
```

### Step 3: Run Development Server

```bash
npm run dev
# or
bun dev
```

### Step 4: View the Site

Open [http://localhost:3000](http://localhost:3000) in your browser!

## 🎯 What You'll See

### Available Pages

1. **Homepage** - `http://localhost:3000`
   - Hero with video introduction
   - Course differentiators
   - Module breakdown
   - Testimonials
   - Lead magnet form

2. **Sales Page** - `http://localhost:3000/sales`
   - Full curriculum
   - Pricing options
   - Bonuses section
   - Sticky CTA bar

3. **Course Dashboard** - `http://localhost:3000/course/dashboard`
   - Student progress overview
   - Module navigation
   - Upcoming sessions
   - Achievements

## 🎨 Customization Quick Wins

### 1. Update Site Name & Branding

**Navigation** (`components/layout/Navigation.tsx`)
```typescript
// Line 32-38
<span className="font-heading font-heading-bold text-xl text-text-primary">
  YourSiteName
</span>
```

### 2. Change Primary Color

**Tailwind Config** (`tailwind.config.ts`)
```typescript
// Line 12-14
primary: {
  DEFAULT: '#YOUR_HEX_COLOR',
  // ...
}
```

### 3. Update Hero Message

**Homepage** (`app/page.tsx`)
```typescript
// Line 50-55
<h1 className="font-heading font-heading-extrabold...">
  Your Custom Headline
</h1>
```

### 4. Add Your Email to Lead Magnet

**Lead Magnet Form** (`app/page.tsx`)
```typescript
// Around line 280 - update the form action
<form onSubmit={handleSubmit}>
  {/* Form fields */}
</form>
```

## 📝 Content Checklist

### Homepage
- [ ] Replace "John" with your instructor name
- [ ] Update pass rate percentage (currently 89%)
- [ ] Update student count (currently 2,000+)
- [ ] Add real testimonials (currently using placeholders)
- [ ] Update module descriptions
- [ ] Add instructor bio and story

### Sales Page
- [ ] Update pricing ($497 current price)
- [ ] Modify payment plan options
- [ ] Update module count and descriptions
- [ ] Add real bonus items
- [ ] Update guarantee terms
- [ ] Set cohort start dates

### Course Dashboard
- [ ] Configure module structure
- [ ] Add video lesson URLs
- [ ] Set up live session schedule
- [ ] Configure badge system
- [ ] Add achievement criteria

## 🔧 Technical Setup for Production

### Required Services

1. **Database** (Choose one)
   - PostgreSQL (recommended)
   - MySQL
   - MongoDB

2. **Payment Processing**
   - Create Stripe account
   - Get API keys
   - Set up products/prices

3. **Email Service** (Choose one)
   - Mailchimp
   - ConvertKit
   - SendGrid

4. **Video Hosting** (Choose one)
   - Vimeo
   - YouTube
   - Wistia

### Environment Variables for Production

```env
# Database
DATABASE_URL=your_database_connection_string

# Stripe
STRIPE_SECRET_KEY=sk_live_your_live_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email Service
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_FROM=noreply@yourdomain.com

# Video Hosting
VIMEO_ACCESS_TOKEN=your_vimeo_token
# or
YOUTUBE_API_KEY=your_youtube_key

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

1. Connect GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 3: Self-Hosted

```bash
# Build for production
npm run build

# Start production server
npm start

# Or use PM2 for process management
pm2 start npm --name "studywithjohn" -- start
```

## 📊 Testing Checklist

### Before Launch

- [ ] Test all navigation links
- [ ] Test email form submission
- [ ] Test payment flow (use Stripe test mode)
- [ ] Test on mobile devices
- [ ] Test in different browsers (Chrome, Safari, Firefox)
- [ ] Check page load speeds
- [ ] Verify all images load
- [ ] Test video embeds
- [ ] Check SEO meta tags
- [ ] Run accessibility audit

### Test Accounts

Create these in your database:
```
Student: student@test.com / password123
Admin: admin@test.com / password123
```

## 🎓 Learning Resources

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

### Stripe Integration
- [Stripe Docs](https://stripe.com/docs)
- [Next.js + Stripe](https://github.com/vercel/next.js/tree/canary/examples/with-stripe-typescript)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Customization Guide](https://tailwindcss.com/docs/configuration)

## 🆘 Common Issues & Solutions

### Issue: Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Issue: Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not applying
```bash
# Restart dev server
# Check tailwind.config.ts content paths
# Verify globals.css imports
```

### Issue: TypeScript errors
```bash
# Run type check
npm run type-check

# Check tsconfig.json paths
# Verify import statements
```

## 📞 Support

### Get Help

1. Check `IMPLEMENTATION_SUMMARY.md` for detailed documentation
2. Review `README.md` for full setup guide
3. Contact BTY Technology for customization support

### Useful Commands

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 🎉 You're Ready!

Your StudyWithJohn platform template is now running. Follow the customization checklist above to make it your own!

**Next Steps:**
1. ✅ Site is running locally
2. 🎨 Customize branding and colors
3. 📝 Add your content
4. 🔌 Connect backend services
5. 🚀 Deploy to production

---

**Need help?** Reference the detailed `README.md` and `IMPLEMENTATION_SUMMARY.md` files.

Good luck with your ASWB exam prep platform! 🎓
