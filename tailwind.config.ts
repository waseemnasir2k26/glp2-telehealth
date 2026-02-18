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
          DEFAULT: '#0D4F4F',
          50: '#E6F2F2',
          100: '#CCE5E5',
          200: '#99CBCB',
          300: '#66B1B1',
          400: '#339797',
          500: '#0D4F4F',
          600: '#0A3F3F',
          700: '#082F2F',
          800: '#051F1F',
          900: '#031010',
        },
        accent: {
          DEFAULT: '#C9A84C',
          50: '#FAF6EB',
          100: '#F5EDD7',
          200: '#EBDBAF',
          300: '#E1C987',
          400: '#D7B75F',
          500: '#C9A84C',
          600: '#A4863D',
          700: '#7C652E',
          800: '#54431F',
          900: '#2C2210',
        },
        background: '#FAFAF7',
        dark: '#0A1628',
        text: {
          primary: '#1A1A2E',
          secondary: '#6B7280',
        },
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'strong': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 40px rgba(13, 79, 79, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0D4F4F 0%, #0A3F3F 50%, #082F2F 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in': 'slideIn 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
