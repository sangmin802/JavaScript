const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : 'development',
  entry : {
    index : './src/js/index.js',
    about : './src/js/about.js',
  },
  output : {
    path : path.resolve(__dirname, 'build'),
    filename : '[name]_bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        use : ['style-loader', 'css-loader']
      }
    ]
  },
  plugins : [
    ...['index', 'about'].map(html => { // map은 새로운 배열을 반환하기때문에 spread operater로 풀어줘야함
      return new HtmlWebpackPlugin({
        template : `./src/html/${html}.html`,
        filename : `./html/${html}.html`,
        chunks : [`${html}`]
      })
    })
  ]
}