/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        5: '20px',
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        destructive: '#ef4444',
        whiteSmoke: '#f5f5f5',
        hotMagenta: '#ff00bf',
        veryLightGray: '#cfcfcf',
      },
      zIndex: {
        avatar: 2,
        threadLine: 1,
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
  safelist: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
}
