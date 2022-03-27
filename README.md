# study\_\_react-bootstrap

react-bootstrap 라이브러리에 대한 학습 내용 및 실습 내용들에 대한 저장소입니다.

> # Preview
>
> (empty)

---

> # Library
>
> ## 기본 요구 라이브러리
>
> - react-bootstrap
> - react-bootstrap-icons
> - bootstrap
> - sass

---

> # config
>
> - react-bootstrap 라이브러리를 아래의 명령어로 설치한다
>
>   ```bash
>   $yarn add react-bootstrap react-bootstrap-icons bootstrap[@VERSION] sass
>   또는
>   $npm install react-bootstrap react-bootstrap-icons bootstrap[@VERSION] sass
>   ```
>
> - 루트 js 파일에 부트스트랩의 css 파일 import
>   ```jsx
>   // 아래의 구문은 src/index.js 또는 App.js 파일 안에 포함될 수 있다.
>   import 'bootstrap/dist/css/bootstrap.min.css';
>   또는;
>   import 'bootstrap/dist/css/bootstrap.css';
>   ```

---

> # Study
>
> > ## bootstrap 이란?
>
> - 반응형 웹프로젝트 개발을 위한 가장 인기있는 HTML, CSS, JS 프레임워크
> - 각종 UI 요소들에 대한 css style과 레이아웃 정렬을 className 만으로 제어할 수 있음.
>
>   > ## 컴포넌트 import
>
> - bootstrap 라이브러리에서 제공하는 Button 컴포넌트를 import 하려고 할 때
>
>   ```jsx
>   import Button from 'react-bootstrap/Button';
>
>   // or less ideally
>   import { Button } from 'react-bootstrap';
>   ```
>
> > ## CSS
>
> - [※필수※] 최상단의 루트파일인 src/index.js 또는 App.js 파일에 다음 스타일 import 구문을 추가해야한다.
> - 추가하지 않을 경우 부트스트랩의 스타일은 적용되지 않는다.
>
>   ```jsx
>   // 아래의 구문은 src/index.js 또는 App.js 파일 안에 포함될 수 있다.
>   import 'bootstrap/dist/css/bootstrap.min.css';
>   ```
>
> > ## Sass
>
> - 만약 Sass를 가장 단순한 방법으로 사용하고 있는 경우, 당신의 메인 Sass 파일 안에 Bootstrap의 source Sass 파일들을 포함하고 src/index.js 또는 App.js 파일에서도 요구된다.
> - 이것은 당신이 Sass/SCSS 스타일시트를 CSS로 컴파일하기 위한 번들러를 설치해야할지도 모르는 전형적인 create-react-app 어플리케이션이 허용된다.
>
>   ```jsx
>   /* The following line can be included in a src/App.scss */
>
>   @import "~bootstrap/scss/bootstrap";
>
>   /* The following line can be included in your src/index.js or App.js file */
>
>   import './App.scss';
>   ```
>
> > ## Customize bootstrap
>
> - 만약 bootstrap의 테마 또는 어떠한 bootstrap 변수들을 커스터마이징하길 윈한다면 custom Sass file을 만들 수 있다.
>
>   ```scss
>   /* custom.scss */
>
>   /* make the customizations */
>   $theme-colors: (
>     'info': tomato,
>     'danger': teal
>   );
>
>   /* import bootstrap to set changes */
>   @import '~bootstrap/scss/bootstrap';
>   ```
>
> - 그리고 main Sass file 에서 custom Sass file을 import 하면 된다.
>
>   ```scss
>   // src/App.scss
>
>   @import 'custom';
>   ```
>
>   > ## 사용 방법
>
> - 레이아웃 등의 부트스트랩 기능은 className 이름으로 제어한다.
> - 부트스트랩 아이콘은 \***\*Glyphicons , bootstrap-icons\*\*** 두 가지 종류가 있다.
>
>   ### 레이아웃
>
> - 컨테이너 역할을 하는 div 에 부트스트랩 기능 적용하기
>
>   - [컨테이너 역할을 할 div의 `className=”container”` 로 지정하면, 부트스트랩에서 미리 세팅해놓은 기본 컨테이너에 대한 css 스타일이 자동 적용된다](https://getbootstrap.kr/docs/5.1/layout/containers/).
>
>   ```html
>   <div className="container">
>     <section>
>       <span>Hi</span>
>     </section>
>   </div>
>   ```
>
>    <img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/467c3d4d-65c9-4fe3-9820-fe1ae03bd723/Untitled.png"/>
>
>   ### \***\*Glyphicons\*\*** 아이콘
>
>   - [bootstrapk.com](http://bootstrapk.com/components)에서 원하는 UI를 가져와 사용하면 된다.
>   - 아이콘 className는 다른 컴포넌트와 직접 섞일 수 없으므로 다른 클래스와 함께 사용하지 않도록 한다.
>   - 아이콘 className는 텍스트나 child가 없는 요소에만 사용되어야 한다.
>
>     ```tsx
>     // Bad
>     <span className="glyphicon glyphicon-plus">add</span>
>
>     // Bad
>     <span className="glyphicon glyphicon-plus">
>     	<a href="#"/>
>     	<p>this is a example</p>
>     </span>
>
>     // Good
>     <span className="glyphicon glyphicon-plus"/>
>     ```
>
>   - 스크린리더에서 의도치 않고 혼란스러운 출력을 피하기 위해 `aria-hidden=”true”` 속성으로 숨긴다.
>     ```tsx
>     <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
>     ```
>   - 만약, 텍스트가 없는 아이콘을 만든다면, 그 아이콘의 목적을 식별할 수 있는 대체 콘텐츠(aria-label 등)를 제공해야한다.
>
>   - **예제**
>
>         <img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/edc2e91a-5d95-42c7-adf8-8a436028032e/Untitled.png"/>
>
>     ```tsx
>     <button type="button" className="btn btn-default" aria-label="Left Align">
>       <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
>     </button>
>
>     <button type="button" className="btn btn-default btn-lg">
>       <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
>     </button>
>     ```
>
>      <img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c493c05f-0beb-453a-8584-94258da831f6/Untitled.png"/>
>      
>      ```tsx
>      <div className="alert alert-danger" role="alert">
>        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
>        <span className="sr-only">Error:</span>
>        Enter a valid email address
>      </div>
>      ```
>
>   ### **Bootstrap 아이콘**
>
>   - 1,500여개의 아이콘이 있는 무료 고품질 오픈 소스 아이콘 라이브러리.
>   - [getbootstrap](https://icons.getbootstrap.kr/) 페이지에서 필요한 아이콘의 className를 가져다 쓰면 된다.
>
>     ```bash
>     $npm i react-bootstrap-icons
>     또는
>     $yarn add react-bootstrap-icons
>     ```
>
>   - 아이콘을 장식용으로만 쓴다면 `aria-hidden=”true”` 를 추가해주도록 한다. 그게 아니라면 적절한 대체 텍스트(alt, aria-label 등)을 제공해야한다.
>   - 사용방법
>
>     ```tsx
>     import { BootstrapFill } from 'react-bootstrap-icons';
>     ```
>
>   ### 컴포넌트
>
>   - 일련의 버튼들을 버튼 그룹으로 같이 한 줄에 모으기
>   - 요소가 넓어진다거나 모서리가 없어지는 등 원치 않는 부작용을 피하기 위해 옵션 `container: ‘body’` 을 명시해야함.
>   - 정확한 `role` 속성을 부여하고 `aria-label`을 제공하는 것을 추천
>   - 예제
>
>     - .btn로 된 일련의 버튼들을 .btn-group으로 감싸기
>       <img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/51f7089b-a2b6-491a-903b-2922c37564dd/Untitled.png"/>
>
>       ```tsx
>       <div className="btn-group" role="group" aria-label="...">
>         <button type="button" className="btn btn-default">
>           Left
>         </button>
>         <button type="button" className="btn btn-default">
>           Middle
>         </button>
>         <button type="button" className="btn btn-default">
>           Right
>         </button>
>       </div>
>       ```

---

> # Error
>
> > ### Plugin "react" was conflicted between ...
>
> - 증상 : “react” 플러그인이 서로 충돌 일어났을 때 발생하는 에러이다.
>
>   ```bash
>   Plugin "react" was conflicted between
>   "package.json » eslint-config-react-app »
>   P:\Web\selfStudy\react-bootstrap\node_modules\eslint-config-react-app\base.js"
>   and "BaseConfig »
>    P:\Web\SelfStudy\react-bootstrap\node_modules\eslint-config-react-app\base.js".
>   ```
>
> - **원인 :** 명령어 라인 path 에서 대소문자 오류로 인한 문제였다.. 실제 Path는 “**S**elfStudy/react-bootstrap/...” 인데, 본인의 터미널 시작 경로는 “selfStudy/react-bootstrap/... “ 로 되어 있었다.
>
> ~~-솔루션 : package.json 창을 열고 `ctrl + s` 단축키로 파일을 저장하니 해결되었다. 아무래도 최초 프로젝트 파일을 생성하면서 최초로 생성된 상태에서 바로 설치된 패키지 라이브러리들이 반영되지 않아 발생한 것 같다.~~
>
> - **솔루션** : 실제 경로처럼 대문자로 수정했더니 정상 작동하였다. 앞으로는 익숙한 경로라도 다시 한 번 체크하는 습관을 가지자...!
