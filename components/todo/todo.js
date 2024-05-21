import { Component } from "../../component.js";
// @ts-ignore
import html from './todo.html'

class ToDoApp extends Component {

  constructor() {
    super();
    this.toDos = []

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

  js(componentDom) {

    const form = componentDom.querySelector('.todo-form')
    form.addEventListener('submit', (event) => {
      const input = componentDom.querySelector('.todo-input').value
      const li = document.createElement("li");
      const t = document.createTextNode(input);
      li.appendChild(t);
      const toDoList = componentDom.querySelector('.todo-list');
      toDoList.appendChild(li)

      this.toDos.push(input)
      console.log(new FormData(event.target).getAll('todo'))

      event.preventDefault();
    })



  }
}

export { ToDoApp };
