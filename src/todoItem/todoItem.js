const todoItemTemplate = document.createElement('template');
todoItemTemplate.innerHTML = `
  <div style="display: flex">
    <div>
      <input type="checkbox"/>
    </div>
    <div style="flex-grow: 1">
      <slot></slot>
    </div>
    <button id="remove-button" type="button">
      <span role="img" aria-label="Remove">
        ❌
      </span>
    </button>
  </div>
`;

class TodoItem extends HTMLElement {
    #removeButton;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(
            todoItemTemplate.content.cloneNode(true)
        );

        this.#removeButton = this.shadowRoot.getElementById('remove-button');

        this.#removeButton.addEventListener('click', this.#onRemoveButtonClick)
    }

    #onRemoveButtonClick = () => {
        const event = new Event('remove');
        this.dispatchEvent(event);
    }
}

window.customElements.define('x-todo-item', TodoItem);