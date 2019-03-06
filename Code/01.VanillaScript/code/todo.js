const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
const TODOS_BTN_BG_COLOR = 'toDosBtnBgColor';

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.classList.add("fas");
    delBtn.classList.add("fa-minus");
    delBtn.addEventListener("click", deleteToDo);
    delBtn.classList.add(TODOS_BTN_BG_COLOR);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    li.id = newId;
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function trim(trimWord) {
    return trimWord.replace(/(^\s*)|(\s*$)/gi, "");
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    if (trim(currentValue) !== "") {
        paintToDo(currentValue);
        toDoInput.value = "";
    }
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(something);
    }
}

function something(toDo) {
    paintToDo(toDo.text);
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();