module.exports = {
  purge: ['./test/*/*.{vue,js,ts,jsx,tsx}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active'],
    },
  },
  plugins: [],
  important: true,
};
