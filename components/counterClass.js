import { Component } from "../component.js";

class CounterClass extends Component {

  constructor() {
    super();
    this.counterState = 0;
  }


  get html() {
    return `
    <button class='button'>click here! </button>
    <div class='counter-value'>0</div>
  `;
  }

  js(componentDom) {
    console.log('ID: ', this.id)

    const btn1 = componentDom.querySelector('.button')
    btn1.addEventListener('click', () => { componentDom.querySelector(`.counter-value`).innerHTML = ++this.counterState });

  }



}



export { CounterClass };
