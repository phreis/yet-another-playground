import { Component } from '../../component.js';
// @ts-ignore
import html from './todo.html';
import { DeleteButton } from './deleteButton.js';

class ToDoApp extends Component {
  //toDos = [];
  constructor() {
    super();
    this.toDos = [];

  }

  html() {
    /*     return `
    <form class='todo-form' >
        <input name='todo' class='todo-input'></input>
        <input type='submit' value='Add ToDo'></input>
    </form>
    <ul class='todo-list'>


    </ul>
    `; */
    return html;
  }

  addToDo(text) {

    if (this.toDos.includes(text)) {
      throw 'toDo already exists'
    }

    /*List Element */
    const li = document.createElement('li');
    const t = document.createTextNode(text);
    li.appendChild(t);

    /*Delete Button on each li */
    DeleteButton.insertInto(li)

    /*attach List Element to List */
    const toDoList = this.componentHTML.querySelector('.todo-list');
    toDoList.appendChild(li);



    this.toDos.push(text);
  }

  run() {
    /*     window.addEventListener('hashchange', (ev) => {
          console.log('hashChange: ', ev)
          console.log('location: ', location.hash)
        }) */
    const form = this.componentHTML.querySelector('.todo-form');
    form.addEventListener('submit', (event) => {

      event.preventDefault();

      const input = this.componentHTML.querySelector('input[name="todo"]');
      try {
        this.addToDo(input.value);
      } catch (err) {
        alert(err);
      }

      input.value = '';
    });
  }
}

export { ToDoApp };
