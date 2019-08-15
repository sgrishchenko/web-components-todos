import {todoItemTemplate} from './todoItem.template.js'

class TodoItemElement extends HTMLElement {
    #completedCheckbox;
    #removeButton;

    get completed() {
        return this.hasAttribute('completed');
    }

    set completed(value) {
        if (value) {
            this.setAttribute('completed', '');
        } else {
            this.removeAttribute('completed');
        }
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(
            todoItemTemplate.content.cloneNode(true)
        );

        this.#completedCheckbox = this.shadowRoot.getElementById('completed-checkbox');
        this.#removeButton = this.shadowRoot.getElementById('remove-button');

        this.#completedCheckbox.addEventListener('change', this.#onCompletedCheckboxChange);
        this.#removeButton.addEventListener('click', this.#onRemoveButtonClick);
    }

    #onCompletedCheckboxChange = () => {
        this.completed = this.#completedCheckbox.checked;
    };

    #onRemoveButtonClick = () => {
        const event = new Event('remove');
        this.dispatchEvent(event);
    };
}

window.customElements.define('x-todo-item', TodoItemElement);