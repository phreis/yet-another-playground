import { Component } from "../component.js";
import { CounterOuterState } from "./counterOuterState.js";

class CounterOuterStateContainer extends Component {

  //static counterSum = 0;
  constructor() {
    super();
    this.counterSum = 0;
  }



  html() {
    return `
    <div class='counter-container-outer-state'>${this.props.caption ? this.props.caption : ''}
    <div class='counter-sum'></div>
    </div>


  `;
  }



  js(componentDom) {

    const updateSum = function (newCounterValue) {


      componentDom.querySelector(`.counter-sum`).innerHTML = this.counterSum += 1;
    }.bind(this)

    const container = componentDom.querySelector('.counter-container-outer-state')
    CounterOuterState.insertInto(container, { caption: 'I am a child counter (1)', counterState: 0, onIncrementCounter: updateSum });
    CounterOuterState.insertInto(container, { caption: 'I am a child counter (2)', counterState: 0, onIncrementCounter: updateSum });

  }



}



export { CounterOuterStateContainer };
