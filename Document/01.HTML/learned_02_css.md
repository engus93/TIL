# CSS

### 1. CSS란?

**※ Cascading Style Sheets의 약자입니다.**

- C(Cascading) : 계속되는 / 연속되는
- S(Style) : 모양 / 방식 /스타일
- S(Sheets의) : 덮여있는

→ `반복적인 모양(방식)의 덮어주는 천(커버) 같은 역할`

ex)

```
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}
```

### 2. CSS 동작 방식

```
1. 브라우저가 HTML과 CSS를 DOM으로 변환
2. 이제 문서의 내용과 스타일을 결합
3. 브라우저가 DOM의 내용을 표시
```

![CSS_system](https://mdn.mozillademos.org/files/11781/rendering.svg)

#### ※ DOM과 BOM이란?

##### Javascript 는 4가지로 세분화할 수 있다

| 분류 | 설명 | 
|:------:|:------:|
|   자바스크립트       |  Core문법	기본문법, 데이터타입, 조건문 등이 포함                                         |
|   자바스크립트       |  Core라이브러리	내장함수들이 포함되어있음, Date, Math 등                                 |
|   자바스크립트 DOM   |   노드(node), 스타일, 속성, 이벤트 등을 다룰 수 있는 다양한 기능 포함                      |
|   자바스크립트 BOM   |   브라우저와 관련된 Window, Navigator, Location, History, Document, Screen 객체가 포함   |

#### DOM (Document Object Model)

- DOM(문서 객체 모델) 은 HTML 문서를 노드트리로 나타내는데 그렇기 때문에 **DOM트리의 모든 노드는 객체이다.**

```
노드(Node)란?
트리구조에서 데이터의 상하위 계층을 나타내는 위치의 항목
```

Ex)

![tree](https://t1.daumcdn.net/cfile/tistory/997FF93359CB0C530D)

#### BOM (Browser Object Model)

```
BOM(브라우저 객체 모델) 은 브라우저와 컴퓨터 스크린에 접근 할 수 있는 객체의 모음.
window 객체를 통해 접근 가능
```

#### window 객체모델

- navigator : 브라우저명과 버전정보를 속성으로 가짐
- window : 최상위 객체로, 각 프레임별로 하나씩 존재
- document : 현재문서에 대한 정보
- location : 현재 URL에 대한 정보, 브라우저에서 사용자가 요청하는 URL
- history : 현재의 브라우저가 접근했던 URL history
- screen : 브라우저의 외부환경에 대한 정보를 제공

Ex)

> - 브라우저 창을 움직이거나 크기를 조절
> - 브라우저 창을 새로 띄움
> - 브라우저의 실제 정보를 반환하는 navigator 객체
> - 사용자의 화면 해상도에 대한 정보를 반환하는 location객체
> - 쿠키 지원
> - XMLHttRequest와 같은 커스텀 객체