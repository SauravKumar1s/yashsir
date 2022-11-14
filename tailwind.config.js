/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '20px',
    },
    extend: {
      colors: {
        headerClr: '#1E1E1E',
        gradiabtClr : '#124140',
        cardClr: '#0EC5FF',
        futureClr:'#008B8B',
        cardTextClr:'#00C2FF',
        getTextClr:'#2F6DBA'
      }
    },
  },
  variants: {
    display: ['responsive', 'dropdown']
  },
  plugins: [require('tailwindcss-dropdown')],
}
