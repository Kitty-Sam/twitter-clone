/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('/bg-image.jpeg')",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')]
}
