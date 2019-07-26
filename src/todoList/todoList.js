import '../todoItem/todoItem.js'

const todoListTemplate = document.createElement('template');
todoListTemplate.innerHTML = `
  <slot></slot>
`;


class TodoList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(
            todoListTemplate.content.cloneNode(true)
        );
    }
}

window.customElements.define('x-todo-list', TodoList);