/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      'Dark-Grayish-Magenta': 'hsl(303, 10%, 53%)',
      'Light-Grayish-Magenta': 'hsl(300, 24%, 96%)',
      'White': 'hsl(0, 0%, 100%)',
      'Very-Dark-Magenta': 'hsl(300, 43%, 22%)',
      'SoftPink': 'hsl(333, 80%, 67%)'
    },
    fontFamily:{
      'league-spartan':'League+Spartan'
    },
    extend: {
      fontSize:{
        'main':'15px'
      }
    },
  },
  plugins: [],
}
