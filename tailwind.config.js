const plugin = require('tailwindcss/plugin');
const { createTheme } = require('tailwind-create-theme');
module.exports = {
  mode: 'jit',
  purge: ['./test/*/*.{vue,js,ts,jsx,tsx}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'first-child', 'disabled', 'light'],
      scale: ['active'],
      textColor: ['first-child', 'disabled', 'light'],
      fontSize: ['light'],
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('first-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-child${separator}${className}`)}:first-child`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant('light', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `body.light .${e(`light${separator}${className}`)}`;
        });
      });
    }),
  ],
};
