// 0. npm install --save-dev webpack-dev-server를 통해 n수정할때마다 npm start를 할 필요 없이, 자동으로 적용되도록 한다.
//    1) package.json에 추가 -> "devserver": "webpack-dev-server --open"
//    2) webpack.config.js ouput에 publicPath : 'dist'

// 1. 프로젝트를 실행할 폴더에 npm init을 통해 node js를 실행하기위한 기초작업을 설치한다.(package.json)
//    터미널에서 계속 enter누르면 됨.

    // bundler
    // 웹페이지를 구성하는 html, js, css, img등의 파일들이 많을수록 웹 서버에 요청을 할 때 속도가 느려진다.
    //    -> 같은 타입의 파일끼리 묶어서 구성하면 서버에 요청하는 횟수가 줄어들고, 비교적 속도가 빨라진다.
    // (react의 build처럼)

    // babel
    // IE같이 후진 브라우저가 es6같은 최신 스크립트를 지원할 수 있도록 컴파일해주는 기능. 단! 이 하나의 일만 가능함

    // 자바스크립트 bundler의 종류
    // 1. webpack
    // 2. parcel
    // 3. browserify

    // webpack
    // 자바스크립트 정적 모듈 번들러로, 모든것이 모듈화되어있다.
    // react나 angular등 import, export를 사용할 수 있는것은 webpack으로 각 모듈들이 서로 의존관계에 있기 때문이다.


// 2. webpack 기능을 설치해준다.
//    npm install --save-dev webpack webpack-cli
//    --save : package.json에 추가해줘
//    --save-dev : package.json의 devDependencies에 추가해줘.
//            큰 차이는 없지만, -dev가 없으면 추후에 항상 설치되고,   -dev가 있으면 특정 명령을 통해 제외하고 설치할 수 있다.
//    webpack의 기본설정은 js나 json파일만 읽고 변환할 수 있다. 따라서 rules에 css나 img(file)에 적합한 loader를 사용하도록 설정해주어야 한다. *webpack 로더의 종류 검색https://bogyum-uncle.tistory.com/111

// 3. 간단한 명령어로 webpack을 실행할 수 있도록, scripts에 
//    "start" : "webpack"을 써준다.

// 4. webpack을 작동시키기위해선, config(구성)파일이 필요하다.
//  내보내기
//    export default : 해당 모듈에서 하나만 내보냄.
//    exports : 해당 모듈에서 여러개를 객체형식으로 내보냄.
//    export : 해당 모듈에서 선언이 된 여러개를 객체형식으로 내보냄.
//    module.exports : 해당 모듈에서 내보낼 때, 객체로 감싸서 내보낼 수 있게 됨.
//  받기
//    require : Module이라는 값의 default값으로 받아와짐. 
//    import : 그냥 받아와짐

// 지금까지 순서 정리.
// 1) webpack이 실행이 되면, entry를 통해 기준이되는 파일을 분석함.
// 2) output의 경로를 통해 build된 파일을 저장함.
// 3) 일반 html파일은 script경로를 build된 파일로 하면 됨.(모든 브라우저에서 사용가능한 버전으로 컴파일된 스크립트)

// 5. 최신의 ES 자바스크립트도 지원가능하도록 컴파일해주는 babel preset 설정을 해준다.
// npm install --save-dev @babel/core @babel/cli @babel/preset-env
// npm install --save-dev babel-loader
// npm install --save @babel/polyfill
// https://github.com/babel/babel-loader 관련 깃허브
// preset의 옵션을 통해, 컴파일할 버전 및, 적용된 버전값들을 디버깅할 수 있다.

// 6. webpack entry인 index.js에 모든 js파일들(class화 되어있는)을 import해주어 실행시키도록 한다.
