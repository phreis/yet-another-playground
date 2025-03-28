import { Component } from '../component.js';
import css from './counter.css';

class Counter extends Component {
  constructor() {
    super();
    this.counterState = 0;
  }

  html() {
    return `
    <button class='button'>click here! </button>
    <div class='counter-value'>0</div>
  `;
  }

  css() {
    return css;
  }
  run() {
    const btn1 = this.componentHTML.querySelector('.button');
    btn1.addEventListener('click', () => {
      this.componentHTML.querySelector(`.counter-value`).innerHTML = ++this
        .counterState;
    });
  }
}

export { Counter };
