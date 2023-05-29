/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FF7152",
        bright_accent: "#FFC89F",
        glow_accent: "#FF9D7A",
        text: "#222",
        inverted_text: "#FFF",
        muted_text: "#555",
        muted_bg: "#EEE",
        bg: "#FFF"
      }
    },
  },
  plugins: [],
}
