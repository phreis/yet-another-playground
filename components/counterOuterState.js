import { Component } from "../component.js";

class CounterOuterState extends Component {

  constructor() {
    super();
    this.counterState = 0;

  }


  html() {
    return `
    ${this.props.caption ? this.props.caption : ''}
    <button class='button'>click here! </button>
    <div class='counter-value'>0</div>
  `;
  }

  js(componentDom) {
    const btn1 = componentDom.querySelector('.button');
    componentDom.querySelector(`.counter-value`).innerHTML = this.props.counterState;

    btn1.addEventListener('click', () => {
      ++this.counterState;
      this.props.onIncrementCounter(this.counterState)
      componentDom.querySelector(`.counter-value`).innerHTML = this.counterState
    });

  }
}

export { CounterOuterState };
