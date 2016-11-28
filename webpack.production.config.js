var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var PluginExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "[name]-[hash].js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader',
      },
      {
        test: /\.css$/,
        loader: PluginExtractText.extract('style-loader', 'css-loader'),
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new PluginExtractText("[name]-[hash].css"),
    new webpack.HotModuleReplacementPlugin(), //热加载插件
  ],

}