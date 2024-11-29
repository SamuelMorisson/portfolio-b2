/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      colors: {
        greentest: '#CDEAA1',
        redtest: '#fee4e4',
        text: '#E7ECF3',
      },
      screens: {
        'minNavBar': '760px',
        'smallTextNavBar': '900px',
        'xs': '400px',
        '2xs': '360px',
        'minSize': '100px',
      },
      fontFamily: {
        inconsolata: ['Inconsolata']
      },
      boxShadow: {
        'inner-custom': 'inset 0 4px 4px rgba(0, 0, 0, 0.1)',
      },
      transitionDelay: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

