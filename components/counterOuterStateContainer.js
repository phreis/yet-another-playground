import { Component } from '../component.js';
import { CounterOuterState } from './counterOuterState.js';

class CounterOuterStateContainer extends Component {
  //static counterSum = 0;
  constructor() {
    super();
    this.counterSum = 0;
    this.counter1 = new CounterOuterState();
    this.counter2 = new CounterOuterState();
  }

  html() {
    return `
    <div class='counter-container-outer-state'>${
      this.props.caption ? this.props.caption : ''
    }
    <div class='counter-sum'></div>
    <button class='button-reset'>Reset all children</button>
    </div>


  `;
  }

  run() {
    const updateSum = function (newCounterValue) {
      this.componentHTML.querySelector(`.counter-sum`).innerHTML =
        this.counterSum += 1;
    }.bind(this);

    const container = this.componentHTML.querySelector(
      '.counter-container-outer-state',
    );

    this.counter1.insertInto(container, {
      caption: 'I am a child counter (1)',
      counterState: 0,
      onIncrementCounter: updateSum,
    });
    this.counter2.insertInto(container, {
      caption: 'I am a child counter (2)',
      counterState: 0,
      onIncrementCounter: updateSum,
    });
    const resetButton = this.componentHTML.querySelector('.button-reset');
    resetButton.addEventListener('click', () => {
      this.counter1.setCounterState(0);
      this.counter2.setCounterState(0);
      this.componentHTML.querySelector(`.counter-sum`).innerHTML =
        this.counterSum = 0;
    });
  }
}

export { CounterOuterStateContainer };
