/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Se você tem um index.html na raiz
    "./src/**/*.{js,ts,jsx,tsx}", // Para todos os arquivos JS, TS, JSX, TSX na pasta src
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#F4F1EA',
        'sage-green': '#3A3F36',
        'accent': '#A88A6E',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        // Certifique-se que esta linha está preenchida corretamente
        'dancing-script': ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
  // Se você adicionou darkMode: 'class' antes, verifique se ainda está aqui, se relevante.
}