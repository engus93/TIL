# VanillaScript

## #1 Theory

### Variable (변수)

Javascript에는 **3가지의 변수**가 있다.
var는 ECMAscript6 이전의 변수이고 최근에는 let과 const를 많이 쓴다.
변경 가능한 변수는 **let**, 고정형 상수 변수는 **const**를 권장한다.

```
var     # 변수 값 변경 O / funtion단위의 scope
let     # 변수 값 변경 O / {}(블록)단위의 scope
const   # 변수 값 변경 X / {}(블록)단위의 scope
```

출처 : [어제 오늘 내일](https://hianna.tistory.com/314)

※ `camel case` : 낙타의 등을 비유함 한칸 띄우는 표현을 대문자로 표현

```
Nico Info

 → const nicoInfo    # nico의 정보 변수명
```

### Array (배열)

**배열**이란 어떤 특정한 방식으로 배열된 다수의 항목들을 말한다.

Ex) Dudu의 정보 변수에 담기

```
const duduInfo = {
    name : "Dudu",
    age : 30,
    gender : "Male",
    isHandsome : true,
    favMovies : ["극한직업", "뺑반", "드래곤 길들이기 3"],
    favFood : [
        {
            name : "불고기",
            fatty : true
        },
        {
            name : "샐러드",
            fatty : false
        }
    ]
}

console.log(duduInfo);
```

###### ※ Array 안에 상수, 문자, 숫자, 배열, 객체 다 넣을 수 있다.

## #2 Practice

### Function (함수)

함수는 어떠한 조건을 실행하는 것 또는 기능이라고 말한다.

Ex)
```
# 함수 선언

function sayHello(name, age){
    console.log("Hello!", name, " you have ", age, " years of age.");
}

#함수 실행

sayHello("Nicolas", 15);    

```

---

```
# 함수 선언 (다른 방식의 표현)

function sayHello(name, age){
    console.log(`Hello! ${name} you have ${age} years of age.`);
}

#함수 실행

sayHello("Nicolas", 15);    

```

### Javascript로 값 불러오기

`querySelector`를 이용
```
getElementById              # id를 이용해서 불러옴
getElementsByClassName      # class를 이용해서 불러옴
querySelector               # 둘 다 사용 가능
```

Ex)

```
const titleName = const title = document.querySelector("#title");

title.innerHTML = "ㅋㅋㅋㅋ";
```

### Window 함수

Ex) 웹 화면을 클릭시 로그가 출력되는 예제
```
function handleClick(event){
    console.log("나와랏!")
}

window.addEventListener("click", handleClick)
```

click을 할 때 감지해서 handleClick를 실행하는 문법이다.

**※ 주의 : hanleResize와 hanleResize()는 다르다. ()가 있다면 아마 페이지가 구성 될 때 이미 첫 실행이 되고 ()이 없다면 click을 감지하는 순간 첫 실행이 된다.**

Ex) 웹 화면을 클릭시 title의 색상이 파란색이면 true 하얀색이면 false
```
function handleClick(event){

    if(title.style.color === "blue"){
        title.style.color = "white"     # 하얀색
    }else{
        title.style.color = "blue"      # 파란색
    }
}

window.addEventListener("click", handleClick)
```

Ex) 입력 창을 띄워 18살 보다 크면 true 작거나 같으면 false
```
const age = prompt("How old are you");

if(age > 18){
    console.log("you can drink!")
}else{
    console.log("you can not drink!")
}
```

### DOM if else part 1

Ex) 색상을 변경하는 예제

```
const BASE_COLOR = "rgb(127, 140, 141)";    # 기본 텍스트 색상
const OTHER_COLOR = "blue";                 # 변경 될 텍스트 색상

function handleClick(event) {               # 텍스트를 클릭시 실행 될 함수
    const currentColor = title.style.color; # 현재 텍스트의 컬러를 변수에 담는다.
    if(currentColor === BASE_COLOR){        # 비교
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){                            # 처음 실행 될때 텍스트의 색상을 초기화
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);   # 해당 객체 클릭을 감지하면 함수 실행
}

init();
```

> 1. 처음에 웹 페이지를 읽으면서 `init()`으로 `title`의 색상을 `BASE_COLOR`로 설정이 된다.
> 2. title을 클릭할 때마다 `title.addEventListener("click", handleClick)`이 감지하여 `handleClick`을 실행한다.
> 3. 현재 `title`의 색상을 `currentColor`에 넣어 `BASE_COLOR`와 ㅣ비교 후 그에 따른 결과로 이동해 색상을 변경한다.
> - BASE_COLOR의 색상을 rgb 컬러로 넣은 이유는 비교 할 때에 `currentColor`가 rgb의 형태이기에 맞춰주었다.

Ex) 인터넷 연결 & 끊김 감지 예제

```
function handleOffline(){
    console.log("Bye bye");
}

function handleOnline(){
    console.log("Welcome back");
}

window.addEventListener("online", handleOnline); # 인터넷 연결시

window.addEventListener("offline", handleOffline); # 인터넷 끊길시
```

### DOM if else part 2

Ex) 클릭을 하면 클래스의 이름을 변경하여 색상 변경

#### index.html

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Somthing</title>
        <link rel = "stylesheet" href="index.css">
    </head>
    <body>
        <h1 id="title" class="btn">This work!</h1>
        <script src="index.js"></script>
    </body>
</html>
```

#### index.css

```
body{
    background-color: wheat;    # 배경 색상
}

.btn{
    cursor: pointer;    # 커서에 포인터 주기
}

h1{
    color: white;
    transition : color .5s ease-in-out; # 컬러가 변경 될 때 효과
}

.clicked{
    color: blue;    # 클릭시 변경 색상
}
```

#### index.js

```
const CLICKED_CLASS = 'clicked';

function handleClick(event) {                   # 변경 될 부분
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }else{
        title.className = "";
    }
}                                               # 여기까지

function init(){
    title.addEventListener("click", handleClick);
}

init();
```

###### ※ 하지만 이 방법은 title의 클래스가 변경 될 때 원래 갖고 있던 클래스 또한 사라짐

#### index.js (function handleClick 변경)

```
function handleClick(event) {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
}
```

> 이렇게하면 기존에 갖고 있던 클래스를 삭제하지 않고 클래스를 추가 또는 삭제가 가능하다.

#### index.js (function handleClick 변경 final)

```
function handleClick(event) {
    title.classList.toggle(CLICKED_CLASS);
}
```

> 위에 과정을 다 이해했다면 function의 코드를 toggle이라는 함수로 한 줄로 요약 할 수 있다.

## #3 Make your first JS App

### 1. [querySelector()](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)

`Document.querySelector()`는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 `null`을 반환합니다.

### 2. [querySelectorAll()](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelectorAll)

Document 메소드 `querySelectorAll()` 는 지정된 셀렉터 그룹에 일치하는 다큐먼트의 엘리먼트 리스트를 나타내는 정적(살아 있지 않은) `NodeList` 를 반환합니다.

### 3. [event.preventDefault()](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault)
이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소합니다.

Ex) 뒤로가기, submit 등

#### 버블링

> 자식 element에서 발생된 event가 부모 element순으로 전달 되는 현상

#### 캡쳐링

> 부모 element에서 발생된 event가 자식 element순으로 전달 되는 현상

![](https://t1.daumcdn.net/cfile/tistory/9935C9425AE422C52C)

출처 : [이벤트 버블링(bubbling)과 캡처링(capturing)](https://mygumi.tistory.com/315)

### 4. [삼항 조건 연산자(conditional ternary operator)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

조건부 삼항 연산자(conditional ternary operator) 는 세 개의 피연산 함수를 취할 수 있는 유일한 자바스크립트 연산자이다. 이 연산자는 `if` 문의 축약형으로 빈번히 사용된다. 

```
condition ? expr1 : expr2 // 예시
```

### 5. [Web Storage](https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

#### Cookie
- 4KB의 저장 용량, 크기가 작다. 
- 같은 사이트내에서 둘 이상의 탭을 열었을 때, 둘 이상의 트랜젝션 추적에 어려움이 있다.
 
#### Web Storage
- 사양에 따르면 크기 제한이 없다.
- 서버로 보내지 않는다.(원하면 명시적으로 보낼 수 있다.)
- 유효기간이 거의 무한정하다.
- JavaScript 객체를 `String`의 형태로 저장할 수 있다.
- key-value 저장소이며 형태는 항상 문자열이다.
- Storage.getItem()과 Storage.setItem()으로 관리

#### sessionStorage와 localStorage

- `sessionStorage` : 페이지의 세션이 유지되는동안 사용할 수 있는 각 origin별로 별도의 스토리지를 관리합니다. (페이지 리로딩 및 복원을 포함한, 브라우저가 열려있는 한 최대한 긴 시간동안)

- `localStorage` : `sessionStorage`와 같은 일을 하지만, 브라우저가 닫히거나 다시 열리더라도 유지합니다.

Ex) LocalStorage 와 SessionStorage 유효 범위
![LocalStorage & SessionStorage](https://t1.daumcdn.net/cfile/tistory/1954194B4DD2759A23)

### 6. [filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

> 배열에서 특정 케이스만 필터링해 추출해서 새로운 배열로 만들고 싶을 때 매우 적합한 메서드이다. 메서드 수행 중 콜백에서 `true`를 리턴하는 경우 해당 배열 요소를 추출해서 새로운 배열에 추가하고, 메서드가 종료될 때 이렇게 추출된 배열 요소만으로 이루어진 새로운 배열을 리턴한다.

Ex) true 값만 cleanToDos에 담김
```
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
```

### 7. [fetch(Fetch API)](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)

#### XMLHttpRequest (XHR)

- 입력, 출력, 그리고 상태(state) 모두를 하나의 객체로 관리해야 했으며, 상태(state) 는 이벤트를 통해 추적해야 함
- Promise 기반 (그리고 generator 기반) 비동기 프로그래밍 방식과 그다지 잘 어울리지 않음

#### Fetch API

- HTTP 요청에 최적화 되어 있고 상태도 잘 추상화 되어 있음
- Promise를 기반으로 되어 있기때문에 상태에 따른 로직을 추가하고 처리하는데에 최적화 되어 있다.

출처 : [정말 멋진 Fetch API!](http://hacks.mozilla.or.kr/2015/05/this-api-is-so-fetching/)

### 8. CSS

#### 8 - 1. animation

`keyframes `을 통해 animation을 설정하고 원하는 곳에 해당 `keyframes`를 적용시킨다. 

- 예제 : [w3schools 예제](https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation1)
- 자료 : [w3schools](https://www.w3schools.com/css/css3_animations.asp)

#### 8 - 2. flex

flexbox 모델의 장점을 한 마디로 표현하면 **“복잡한 계산 없이 박스의 크기와 순서를 유연하게 배치할 수 있다.”** 라고 정리할 수 있습니다. 정렬, 방향, 순서, 사이즈 등을 유연하게 조절하기 때문에 별도의 분기 처리가 줄어들고, CSS만으로 다양한 레이아웃 구현이 가능합니다. 

출처 : [(번역) CSS flex box 3분만에 배우기](https://joshuajangblog.wordpress.com/2016/09/19/learn-css-flexbox-in-3mins/)  
출처 : [flexbox로 만들 수 있는 10가지 레이아웃](https://wit.nts-corp.com/2018/07/27/5274) 

#### 8 - 3. object-fit

사진의 크기를 지정할때 쓰는 CSS

출처 : [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

#### 8 - 4. CSS Unit

- `em` :  현재의 font-size를 정의합니다. 일례로, `body` 태그에 `em`값을 이용해 폰트 사이즈를 지정하면 모든 자식 요소들은 `body`의 폰트 사이즈에 영향을 받습니다.

- `rem` : "r"은 바로 "root(최상위)"를 뜻합니다. 최상위 태그(요소)에 지정한 것을 기준으로 삼으며, 보통 최상위 태그는 `html`태그입니다.

- `vh`, `vw` : `vh` 요소는 높이값의 100분의 1의 단위입니다. 예를 들어 브라우저 높이값이 900px일때 1vh는 9px이라는 뜻

- `vmin`, `vmax` : vmin과 vmax는 너비값과 높이값에따라 최대, 최소값을 지정할 수 있습니다.

- `ex` : ex 단위의 정의는 "현재 폰트의 x-높이값 또는 em의 절반 값"이라고 할 수 있습니다. x-높이값은 소문자 x의 높이값이기도 합니다.

- `ch` : 요소 font의 문자 "0", `width: 40ch`는 40개의 문자열을 포함하고 있다는 뜻입니다.

출처: [CSS Unit (CSS 7가지 단위)](https://webclub.tistory.com/356)

## CERTIFICATE OF GRADUATION

![](certificate-of-completion-for-javascript.png)

## This History

- 19년 2월 14일 #1 Theory, #2 Practice (Window 함수)까지 작성
- 19년 2월 15일 #2 Practice 마무리, #3 Make your first JS App 작성 중
- 19년 2월 18일 #3 Make your first JS App
- 19년 2월 19일 #Final 