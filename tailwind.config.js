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
        theme_color4:'#C4DFDF',
        accent:"#FF7152",
        bright_accent:"#FFC89F",
        mid_accent:"#FF9D7A",
        text:"#222",
        inverted_text:"#FFF",
        muted_text:"#555",
        muted_bg:"#EEE",
        bg:"FFF"
      }
    },
  },
  plugins: [],
}
