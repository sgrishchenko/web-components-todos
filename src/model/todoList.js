export class TodoList extends EventTarget {
    #todoItems = [];

    get todoItems() {
        return Object.freeze(this.#todoItems)
    }

    addTodoItem(todoItem) {
        this.#todoItems.push(todoItem);
        new CustomEvent('todoItemAdded', {
            detail: {todoItem}
        })
    }

    removeTodoItem(todoItem) {
        const index = this.#todoItems.indexOf(todoItem);
        this.#todoItems.splice(index, 1);
        new CustomEvent('todoItemRemoved', {
            detail: {todoItem}
        })
    }
}