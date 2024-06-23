/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Varela Round'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        indigo: {
          light: '#5B61EC',
          DEFAULT: '#4447A1',
          dark: '#01000A',
        },
        emeral: '#66EC5B',
        fuchsia: {
          light: '#FFA5F1',
          DEFAULT: '#FF7AEA',
          dark: '#500243',
        },
        gray: {
          default: '#8D8D8D'
        }
      },
    },
  },
  plugins: [],
}

