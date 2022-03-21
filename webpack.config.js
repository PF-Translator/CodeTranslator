const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({ template: './index.html' })],
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    static: {
      directory: path.resolve(__dirname, './build')
    },
    compress: true,
    port: 8080,
  }
}