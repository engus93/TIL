const duduInfo = {
    name: "Dudu",
    age: 30,
    gender: "Male",
    isHandsome: true,
    favMovies: ["극한직업", "뺑반", "드래곤 길들이기 3"],
    favFood: [
        {
            name: "불고기",
            fatty: true
        },
        {
            name: "샐러드",
            fatty: false
        }
    ]
}

console.log(duduInfo);

function sayHello(name, age) {
    console.log("Hello!", name, " you have ", age, " years of age.");
}

sayHello("Nicolas", 15);

function sayHello(name, age) {
    console.log(`Hello! ${name} you have ${age} years of age.`);
}

const title = document.querySelector("#title");

title.innerHTML = "ㅋㅋㅋㅋ";

//클릭해서 색상 바꾸기

// const BASE_COLOR = "rgb(127, 140, 141)";
// const OTHER_COLOR = "blue";

// function handleClick(event) {
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
// }

// init();

//얼터창 띄워서 입력 받기

// const age = prompt("How old are you");

// if(age > 18){
//     console.log("you can drink!")
// }else{
//     console.log("you can not drink!")
// }

// 인터넷 연결 & 끊김 감지

// function handleOffline(){
//     console.log("Bye bye");
// }

// function handleOnline(){
//     console.log("Welcome back");
// }

// // 인터넷 연결시
// window.addEventListener("online", handleOnline);

// // 인터넷 끊길시
// window.addEventListener("offline", handleOffline);

const CLICKED_CLASS = 'clicked';

function handleClick(event) {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // }else{
    //     title.classList.remove(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();