/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['Inconsolata']
      },
      boxShadow: {
        'inner-custom': 'inset 0 4px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

