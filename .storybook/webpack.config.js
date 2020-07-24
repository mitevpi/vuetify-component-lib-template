const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.dirname(path.resolve(__dirname)),
    },
  },
};
