
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
    return '<p>To be implemented in concrete component</p>'
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

    const div = document.createElement('span')
    /*set an unique id on the components HTML*/
    //div.setAttribute('id', cmpInstance.id);
    div.innerHTML = cmpInstance.html();

    //Instead of .innerHTML, use .insertAdjacentHTML to preserve event listeners
    cmpInstance.componentHTML = target.insertAdjacentElement('beforeend', div);

    //excecutes the js defined in the concrete component ()
    cmpInstance.run();




  }

}

export { Component }
