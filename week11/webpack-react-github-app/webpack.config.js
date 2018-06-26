const path = require('path');

module.exports = {

  entry: './src',  // starting point for webpack to build files (input)

  // processing to do on our input files:
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
          plugins: [
            ['transform-react-jsx']
          ]
        }
      }
    ]
  },

  // where to put the results of the processing (output)
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'   // we need to load this in our index.html
  },

  devtool: 'inline-source-map',  // see errors in our original component .jsx files

  devServer: {
    // options for the dev server (npm run dev)
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true
  }

};
