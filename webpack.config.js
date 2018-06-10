const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: ['babel-regenerator-runtime', './index.web.js'],
  output: {
    path: path.join(__dirname, 'desktop', 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ],
  },
  plugins: [
    // new webpack.ContextReplacementPlugin(/.*/, (context) => {
    //   console.log('Jim', context)
    //   if ( !/\/moment\//.test(context.context) ) return;
    //
    //  Object.assign(context, {
    //    regExp: /^\.\/\w+/,
    //    request: '../../locale' // resolved relatively
    //  });
    // })
    /*
    new webpack.ContextReplacementPlugin(/node-gyp-build/, (context) => {
      console.log('Jim', context)
      if (!/node-gyp-build/.test(context.context)) return
    
      Object.assign(context, {
        request: '../utp-native/prebuilds/darwin-x64/electron-57.node'
      })
      console.log('Jim2', context)
    })
    */
   /*
    new webpack.ContextReplacementPlugin(
      /node-gyp-build/,
      path.resolve(__dirname, 'node_modules/utp-native/prebuilds/'),
      true,
      /\.node$/
    )
    */
    new webpack.ContextReplacementPlugin(
      /node-gyp-build/,
      path.resolve(__dirname, 'node_modules/utp-native/prebuilds/'),
      {
        [path.resolve(__dirname, 'node_modules/utp-native/prebuilds/darwin-x64/electron-57.node')]: './darwin-x64/electron-57.node'
      }
    )
  ],
  target: 'electron-renderer',
  resolve: {
    alias: {
      'react-native': 'react-native-electron',
    },
    extensions: ['.web.js', '.js', '.json'],
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'desktop'),
    overlay: true,
    port: 8082,
  },
}
