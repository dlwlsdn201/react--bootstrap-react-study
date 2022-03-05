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
> - bootstrap
> - sass

---

> # config
>
> - react-bootstrap 라이브러리를 아래의 명령어로 설치한다
>
>   ```bash
>   $yarn add react-bootstrap bootstrap[@VERSION] sass
>   또는
>   $npm install react-bootstrap bootstrap[@VERSION] sass
>   ```
>
> - 루트 js 파일에 부트스트랩의 css 파일 import
>   ```jsx
>   // 아래의 구문은 src/index.js 또는 App.js 파일 안에 포함될 수 있다.
>   import 'bootstrap/dist/css/bootstrap.min.css';
>   ```

---

> # Study
>
> > ## 컴포넌트 import
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
>   > ## CSS
>
> - [※필수※] 최상단의 루트파일인 src/index.js 또는 App.js 파일에 다음 스타일 import 구문을 추가해야한다.
> - 추가하지 않을 경우 부트스트랩의 스타일은 적용되지 않는다.
>
> ```jsx
> // 아래의 구문은 src/index.js 또는 App.js 파일 안에 포함될 수 있다.
> import 'bootstrap/dist/css/bootstrap.min.css';
> ```
>
> > ## Sass
>
> - 만약 Sass를 가장 단순한 방법으로 사용하고 있는 경우, 당신의 메인 Sass 파일 안에 Bootstrap의 source Sass 파일들을 포함하고 src/index.js 또는 App.js 파일에서도 요구된다.
> - 이것은 당신이 Sass/SCSS 스타일시트를 CSS로 컴파일하기 위한 번들러를 설치해야할지도 모르는 전형적인 create-react-app 어플리케이션이 허용된다.
>
> ```jsx
> /* The following line can be included in a src/App.scss */
>
> @import "~bootstrap/scss/bootstrap";
>
> /* The following line can be included in your src/index.js or App.js file */
>
> import './App.scss';
> ```
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
> - 솔루션 : package.json 창을 열고 `ctrl + s` 단축키로 파일을 저장하니 해결되었다. 아무래도 최초 프로젝트 파일을 생성하면서 최초로 생성된 상태에서 바로 설치된 패키지 라이브러리들이 반영되지 않아 발생한 것 같다.
