let path = require('path');

module.exports = {
  entry : './src/index.js', // build를 할때(분석할 때) 기준이 되는 경로
  output : {
    filename : 'bundle.js',
    path : path.resolve(__dirname, 'dist')
  },  // build(분석)을 한 내용이 저장될 곳
  module : {
    rules : [{
    }]
  }
}