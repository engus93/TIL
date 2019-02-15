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

### Date, setInterval 함수

Ex) RealTime 예제

#### index.html

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Somthing</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <div class="js-clock">
        <h1>00:00:00</h1>
    </div>
    <script src="clock.js"></script>
</body>

</html>
```

#### index.css

```
body{
    background-color: wheat;
}

h1{
    color: white;
    transition : color .5s ease-in-out;
}
```

#### clock.js

```
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();      # 시간 가져오기
    const minutes = date.getMinutes();  # 분 가져오기
    const seconds = date.getSeconds();  # 초 가져오기
    clockTitle.innerHTML = 
    `${
        hours < 10 ? `0${hours}` : hours
    }:${
        hours < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function init(){
    getTime();
    setInterval(getTime, 1000); # 1초마다 getTime 실행
}

init();
```

### This History

- 19년 2월 14일 #1 Theory, #2 Practice (Window 함수)까지 작성
- 19년 2월 15일 #2 Practice 마무리, #3 Make your first JS App 작성 중
- 