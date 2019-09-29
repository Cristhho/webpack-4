const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
  	app: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    'library': '[name]'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css|postcss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          }
        }
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    port: 9000
  },
  plugins: [
    new VueLoaderPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}