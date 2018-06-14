var path = require('path');


module.exports = {
  mode: 'development',
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
   rules: [
     {
		test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
     }
   ]
  },
  devServer: {
    contentBase: './public',
    port: 8000
  }
};
