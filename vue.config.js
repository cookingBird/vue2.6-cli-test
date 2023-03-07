// vue.config.js
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const CDN = {
  js: ['cdn/vue/vue.min.js', 'cdn/g2plot/g2plot.min.js', 'cdn/lodash/lodash.min.js'],
  css: ['cdn/css/style.css'],
};
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.css', 'jsx'],
      alias: {
        '^': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src'),
      },
      // fallback: {
      //   g2plot: require.resolve(__dirname, './Deps/g2plot/g2plot.min.js'),
      // },
    },
    externals: isProd
      ? [
          function (context, request, callback) {
            if (/\.min\.js$/.test(request)) {
              return callback(null, 'commonjs' + request);
            }
            callback();
          },
          // function (context, request, callback) {
          //   if (/^vue$/.test(request)) {
          //     return callback(null);
          //   }
          //   callback();
          // },
          // /^vue/i, //remove vue vuex vue-router
          // {
          //   vue: 'Vue', //only remove vue
          // },
        ]
      : [],
  },
  chainWebpack: function (config) {
    config.plugin('html').tap((args) => {
      args[0].CDN = CDN;
      return args;
    });
  },
};
