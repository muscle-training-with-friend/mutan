/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        theme_color1:'#F8F6F4',
        theme_color2:'#E3F4F4',
        theme_color3:'#D2E9E9',
        theme_color4:'#C4DFDF'
      }
    },
  },
  plugins: [],
}
