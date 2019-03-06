const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  mode: process.env.MODE || 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 
      API_URL: JSON.stringify(process.env.API_URL) 
    })
  ],
  devServer: {
    port: process.env.PORT || 3000,
    historyApiFallback: true,
  },
};
