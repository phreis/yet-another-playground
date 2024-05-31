import { Component } from "../component.js";
import { Counter } from "./counter.js";

class CounterContainer extends Component {

  constructor() {
    super();
  }


  html() {
    return `
    <div class='counter-container'>${this.props.caption ? this.props.caption : ''}</div>
  `;
  }

  run() {


    const container = this.componentHTML.querySelector('.counter-container')
    for (let i = 1; i <= 5; i++) { Counter.insertInto(container); }

  }



}



export { CounterContainer };
