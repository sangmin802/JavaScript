// webpack의 이유
// 웹사이트를 요청하는 과정에서, 개발자도구의 network를 보면, jpg, js, css 등등 정말 많은 파일들을 서버에 요청을한다.
// 서버에 요청이 이런식으로 늘어나게되는것은 성능저하에 큰 영향을 준다.
// 따라서 entry가 되는 기본 js파일에 다른 파일들을 묶어서 build하는것을 budle(대표 webpack)이라 한다.

// webpack 기본기능 설치
// npm install --save -dev webpack webpack-cli

// webpack.config 파일 없이 터미널로만 번들링을 할 수 있긴 하다.
// npx webpack --entry ./src/index.js --output ./build/index_bundle.js

// mode
// 1. development : bundle된 js파일이 좀 더 보기 쉽고, 변환된 것들에 대해 주석으로 설명이 써져있음
// 2. production : 배포를 위해 띄어쓰기, 줄바꿈들을 모두 최소화함

// **loader
// 첫 entry되는 js파일을 제외한 css, img 등등을 번들링하는 모듈들
// css-loader : css파일을 js파일에 묶어서, import 하여 js형식으로 가져옴
// style-loader : import 한 css파일을 css형식으로 번들링해줌

// plugin
// loader와 비슷하지만 좀 더 자유롭게 번들링할 수 있음.
// 각각 plugin들마다 서로 다른 구조를 갖고있음.

// npx webpack --watch : 변화가 있을 때 알아서 build를 함