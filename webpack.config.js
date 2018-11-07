const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader'],
        exclude: /node_modules/
      },
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env', {
              'plugins': ['@babel/plugin-proposal-class-properties']}],
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'client/src/index.html' }
    ], {}),
  ]
};
