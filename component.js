class Component {
  constructor() {
    this.id = Date.now().toString(36) + Math.random().toString(36).substring(2);

  }
  static insertInto(target) {
    const cmpInstance = new this()
    //target.innerHTML += cmpInstance.html;
    /*Instead of .innerHTML, use .insertAdjacentHTML to preserve event listeners  */
    target.insertAdjacentHTML('beforeend', this.wrapInDiv(cmpInstance));

    cmpInstance.js(document.querySelector(`#${cmpInstance.id}`));
  }



  static wrapInDiv(inst) {
    return `<div id='${inst.id}'>${inst.html}</div>`;
  }

}

export { Component }
