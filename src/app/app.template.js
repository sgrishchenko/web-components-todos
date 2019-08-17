export const appTemplate = document.createElement('template');

appTemplate.innerHTML = `
  <style>
    :host {
      display: block;
      max-width: 720px;
      margin: auto;
    }
    
    #header-block {
      background-color: seagreen;
      padding: 30px 40px;
    }
    
    #header {
      text-align: center;
      margin: 5px;
      color: #ffffff;
    }
  </style>
  
  <div id="header-block">
    <h2 id="header">To Do List</h2>
    <x-todo-creator id="todo-creator"></x-todo-creator>
  </div>
  <x-todo-list id="todo-list"></x-todo-list>
`;
