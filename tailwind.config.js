module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#e6f2ff',
          200: '#b8d4f0',
          300: '#87ceeb',
          400: '#6ba3d0',
          500: '#4a90e2',
          600: '#3b7bc8',
          700: '#2c5aa0',
          800: '#1e3d72',
          900: '#0f1f44',
        },
        gold: {
          50: '#fffdf0',
          100: '#fef9e7',
          200: '#fdf2d1',
          300: '#fce8b5',
          400: '#f4c542',
          500: '#d4af37',
          600: '#b8953b',
          700: '#9c7b2f',
          800: '#806123',
          900: '#644717',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'pulse-slow': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
