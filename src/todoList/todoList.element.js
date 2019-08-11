import {todoListTemplate} from './todoList.template.js'

class TodoListElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(
            todoListTemplate.content.cloneNode(true)
        );
    }
}

window.customElements.define('x-todo-list', TodoListElement);