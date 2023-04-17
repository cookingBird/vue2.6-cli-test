// vue.config.js
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const CDN = {
  js: [
    'cdn/g2plot/g2plot.min.js',
    'cdn/lodash/lodash.min.js',
    'cdn/vue/vue.min.js',
    'cdn/ElementUI.js'
  ],
  css: ['cdn/css/style.css']
}
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.css', 'jsx'],
      alias: {
        '^': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src')
      }
      // fallback: {
      //   g2plot: require.resolve(__dirname, './Deps/g2plot/g2plot.min.js'),
      // },
    },
    externals: isProd
      ? {
          vue: 'Vue',
          'element-ui': 'ElementUI'
        }
      : {}
  },
  chainWebpack: function (config) {
    config.plugin('html').tap(args => {
      args[0].CDN = CDN
      return args
    })
  }
}
