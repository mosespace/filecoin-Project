/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBg: '#0F172A',
        primaryLight: '#293548',
        primaryText: '#73C1E8',
      },
      borderWidth: {
        1: '0.5px',
      },
    },
  },
  plugins: [],
}
