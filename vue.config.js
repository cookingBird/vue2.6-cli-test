const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const cdnPath = '/';
const CDN = isProd
  ? {
      js: [cdnPath + 'cdn/vue/vue.js'],
      css: [cdnPath + 'cdn/css/style.css'],
    }
  : { js: [], css: [] };
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        '^': path.resolve(__dirname, './'),
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
