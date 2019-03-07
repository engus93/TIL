# Responsive 08

## HTML5shiv

![HTML5shiv](https://i.ytimg.com/vi/H3YXBMKdqS0/maxresdefault.jpg)

> `HTML5shiv`는 HTML5의 새로운 요소를 지원해주지 못하는 브라우저나 구 버전의 익스플로러가 HTML5 요소를 지원해주는 기능이다. 자세하게 설명하자면 HTML5에 추가된 header, section, article, footer, nav, aside, figure, figcaption, main, content 등의 요소를 구 버전의 익스플로러(ie6~8)는 inline요소(한 줄로 나열)로 인식하기 때문에 레이아웃 작업에 문제가 됩니다.

###### Ex) 코드 예시
```
    <!-- HTLM5shiv ie6~8 -->
    <!--[if lt IE 9]> 
        <script src="js/html5shiv.min.js"></script>
    <![endif]-->
```
#### [HTML5shiv Github 주소](https://github.com/aFarkas/html5shiv)

###### 출처
- [HTML/CSS기초_HTML5shiv 기능이란?](http://blog.naver.com/PostView.nhn?blogId=degal903&logNo=221173007645&parentCategoryNo=&categoryNo=49&viewDate=&isShowPopularPosts=false&from=postView)

## Modernizr

![Modernizr](https://www.lambdatest.com/blog/wp-content/uploads/2019/01/maxresdefault-1.jpg)

> Modernizr란 사용자의 브라우저가 현재 가지고 있는 HTML5, CSS 기능들을 감지하고 지원여부를 판별하는 Javascript 라이브러리 입니다. 다양한 브라우저에서 지원되는 기능을 하나씩 확인해가면서 개발하는 것은 현실적으로 불가능하기 때문에 Modernizr와 같은 라이브러리를 통해 필요기능을 감지하고 지원 여부에 따라 개발자가 동적으로 처리를 달리할 수 있습니다.

###### 출처
- [Modernizr](http://webframeworks.kr/getstarted/modernizr/)
- [Browser Compatibility](https://www.lambdatest.com/blog/feature-detection-with-modernizr-for-cross-browser-compatibility/)