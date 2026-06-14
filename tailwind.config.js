/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#17bed2',
          light: '#1fd1e7',
          dark: '#12a3b8',
        },
        brand: {
          red: '#ff1321',
          'red-dark': '#d0101f',
          gray: '#303030',
        },
        dark: {
          DEFAULT: '#0f1c2e',
          800: '#1a2a3a',
          700: '#1e3044',
          600: '#243650',
        },
        ink: {
          DEFAULT: '#515769',
          light: '#81848f',
          muted: '#a6a7aa',
          faint: '#bfc1c7',
        },
      },
      fontFamily: {
        sans: ['Hind', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-dark': 'linear-gradient(135deg, rgba(15,28,46,0.85) 0%, rgba(23,190,210,0.15) 100%)',
      },
    },
  },
  plugins: [],
}
