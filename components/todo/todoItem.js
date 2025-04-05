import { Component } from '../../component.js';
// @ts-ignore
import html from './todoItem.html';
// @ts-ignore
//import css from './todo.css';

class ToDoItem extends Component {
  //toDos = [];
  constructor() {
    super();
  }
  css() {
    return '';
  }

  html() {
    return html;
  }

  run() {
    const li = this.componentHTML.querySelector('.todo-item');

    const deleteButton = this.componentHTML.querySelector('.todo-delete');
    deleteButton.addEventListener('click', (event) => {
      this.props.onDelete(this);
      this.componentHTML.remove();
    });

    const textInput = this.componentHTML.querySelector('.todo-item-text');
    textInput.value = this.props.text;
    this.props.toDoList.appendChild(this.componentHTML);

    textInput.addEventListener('input', (event) => {
      this.props.text = textInput.value;
    });
  }
}

export { ToDoItem };
