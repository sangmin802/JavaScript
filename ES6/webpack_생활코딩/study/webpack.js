// webpack의 이유
// 웹사이트를 요청하는 과정에서, 개발자도구의 network를 보면, jpg, js, css 등등 정말 많은 파일들을 서버에 요청을한다.
// 서버에 요청이 이런식으로 늘어나게되는것은 성능저하에 큰 영향을 준다.
// 따라서 entry가 되는 기본 js파일에 다른 파일들을 묶어서 build하는것을 budle(대표 webpack)이라 한다.

// webpack 기본기능 설치
// npm install --save -dev webpack webpack-cli

// webpack.config 파일 없이 터미널로만 번들링을 할 수 있긴 하다.
// npx webpack --entry ./src/index.js --output ./build/index_bundle.js