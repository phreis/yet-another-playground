
/** Generic Component
 * @abstract
*/
class Component {
  props = {};
  componentHTML;
  constructor() {
    this.id = Date.now().toString(36) + Math.random().toString(36).substring(2);


  }

  /** Contains (and retruns the HTML wich goes togehter with the component)
   * @abstract
   * @returns {String} HTML
   */
  html() {
    return '<p>To be implemented in concrete component'
  }

  /** Contains the JavaScript code which goes together with the component
   * @abstract to be implemented in concrete component
   */
  run() { }

  /**
   * Instantiates the concrete component and
   * injects it into the passed target
   * @param {Element} target Parent element of the component
   * @param {Object} [props] Components properties
   */
  static insertInto(target, props = {}) {

    const cmpInstance = new this()

    cmpInstance.props = props;

    //Instead of .innerHTML, use .insertAdjacentHTML to preserve event listeners
    target.insertAdjacentHTML('beforeend', cmpInstance.#wrapInDiv(cmpInstance));

    //excecutes the js defined in the concrete component ()
    //the componets DOM HTML is passed as parameter, so js can operate on it

    const _cmpDom = document.querySelector(`#${cmpInstance.id}`)
    if (_cmpDom) {
      cmpInstance.componentHTML = _cmpDom;
      cmpInstance.run();
    }

  }


  /**
   *
   * @param {Component} cmpInstance Component instance
   * @returns {String}
   */
  #wrapInDiv(cmpInstance) {
    return `<div id='${cmpInstance.id}'>${cmpInstance.html()}</div>`;
  }

}

export { Component }
