// vue.config.js
const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.css', 'jsx'],
      alias: {
        '^': path.resolve(__dirname, './'),
      },
      // fallback: {
      //   g2plot: require.resolve(__dirname, './Deps/g2plot/g2plot.min.js'),
      // },
    },
  },
};
