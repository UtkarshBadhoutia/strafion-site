/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        accent: '#00E0FF',
        neon: {
          blue: '#00E0FF',
          red: '#FF0040'
        },
        surface: '#1A1A1A'
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [],
}