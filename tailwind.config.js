/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:'#FF7152',
        bright_accent:'#FFC89F',
        glow_accent:'#FF9D7A',
        text:'222',
        invert_text:'FFF'
      }
    },
    
  },
  plugins: [],
}
