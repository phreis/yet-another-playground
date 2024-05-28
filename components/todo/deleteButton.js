import { Component } from "../../component";


class DeleteButton extends Component {

  constructor() {
    super();
    this.caption = '';
  }

  html() {
    return `
    <form class='todo-form' >
        <input name='todo' class='todo-input'></input>
        <input type='submit' value='Add ToDo'></input>
    </form>
    <ul class='todo-list'>


    </ul>
    `;
  }

  js(componentDom) {

  }

}
