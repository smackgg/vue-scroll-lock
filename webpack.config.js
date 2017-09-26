let path = require('path')
let webpack = require('webpack')

module.exports = {
  entry: './example/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vue-tactful-scroll': path.resolve(__dirname, './src'),
    },
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    host: '0.0.0.0',
    port: 8080,
  },
  devtool: '#eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ])

  if (process.env.BUILD == 'publish') {
    module.exports.entry = './src/index.js'
    module.exports.output = {
      path: path.resolve(__dirname, './lib'),
      filename: 'vue-tactful-scroll.min.js',
      library: 'VueTactfulScroll',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    }

    module.exports.resolve = {
      alias: {
        'vue$': 'vue/dist/vue.common.js',
      },
    }

    // Banner
    let moment = require('moment')
    let pkg = require('./package.json')
    let banner = 'Vue Scroller \nversion: ' + pkg.version + ' \nrepo: https://github.com/smackgg/vue-tactful-scroll \nbuild: ' + moment().format('YYYY-MM-DD HH:mm:ss')

    module.exports.plugins.push(
      new webpack.BannerPlugin({
        banner: banner,
        entryOnly: true,
      })
    )
  }
}
