import { Component } from "../component.js";

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

  js(componentDom) {
    const btn1 = componentDom.querySelector('.button')
    btn1.addEventListener('click', () => { componentDom.querySelector(`.counter-value`).innerHTML = ++this.counterState });

  }
}

export { Counter };
