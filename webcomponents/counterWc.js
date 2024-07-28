
// web component
class CounterWc extends HTMLElement {

  constructor() {
    super();
    this.counterstate = 0;
    this.props = '';

  }

  // component attributes
  static get observedAttributes() {
    return ['counterstate','props'];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    console.log(`Attribute ${property} has changed.`);
    if (oldValue === newValue) return;
    this[property] = newValue;

  }

  // connect component
  connectedCallback() {
    console.log('connectedCallback() props:', this.props)
    const shadow = this.attachShadow({ mode: 'closed' });

    shadow.innerHTML = /*html*/`
        <button class='button'>click here! </button>
        <div class='counter-value'>${this.counterstate}</div>`;

    const btn1 = shadow.querySelector('.button')
    btn1.addEventListener('click', () => {
      shadow.querySelector(`.counter-value`).innerHTML = ++this.counterstate
    });
  }


}



export { CounterWc }