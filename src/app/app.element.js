import '../todoCreator/todoCreator.element.js'
import '../todoList/todoList.element.js'
import '../todoItem/todoItem.element.js'
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

        this.#todoCreator.addEventListener('addTodo', this.#onAddTodo);
    }

    #generateId = () => {
        return `todo-item-${this.#currentId++}`;
    };

    #onAddTodo = event => {
        const id = this.#generateId();
        const {title} = event.detail;

        const todoItem = document.createElement('x-todo-item');
        todoItem.innerHTML = title;
        todoItem.setAttribute('id', id);

        this.#todoList.appendChild(todoItem);

        todoItem.addEventListener('remove', () => this.#onRemoveTodo(id))
    };

    #onRemoveTodo = id => {
        const todoItem = this.shadowRoot.getElementById(id);
        this.#todoList.removeChild(todoItem)
    }
}

window.customElements.define('x-app', AppElement);