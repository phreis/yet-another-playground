import { Component } from '../../component.js';
// @ts-ignore
import html from './todo.html';
// @ts-ignore
import css from './todo.css';

import { ToDoItem } from './todoItem.js';

import Dexie from 'dexie';

class ToDoApp extends Component {
  constructor() {
    super();

    this.toDoItems = [];
  }
  css() {
    return css;
  }

  html() {
    return html;
  }

  addToDo(text) {
    if (this.toDoItems.find((item) => item.props.text === text)) {
      throw `toDo ${text} already exists`;
    }
    const newItem = new ToDoItem();
    newItem.insertInto(this.componentHTML.querySelector('.todo-list'), {
      toDoList: this.componentHTML.querySelector('.todo-list'),
      text: text,
      onDelete: (itemToBeDeleted) => {
        this.toDoItems = this.toDoItems.filter((itm) => itm != itemToBeDeleted);
      },
    });

    this.toDoItems.push(newItem);
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
    const saveButton = this.componentHTML.querySelector('.todo-save');
    saveButton.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('toDos to save:', this.toDoItems);
      const toDos = this.toDoItems.map((item) => item.props.text);
      console.log('toDos:', toDos);
      // Save to IndexedDB
      const db = new Dexie('ToDoDB');
      db.version(1).stores({ todos: '++id,text' });
      db.todos = db.table('todos');
      db.todos
        .bulkPut(toDos.map((text) => ({ text })))
        .then(() => {
          console.log('Todos saved to IndexedDB');
        })
        .catch((err) => {
          console.error('Failed to save todos to IndexedDB:', err);
        });
      // Save to server
      // fetch('/api/todos', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(toDos),
      // })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log('Todos saved to server:', data);
      //     })
      //     .catch((err) => {
      //       console.error('Failed to save todos to server:', err);
      //     });
    });
    const loadButton = this.componentHTML.querySelector('.todo-load');
    loadButton.addEventListener('click', (event) => {
      const newtoDos = ['todo1', 'todo2', 'todo3'];
      newtoDos.forEach((item) => {
        try {
          this.addToDo(item);
        } catch (err) {
          console.warn(err);
        }
      });
    });
  }
}

export { ToDoApp };
