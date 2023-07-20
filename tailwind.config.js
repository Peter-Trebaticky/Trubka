/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#033453'
      },
      screens: {
        '3xl': '2100px',
      },
      
    },
  },
  plugins: [],
}
