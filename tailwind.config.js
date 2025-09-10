/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cosmic1: "#0b0c1a",
        cosmic2: "#1a1630",
        accent: "#8a4fff",
        gold: "#f7c948"
      },
      backgroundImage: {
        'nebula': "url('/assets/backgrounds/nebula.jpg')"
      }
    }
  },
  plugins: []
};
