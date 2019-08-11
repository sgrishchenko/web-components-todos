import '../todoCreator/todoCreator.element.js'
import '../todoList/todoList.element.js'
import {appTemplate} from './app.template.js';

class AppElement extends HTMLElement {
    #currentId = 1;
    #todoCreator;
    #todoList;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(
            appTemplate.content.cloneNode(true)
        );

        this.#todoCreator = this.shadowRoot.getElementById('todo-creator');
        this.#todoList = this.shadowRoot.getElementById('todo-list');

        this.#todoCreator.addEventListener('addTodo', this.#addTodo);
    }

    #generateId = () => {
        return `todo-item-${this.#currentId++}`
    };

    #addTodo = event => {
        const id = this.#generateId();
        const {title} = event.detail;

        const todoItem = document.createElement('x-todo-item');
        todoItem.innerHTML = title;
        todoItem.setAttribute('id', id);

        this.#todoList.appendChild(todoItem);

        todoItem.addEventListener('remove', () => this.#removeTodo(id))
    };

    #removeTodo = id => {
        this.#todoList.removeChild(
            this.shadowRoot.getElementById(id)
        )
    }
}

window.customElements.define('x-app', AppElement);