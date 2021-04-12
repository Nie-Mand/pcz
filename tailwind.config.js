module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './utils/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'rgb(228, 63, 63)',
          2: 'rgba(228, 63, 63, 0.13)',
          3: 'rgba(228, 63, 63, 0.69)',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      ringWidth: ['active'],
      ringColor: ['active'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
}
