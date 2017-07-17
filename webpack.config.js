const path = require('path');
const webpack = require('webpack');
const hwp = require('html-webpack-plugin');
const cwp = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    // dirname comes from path, that is project dir
    path: path.resolve(__dirname, 'dist'),
    // bundle js in will be in dist folder
    filename: 'bundle.js',
    // to tell where lives bundle
    // publicPath: '/dist'
  },
  // installed ccs-loader and style-loader - modules to import css
  module: {
    rules: [
      {
        // looking for file ending with .css
        test: /\.css$/,
        use: [
          // loaders are executed in reverse order 
          'style-loader',
          'css-loader'
        ]
      },
      {
        // working with html files
        test: /\.html$/,
        use: ['html-loader'] 
      },
      {
        // loader for images
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              // copy it to the image folder
              outputPath: 'img/',
              // add to index html
              //publicPath: 'img/'
            }
          }  
        ]
      }
    ]
  },
    plugins: [
      new hwp({
        // refference to initial html file
        template: 'src/index.html'
      }),
      new cwp(['dist'])
    ]
};
