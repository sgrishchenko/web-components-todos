export const todoItemTemplate = document.createElement('template');

todoItemTemplate.innerHTML = `
  <style>
    :host {
      display: flex;
      align-items: center;
    }
    
    :host(:hover) {
      background-color: #d0d0d0;
    }
    
    :host([completed]) {
      background-color: #808080;
    }
    
    #completed-checkbox {
      margin: 12px 16px;
      width: 18px;
      height: 18px;
    }
    
    #title {
      flex-grow: 1;
      padding: 12px 8px;
      font-size: 18px;
    }
    
    :host([completed]) #title {
      color: #ffffff;
      text-decoration: line-through;
    }
    
    #remove-button {
      padding: 12px 16px;
      font-size: 18px;
      background: transparent;
      border: none;
      color: black;
    }
    
    #remove-button:hover {
      background-color: coral;
    }
  </style>
  
  <input id="completed-checkbox" type="checkbox"/>

  <label id="title" for="completed-checkbox">
    <slot></slot>
  </label>

  <button id="remove-button" type="button">
    <span role="img" aria-label="Remove">
      ❌
    </span>
  </button>
`;