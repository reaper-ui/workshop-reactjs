/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure these paths are correct
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          800: '#4a3a2a',
        },
      },
    },
  },
  plugins: [],
}
