/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '280px',
      'md': '325px',
      'lg': '768px',
      'xl': '1080px'
    },
    extend: {},
  },
  plugins: [],
}

