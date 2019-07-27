export const todoListTemplate = document.createElement('template');

todoListTemplate.innerHTML = `
  <style>
    ::slotted(x-todo-item:not(:hover):not([completed]):nth-child(2n)) {
      background-color: #e0e0e0;
    }
    
    ::slotted(x-todo-item:not(:hover):not([completed]):nth-child(2n + 1)) {
      background-color: #f9f9f9;
    }
  </style>
  <slot></slot>
`;