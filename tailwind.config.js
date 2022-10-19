/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerClr: '#1E1E1E',
        gradiabtClr : '#124140',
        cardClr: '#0EC5FF',
        futureClr:'#008B8B'
      }
    },
  },
  plugins: [],
}
