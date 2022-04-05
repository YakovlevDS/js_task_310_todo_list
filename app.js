//selecting dom elements for manipulation
let input = document.querySelector("input[type = 'text']");
let ul = document.querySelector("ul");
let container = document.querySelector("div");
let lists = document.querySelectorAll("li");
let spans = document.getElementsByTagName("span");
let pencil = document.querySelector("#pencil");
let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");
let tipsBtn = document.querySelector(".tipBtn");
let closeBtn = document.querySelector(".closeBtn");
let overlay = document.getElementById("overlay")

deleteTodo = () => {
    for (let span of spans) {
        span.addEventListener("click", e => {
            span.parentElement.remove();
            e.stopPropagation();
        })
    }
}
loadTodo = () => {
    if (localStorage.getItem('todoList')) {
        ul.innerHTML = localStorage.getItem('todoList');
        deleteTodo();
    }
}
saveTodo = () => localStorage.setItem('todoList', ul.innerHTML)


clearTodo = e => {
    ul.innerHTML = "";
    localStorage.removeItem('todoList', ul.innerHTML);
}
closeTips = () => overlay.style.height = "0";

showInputField = () => input.classList.toggle('display');

showTips = () => overlay.style.height = "100%";

checkTodo = e =>
    e.target.tagName === 'LI' ?
    e.target.classList.toggle('checked') : null


// addTodo 

input.addEventListener("keypress", function(keyPressed) {
    console.log(keyPressed);
    console.log(this);

    if (keyPressed.which === 13) {
        let li = document.createElement("li");
        let spanElement = document.createElement("span");
        let icon = document.createElement("i");
        let newTodo = this.value;
        this.value = " ";

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);

        deleteTodo();

    }

});








ul.addEventListener('click', (e) => checkTodo(e));

pencil.addEventListener('click', showInputField);

saveBtn.addEventListener('click', saveTodo);

clearBtn.addEventListener('click', e => clearTodo(e));

tipsBtn.addEventListener('click', showTips);

closeBtn.addEventListener('click', e => closeTips(e));

deleteTodo();
loadTodo();