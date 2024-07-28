
import { CounterWc } from "./counterWc";
// web component
class CounterWcContainer extends HTMLElement {

  constructor() {
    super();
    this.counterstate = 0;

  }

  // component attributes
  static get observedAttributes() {
    return ['counterstate'];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    console.log(`Container Attribute ${property} has changed.`);
    if (oldValue === newValue) return;
    this[property] = newValue;

  }

  // connect component
  connectedCallback() {

    const shadow = this.attachShadow({ mode: 'closed' });
    const props = 'propsValue'
    shadow.innerHTML = /*html*/`
    <div>
    <counter-wc counterstate="1" props=${props}></counter-wc>
    <counter-wc counterstate="2"></counter-wc>
    </div>`;


  }


}



export { CounterWcContainer }