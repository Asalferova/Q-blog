/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '300px',
        'lg': '600px',
        'xl': '800px',
        '1xl': '1000px',
        '2xl': '1217px',
      },
    },
    fontSize: {
      sm: '1rem',
      base: '1.6rem',
      lg: '2rem',
      xl: '2.6rem',
      '2xl': '3.2rem',
      '3xl': '3.6rem',
      '4xl': '8.4rem',
      '5xl': '11.2rem',
    },
    extend: {
      fontFamily: {
        'mainFont': ['TT Commons', 'sans-serif'],
      },
      textUnderlineOffset: {
        8: '15px',
      },
      transitionDuration: {
        DEFAULT: '333ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      colors: {
        border: 'var(--border-color)',
        background: 'var(--background-color)',
        primary: {
          DEFAULT: 'var(--primary-color)',
          foreground: 'var(--primary-text-color)',
        },
        secondary: 'var(--secondary-color)',
        black: 'var(--dark-color)',
        white: 'var(--light-color)'
      },
      borderRadius: {
        lg: 'var(--large-radius)',
        sm: 'var(--small-radius)',
      },
    },
    keyframes: {
      'shrink-grow': {
        '0%': { transform: 'scale(1)' },
        '30%': { transform: 'scale(0.85)' },
        '50%': { transform: 'scale(1.1)' },
        '70%': { transform: 'scale(0.95)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    animation: {
      'shrink-grow': 'shrink-grow 1.1s ease-in-out',
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },

  plugins: [],
}

