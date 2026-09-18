/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vigour: {
          red: '#DC2626',
          redHover: '#B91C1C',
          redLight: '#FEF2F2',
          redGlow: 'rgba(220, 38, 38, 0.45)',
          black: '#0A0A0A',
          dark: '#0D0D0D',
          darkSurface: '#141414',
          darkCard: '#1C1C1C',
          grayText: '#71717A',
          border: '#27272A',
        },
        // Mapeamentos para manter compatibilidade com classes já utilizadas
        strong: {
          blue: '#DC2626',
          blueHover: '#B91C1C',
          blueLight: '#FEF2F2',
          blueGlow: 'rgba(220, 38, 38, 0.45)',
          cyan: '#EF4444',
          cyanHover: '#DC2626',
          black: '#0A0A0A',
          dark: '#0D0D0D',
          darkSurface: '#141414',
          darkCard: '#1C1C1C',
          grayText: '#71717A',
          border: '#E4E4E7',
        },
        iron: {
          bg: '#FFFFFF',
          card: '#FFFFFF',
          cardSubtle: '#FAFAFA',
          yellow: '#DC2626',
          yellowHover: '#B91C1C',
          yellowLight: '#FEF2F2',
          yellowGlow: 'rgba(220, 38, 38, 0.35)',
          black: '#0A0A0A',
          dark: '#0D0D0D',
          darkSurface: '#141414',
          darkCard: '#1C1C1C',
          grayText: '#71717A',
          border: '#E4E4E7',
        },
        nw: {
          bg: '#FFFFFF',
          card: '#FFFFFF',
          cardSubtle: '#FAFAFA',
          blue: '#DC2626',
          baby: '#EF4444',
          babyLight: '#FEF2F2',
          babyGlow: 'rgba(220, 38, 38, 0.35)',
          blueHover: '#B91C1C',
          dark: '#0D0D0D',
          darkSurface: '#141414',
          darkCard: '#1C1C1C',
          grayText: '#71717A',
          border: '#E4E4E7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.06), 0 4px 10px -3px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(220, 38, 38, 0.25)',
        'red-glow': '0 0 25px rgba(220, 38, 38, 0.5)',
        'blue-glow': '0 0 25px rgba(220, 38, 38, 0.5)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
