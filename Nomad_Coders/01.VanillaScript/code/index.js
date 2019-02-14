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

function sayHello(name, age){
    console.log("Hello!", name, " you have ", age, " years of age.");
}

sayHello("Nicolas", 15);

function sayHello(name, age){
    console.log(`Hello! ${name} you have ${age} years of age.`);
}

const title = document.querySelector("#title");

title.innerHTML = "ㅋㅋㅋㅋ";

function hanleClick(event){

    if(title.style.color === "blue"){
        title.style.color = "white"
    }else{
        title.style.color = "blue"
    }
}

window.addEventListener("click", hanleClick)

const age = prompt("How old are you");

if(age > 18){
    console.log("you can drink!")
}else{
    console.log("you can not drink!")
}