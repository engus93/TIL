# Media Query

### Media Query란?

>출력 장치의 여러 특징 가운데 일부를 참조하여 CSS 코드를 분기 처리함으로써
**하나의 HTML 소스가 여러가지 뷰를 갖도록 구현할 수 있는 명세이다.**
일반적으로 뷰포트 해상도에 따라 CSS 코드를 분기한다.

###

##### Ex) CSS 코드 내부에서 분기하기

```
@media only all and (조건문) {실행문}
```

###

##### Ex) CSS 코드 외부에서 분기하기

```
<link rel=”stylesheet” type=”text/css” media=”all and (조건A)” href=”A.css”>
<link rel=”stylesheet” type=”text/css” media=”all and (조건B)” href=”B.css”>
```