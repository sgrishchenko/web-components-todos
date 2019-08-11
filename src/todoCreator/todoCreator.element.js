import {todoCreatorTemplate} from './todoCreator.template.js';

class TodoCreatorElement extends HTMLElement {
    #titleInput;
    #addButton;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(
            todoCreatorTemplate.content.cloneNode(true)
        );

        this.#titleInput = this.shadowRoot.getElementById('title-input');
        this.#addButton = this.shadowRoot.getElementById('add-button');

        this.#addButton.addEventListener('click', this.#onNameButtonClick)
    }

    #onNameButtonClick = () => {
        const title = this.#titleInput.value.trim();

        if (title) {
            const detail = {title};
            const event = new CustomEvent('addTodo', {detail});
            this.dispatchEvent(event);
            this.#titleInput.value = '';
        }
    }
}

window.customElements.define('x-todo-creator', TodoCreatorElement);