/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{index.html,../inner/index.html}'],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ["'Nunito'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
