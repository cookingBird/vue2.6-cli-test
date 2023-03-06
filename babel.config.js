module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: ['@babel/plugin-transform-modules-umd', require('babel-auto-try-async')],
};
