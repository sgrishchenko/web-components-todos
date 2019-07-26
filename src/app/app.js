import '../todoCreator/todoCreator.js'
import '../todoList/todoList.js'

const appTemplate = document.createElement('template');
appTemplate.innerHTML = `
  <div style="width: 300px">
    <h3>Todos</h3>
    <x-todo-creator id="todo-creator"></x-todo-creator>
    <x-todo-list id="todo-list"></x-todo-list>
  </div>
`;

class App extends HTMLElement {
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
        const {name} = event.detail;

        const todoItem = document.createElement('x-todo-item');
        todoItem.innerHTML = name;
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

window.customElements.define('x-app', App);