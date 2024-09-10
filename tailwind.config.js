/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#235495',
        'secondary': '#68AE00',
        'tablerow': '#f2f2f2'
      },
      backgroundImage: {
        'card-one': "url('./liquid-cheese-1.svg')",
      }
    },
  },
  plugins: [],
}

