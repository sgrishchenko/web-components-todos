import './app/app.js'
import {TodoList} from "./model/todoList";
import {context} from "./context";

const todoList = new TodoList();
context.todoList = todoList;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    root.innerHTML = `
        <x-app></x-app>
    `;
});

