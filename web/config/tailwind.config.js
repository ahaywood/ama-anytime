/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        halfAndHalf: "url('/images/bg.svg')",
      },
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
        error: '#EF4344',
        success: '#15a34a',
      },
      padding: {
        18: '4.5rem',
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
