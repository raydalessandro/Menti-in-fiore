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
        // Menti in Fiore - Palette Pastello Playful
        'rosa-pastello': {
          DEFAULT: '#ff6b9d',
          light: '#ffb3d1',
          lighter: '#ffe5f0',
          soft: '#f9caae',
        },
        'verde-menta': {
          DEFAULT: '#a8e6cf',
          light: '#c8f0dd',
          dark: '#81c784',
        },
        'azzurro-cielo': {
          DEFAULT: '#64b5f6',
          light: '#e6f4fb',
          soft: '#bbdefb',
        },
        'viola-sogno': {
          DEFAULT: '#ab47bc',
          dark: '#8e24aa',
          light: '#f3e5f5',
        },
        'giallo-sole': {
          DEFAULT: '#ffd54f',
          light: '#fef7cd',
          soft: '#fff3e0',
        },
        'corallo': {
          DEFAULT: '#ff7961',
          soft: '#ffb3a7',
        },
        // Neutrali caldi
        'marrone-caldo': '#5f3d2c',
        'grigio-soft': '#f5f5f5',
        'bianco': '#ffffff',

        // Colori legacy per compatibilità
        'verde-salvia': '#a8e6cf',
        'beige-caldo': '#fff3e0',
        'nero-carbone': '#2A2A2A',
        'grigio-medio': '#707070',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      fontSize: {
        // Type Scale Golden Ratio
        'hero': ['3.052rem', { lineHeight: '1.2', fontWeight: '600' }],
        '2xl': ['2.441rem', { lineHeight: '1.3', fontWeight: '600' }],
        'xl': ['1.953rem', { lineHeight: '1.4', fontWeight: '600' }],
        'lg': ['1.563rem', { lineHeight: '1.5', fontWeight: '600' }],
        'md': ['1.25rem', { lineHeight: '1.6', fontWeight: '500' }],
        'base': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'sm': ['0.8rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // Spacing Armonico 8px base
        '0.5': '4px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '6': '48px',
        '8': '64px',
        '12': '96px',
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'playful': '0 10px 30px rgba(255, 107, 157, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 1s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-playful': 'linear-gradient(135deg, #ff6b9d 0%, #ab47bc 100%)',
        'gradient-calm': 'linear-gradient(135deg, #a8e6cf 0%, #64b5f6 100%)',
        'gradient-sunshine': 'linear-gradient(135deg, #ffd54f 0%, #ff7961 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
export default config
