const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : {
    index : './src/js/index.js' // es5에 존재하지 않는 es6의 메서드나 생성자들도 지원토록함
  }, // build를 할때(분석할 때) 기준이 되는 경로
  // entry : { // 만약, SPA가 아니라서 페이지마다 각기다른 script파일이 연결되어야 할 때. 각각 key값을 주고, output의 filename에서 변수로 [name]을 준다.
  //   main : './src/index.js',
  //   menu : './src/menu.js'
  // },
  output : { // build(분석)을 한 내용이 저장될 곳
    filename : './js/[name].js',
    // filename : '[name].bundle.js',
    path : path.resolve(__dirname, 'dist'),
    // publicPath : 'dist' // devserver로 확인하기 위함
  },
  module : {
    rules : [
      { // 최신의 ES스크립트를 지원가능한 버전으로 컴파일하는 babel
        test : /\.js$/,
        include : path.resolve(__dirname, 'src/js'),
        use : {
          loader : 'babel-loader',
          options : {
            presets : [['@babel/preset-env',
                {
                  'targets' : {
                    'browsers' : ['last 2 versions']
                  },
                  debug : true
                }
            ]],
          }
        }
      },
      {
        test : /\.css$/,
        sideEffects : true,
        use: [
          {
            loader : MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ]
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      minify : {
        collapseWhitespace : true
      },
      hash : true,
      template : './index.html',
      filename : 'index.html'
    }),
    new HtmlWebpackPlugin({
      minify : {
        collapseWhitespace : true
      },
      hash : true,
      template : './menu.html',
      filename : 'menu.html',
      excludeChunks  : ['index'] // MPA에서, 특정 html은 해당 js파일을 제외함.
    }),
    new MiniCssExtractPlugin({
      filename: "./css/index.css",
    })
  ]
}