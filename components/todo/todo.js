import { Component } from '../../component.js';
// @ts-ignore
import html from './todo.html';

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

    /*delete Button */
    const deleteButton = document.createElement('button');
    const deleteButtonText = document.createTextNode('X');
    deleteButton.appendChild(deleteButtonText);
    deleteButton.addEventListener('click', (event) => {
      const itemToBeDeleted = deleteButton.closest('li');
      itemToBeDeleted?.remove();
    })

    /*List Element */
    const li = document.createElement('li');
    const t = document.createTextNode(text);
    li.appendChild(t);
    li.appendChild(deleteButton);

    /*attach List Element to List */
    const toDoList = this.componentHTML.querySelector('.todo-list');
    toDoList.appendChild(li);



    this.toDos.push(text);
  }

  run() {
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
