/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens:{
        'xxsm':'320px'
  
      },
      extend: {},
    },
    plugins: [],
  }