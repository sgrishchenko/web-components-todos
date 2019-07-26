const todoCreatorTemplate = document.createElement('template');
todoCreatorTemplate.innerHTML = `
  <div style="display: flex">
    <div style="flex-grow: 1">
      <input id="name-input" placeholder="Enter new Todo name..."/>
    </div>
    <button id="add-button" type="button">Add</button>
  </div>
`;


class TodoCreator extends HTMLElement {
    #nameInput;
    #nameButton;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(
            todoCreatorTemplate.content.cloneNode(true)
        );

        this.#nameInput = this.shadowRoot.getElementById('name-input');
        this.#nameButton = this.shadowRoot.getElementById('add-button');

        this.#nameButton.addEventListener('click', this.#onNameButtonClick)
    }

    #onNameButtonClick = () => {
        const name = this.#nameInput.value.trim();

        if (name) {
            const detail = {name};
            const event = new CustomEvent('addTodo', {detail});
            this.dispatchEvent(event);
            this.#nameInput.value = '';
        }
    }
}

window.customElements.define('x-todo-creator', TodoCreator);