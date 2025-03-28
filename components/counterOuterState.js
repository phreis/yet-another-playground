import { Component } from '../component.js';

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

  run() {
    const btn1 = this.componentHTML.querySelector('.button');
    this.componentHTML.querySelector(`.counter-value`).innerHTML =
      this.props.counterState;

    btn1.addEventListener('click', () => {
      ++this.counterState;
      this.setCounterState(this.counterState);
    });
  }

  setCounterState(state) {
    this.counterState = state;
    this.counterState && this.props.onIncrementCounter(this.counterState);
    this.componentHTML.querySelector(`.counter-value`).innerHTML =
      this.counterState;
  }
}

export { CounterOuterState };
