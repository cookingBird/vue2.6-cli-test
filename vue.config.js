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
    externals: [
      function (context, request, callback) {
        if (/.*\.min\.js$/.test(request)) {
          console.log('request', request);
          console.log('context', context);
          return callback(null, 'commonjs ' + request);
        }
        callback();
      },
      /^vue/i, //remove vue vuex vue-router
      {
        vue: 'Vue', //only remove vue
      },
    ],
  },
};
