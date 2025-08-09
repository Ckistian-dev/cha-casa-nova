// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#F4F1EA',
        'sage-green': '#3A3F36',
        'accent': '#A88A6E',
      },
      // Confirme esta seção:
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}