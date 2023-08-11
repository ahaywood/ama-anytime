/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        whiteSmoke: '#f5f5f5',
        hotMagenta: '#ff00bf',
      },
      zIndex: {
        avatar: 2,
        threadLine: 1,
      },
    },
  },
  plugins: [],
}
