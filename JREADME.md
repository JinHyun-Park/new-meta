vue create로 프로젝트 생성.
router, vuex 등 선택

vue-cli 3.x에서 webpack 설정 방법 페이지
https://lovemewithoutall.github.io/it/vue-cli-3-webpack/

vue프로젝트에 ESLint recommended, autoFixOnSave 적용
--> 이거 적용해야 js, vue 파일에 대해 eslint가 엄격한 코딩 스타일(현재 airBNB 기준 적용시켰음)에 의해 에러 발생하지 않는 코드 작성 가능.
https://velog.io/@skyepodium/VS-code%EC%97%90%EC%84%9C-vue%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-eslint-%EC%A0%81%EC%9A%A9-7xjr4r2on5


VS code 확장 설치목록
1. view-in-browser : html 파일을 기본 브라우저로 볼 수 있도록 함
2. vetur 코드에 대한 문법 강조, 코드 자동완성, 디버깅 린팅 기능들 제공
3. HTML Snippets : HTML 태그 조각을 빠르게 작성할 수 있도록 도와줌
4. JS-CSS-HTML Formatters : JS, CSS, HTML의 코드 자동완성 기능을 제공, 에디터 창에서 Cntl+Space 눌러 사용
5. Vue 2 Snippets : Vue.js 2.0 의 코드 조각 지원과 문법 강조 기능 제공
6. Vue-beautify : Vue.js 코드에 대한 정리, 배치 기능 제공
7. ESLint : 자바스크립트 코드 스타일, 문법 체크 기능을 제공
8. vscode-icons : vscode 디렉터리 구조 예쁘게 변경


*npm install 해주면 dependancy 걸려있는 패키지들이 모두 다운로드 됨.
추가한 패키지(-g는 전역, --save는 디렉터리에 설치)
npm install -g yarn @vue/cli (vue-cli 3.0 이상 버전)
npm install -g babel-cli yarn
yarn add -D babel-cli babel-preset-env babel-preset-stage-2
vue add axios

webpack 설정을 위한 패키지 설치
npm install --save-dev webpack webpack-cli

VS Code + Git 연동
https://evols-atirev.tistory.com/14
git remote add origin https://github.com/JinHyun-Park/new-meta.git

SPA로 개발하여 빌드해서 상용에 올리고 사용자가 직접 url을 쳐서 들어갈 경우 없는 파일에 접근하는 것이기 때문에 Spring에서는 다음과 같은 설정을 해야함
https://handcoding.tistory.com/196

페이지 쪼개는 법(MPA)
https://kamang-it.tistory.com/entry/JavaScriptVuevue30-cli%EC%97%90%EC%84%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%8B%A8%EC%9C%84%EB%A1%9C-%EC%AA%BC%EA%B0%9C%EC%84%9C-%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B0

vuetify(UI 컴포넌트 등) 적용과 IE11 지원하게 하기 위한 설정
npm install --save vuetify  (vue add vuetify)
https://vuetifyjs.com/ko/getting-started/quick-start
npm install babel-polyfill --save
npm install @babel/preset-env --save-dev

npm install --save-dev babel-plugin-syntax-dynamic-import

Babel 라이브러리 설치
yarn add -D babel-cli babel-preset-env babel-preset-stage-2

material-design icon
npm install --save material-design-icons-iconfont
import 'material-design-icons-iconfont/dist/material-design-icons.css'

npm install @mdi/font --save

transform-imports 패키지가 a-la-carte 컴포넌트에 꼭 필요한 건 아니지만 패키지들을 임포팅하는 프로세스를 간단하게 만들기 때문에 "매우" 추천
https://vuetifyjs.com/ko/framework/a-la-carte
npm i stylus stylus-loader style-loader css-loader --save-dev
제한 사항(동적 구성 요소 있을 때 수동으로 구성 요소 가져와야함)에 관해서는 홈페이지 참고
