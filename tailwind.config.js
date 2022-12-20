/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{vue,less,css,scss,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {},
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
    plugin(function ({ addVariant, e }) {
      addVariant('el-input', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.el-input${e(`${separator}${className}`)} .el-input__inner`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant('small', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `div[size=small].small${e(`${separator}${className}`)}`;
        });
      });
    }),
  ],
};
