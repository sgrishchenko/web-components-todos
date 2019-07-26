export class TodoItem extends EventTarget {
    #id;
    #title;
    #completed = false;

    constructor(id, title) {
        super();

        this.#id = id;
        this.#title = title;
    }

    get id() {
        return this.#id
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
        this.dispatchEvent(new Event('titleChanged'));
    }

    get completed() {
        return this.#completed;
    }

    set completed(value) {
        this.#completed = value;
        this.dispatchEvent(new Event('completedChanged'));
    }
}