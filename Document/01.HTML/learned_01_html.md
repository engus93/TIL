# HTML

### 1. HTML이란?


**※ HyperText Markup Language의 약자입니다.**

- HT(HyperText) : 문서와 문서가 링크로 연결되어 있다.
- M (Markup) : 태그로 이루어져 있다.
- L (Language) : 언어

Ex)

```
<html>
    <head>
        화면에 보여지기 위한 추가적인 정보(메타정보)를 담고 있는 부분
    </head>
    <body>
        화면에 보여지는 부분
    </body>
</html>
```

### 2. HTML5란?

- HTML5란 HTML이 멀티미디어 등 다양한 애플리케이션까지 제공하도록 진화한 **웹 프로그래밍 언어**이다.

-  HTML의 새로운 버전으로 **Client Side Technology** 기술의 중심이 되는 마크업 언어
`Client Side Technology : 클라이언트 ↔ 서버 구조의 클라이언트 쪽에서 행해지는 처리`

- 모바일 웹에서의 핵심 기술이다.

### 3. HTML5의 특징

**1. 멀티미디어(Multimedia)**
> 플래시와 같은 플러그인의 도움없이 비디오 및 오디오 기능을 자체적으로 지원한다.

**2. 그래픽(Graphics & Effects)**
> SVG, 캔버스를 사용한 2차원 그래픽과 CSS3, WebGL을 사용한 3차원 그래픽을 지원한다.

**3. 통신(Connectivity)**
> 지금까지의 HTML은 단방향 통신만이 가능하였으나 HTML5는 서버와의 소켓 통신을 지원하므로 서버와의 양방향 통신이 가능하다.

**4. 디바이스 접근(Device acess)**
> 카메라, 동작센서 등의 하드웨어 기능을 직접적으로 제어할 수 있다.
오프라인 및 저장소(Offline & Storage)
오프라인 상태에서도 애플리케이션을 동작시킬 수 있다. 이는 HTML5가 플랫폼으로서 사용될 수 있음을 의미한다.

**5. 시맨틱 태그(Semantics)**
> HTML 요소의 의미를 명확히 설명하는 시맨틱 태그를 도입하여 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명할 수 있다. 이를 통해 HTML 요소의 의미를 명확히 해석하고 그 데이터를 활용할 수 있는 시맨틱 웹을 실현할 수 있다.

**6. CSS3**
> HTML5는 CSS3를 완벽하게 지원한다.

![HTML5](https://t1.daumcdn.net/cfile/tistory/995A3F425AEFFD6B09)

### 5. HTML4 vs HTML5 (바뀐 점)

1. `Syntax(구문)`
> - DOCTYPE : 기존의 html 문서타입보다 간결해졌다.
> - Encoding : 인코딩 선언부가 간결해졌다.
> - 그래픽 언어의 사용 : 수식기술언어(MathML), 그래픽언어(SVG) 등을 사용할 수 있다.
> - HTML5는 마크업시 TAG는 대소문자를 구분하지 않는다. 하지만 가독성 측면에서 소문자로 작성하는 것을 권장한다.

2. `Language(언어)`
> - Semantic Element가 추가되었다 : Header, Footer, Nav, Section, Article 등등....
> - 사라진 Element
> - CSS로 처리할 수 있는 Element
> - Frame 관련 Element
> - 거의 사용되지 않는 Element

3. `API`
> - Video/Audio API : Video, Audio Element와 함께 Video, Audio를 재생하는 데 사용된다.
> - Offline Web Application : Offline을 지원하는 API
> - Drag & Drop API 등등이 있습니다.

### 6.참고

1. [HTML5란 무엇인가?](https://webclub.tistory.com/491)
2. [HTML5 기본 문법](https://poiemaweb.com/html5-syntax)