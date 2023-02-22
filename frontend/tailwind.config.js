/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Grotesk: ["Space Grotesk", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Pragati: ["Pragati Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
}