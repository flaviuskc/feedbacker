/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      regular: ['RobotoRegular'],
      medium: ['RobotoMedium']
    },
    extend:{
      colors:{
        'transparent': 'transparent',
        'pink-550': '#EF4983'
      }
    }
  },
  plugins: [],
}

