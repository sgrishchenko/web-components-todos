export const todoCreatorTemplate = document.createElement('template');

todoCreatorTemplate.innerHTML = `
  <style>
    :host {
      display: flex;
    }
    
    #title-input {
      flex: 3;
      padding: 10px;
      font-size: 16px;
    }
    #add-button {
      flex: 1;
      color: #505050;
      font-size: 16px;
    }
  </style>
  
  <input id="title-input" placeholder="Title..."/>
  <button id="add-button" type="button">Add</button>
`;
