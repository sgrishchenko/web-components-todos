export const todoListTemplate = document.createElement('template');

todoListTemplate.innerHTML = `
  <style>
    ::slotted(x-todo-item:not(:hover):not([completed]):nth-of-type(even)) {
      background-color: #e0e0e0;
    }
    
    ::slotted(x-todo-item:not(:hover):not([completed]):nth-of-type(odd)) {
      background-color: #f9f9f9;
    }
  </style>
  <slot></slot>
`;