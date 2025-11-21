import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5F7F',
          dark: '#1e4459',
          light: '#3a7ba0',
        },
        accent: {
          DEFAULT: '#E74C3C',
          dark: '#c0392b',
          light: '#ec7063',
        },
        success: {
          DEFAULT: '#27AE60',
          dark: '#1e8449',
          light: '#52c77a',
        },
        neutral: {
          soft: '#F5F5F5',
          background: '#FAFAFA',
          border: '#E8E8E8',
        },
        text: {
          primary: '#2C3E50',
          secondary: '#7F8C8D',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        accent: ['Sora', 'sans-serif'],
      },
      fontWeight: {
        'heading-semibold': '600',
        'heading-bold': '700',
        'heading-extrabold': '800',
        'body-normal': '400',
        'body-medium': '500',
        'accent-bold': '700',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(44, 62, 80, 0.08)',
        'card-hover': '0 4px 16px rgba(44, 62, 80, 0.12)',
        'button': '0 2px 4px rgba(231, 76, 60, 0.2)',
        'button-hover': '0 4px 8px rgba(231, 76, 60, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'confetti': 'confetti 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        confetti: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1.2) rotate(360deg)', opacity: '0' },
        },
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}

export default config
