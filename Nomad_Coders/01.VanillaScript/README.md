# VanillaScript

## #1 Theory

### Variable (변수)

Javascript에는 **3가지의 변수**가 있다.
var는 ECMAscript6 이전의 변수이고 최근에는 let과 const를 많이 쓴다.
변경 가능한 변수는 **let**, 고정형 상수 변수는 **const**를 권장한다.

```
var     # 변수 값 변경 O / funtion단위의 scope
let     # 변수 값 변경 O / {}단위의 scope
const   # 변수 값 변경 X / {}단위의 scope
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
function hanleClick(event){
    console.log("나와랏!")
}

window.addEventListener("click", hanleClick)
```

click을 할 때 감지해서 hanleClick를 실행하는 문법이다.

**※ 주의 : hanleResize와 hanleResize()는 다르다. ()가 있다면 아마 페이지가 구성 될 때 이미 첫 실행이 되고 ()이 없다면 click을 감지하는 순간 첫 실행이 된다.**

Ex) 웹 화면을 클릭시 title의 색상이 파란색이면 true 하얀색이면 false
```
function hanleClick(event){

    if(title.style.color === "blue"){
        title.style.color = "white"     # 하얀색
    }else{
        title.style.color = "blue"      # 파란색
    }
}

window.addEventListener("click", hanleClick)
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