"use strict";
(() => {
  // component.js
  var Component = class {
    constructor() {
      this.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
    /** Contains (and retruns the HTML wich goes togehter with the component)
     * @abstract
     * @returns {String} HTML
     */
    html() {
      return "<p>To be implemented in concrete component";
    }
    /** Contains the JavaScript code which goes together with the component
     * @abstract to be implemented in concrete component
     * @param {Element} componentHTML  a concrete component instance
     */
    js(componentHTML) {
    }
    /**
     * Instantiates the concrete component and
     * injects it into the passed parent
     * @param {Element} parent Parent element of the component
     */
    static insertInto(parent) {
      const cmpInstance = new this();
      parent.insertAdjacentHTML("beforeend", this.wrapInDiv(cmpInstance));
      const _js = document.querySelector(`#${cmpInstance.id}`);
      _js && cmpInstance.js(_js);
    }
    /**
     *
     * @param {Component} cmpInstance Component instance
     * @returns {String}
     */
    static wrapInDiv(cmpInstance) {
      return `<div id='${cmpInstance.id}'>${cmpInstance.html()}</div>`;
    }
  };

  // components/counter.js
  var Counter = class extends Component {
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
      console.log("ID: ", this.id);
      const btn1 = componentDom.querySelector(".button");
      btn1.addEventListener("click", () => {
        componentDom.querySelector(`.counter-value`).innerHTML = ++this.counterState;
      });
    }
  };

  // main.js
  var mainContent = document.querySelector(".main-content");
  mainContent && Counter.insertInto(mainContent);
  mainContent && Counter.insertInto(mainContent);
})();
