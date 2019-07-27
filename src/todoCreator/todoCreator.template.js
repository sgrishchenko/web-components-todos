export const todoCreatorTemplate = document.createElement('template');

todoCreatorTemplate.innerHTML = `
  <style>
    :host {
      display: flex;
    }
    
    #title-input {
      flex-basis: 75%;
      padding: 10px;
      font-size: 16px;
    }
    #add-button {
      flex-basis: 35%;
      color: #505050;
      font-size: 16px;
    }
  </style>
  
  <input id="title-input" placeholder="Title..."/>
  <button id="add-button" type="button">Add</button>
`;