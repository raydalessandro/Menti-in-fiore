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
        // EAR Palette - Primari
        'verde-salvia': {
          DEFAULT: '#A8C5A8',
          50: '#F0F5F0',
          100: '#E1EBE1',
          200: '#C3D7C3',
          300: '#A8C5A8',
          400: '#8DB38D',
          500: '#72A172',
          600: '#5B815B',
          700: '#446144',
          800: '#2D412D',
          900: '#162016',
        },
        'beige-caldo': {
          DEFAULT: '#F5E6D3',
          50: '#FEFDFB',
          100: '#FDF9F3',
          200: '#FAF3E7',
          300: '#F5E6D3',
          400: '#F0D9BF',
          500: '#EBCCAB',
          600: '#E6BF97',
          700: '#D4A87A',
          800: '#C2915D',
          900: '#B07A40',
        },
        'blu-nebbia': {
          DEFAULT: '#C8D5E0',
          50: '#F5F7FA',
          100: '#EBF0F5',
          200: '#D7E0EB',
          300: '#C8D5E0',
          400: '#B9CAD5',
          500: '#AABFCA',
          600: '#9BB4BF',
          700: '#7D9DAC',
          800: '#5F8699',
          900: '#416F86',
        },
        // EAR Palette - Secondari
        'corallo-morbido': '#FFB5A7',
        'viola-lavanda': '#E8D5F2',
        'giallo-burro': '#FFF4D6',
        // Neutrali
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
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
export default config
