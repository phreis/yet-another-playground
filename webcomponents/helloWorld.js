// web component
class HelloWorld extends HTMLElement {
  
    constructor() {
      super();
      this.name = 'World';
    }
    
    // component attributes
    static get observedAttributes() {
      return ['name'];
    }
    
    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {
      console.log(`Attribute ${property} has changed.`);
      if (oldValue === newValue) return;
      this[ property ] = newValue;
      
    }
    
    // connect component
    connectedCallback() {
      
      const shadow = this.attachShadow({ mode: 'closed' });
      

        
        shadow.innerHTML = /*html*/`
        <style>
          p {
            text-align: center;
            font-weight: normal;
            padding: 1em;
            margin: 0 0 2em 0;
            background-color: #eee;
            border: 1px solid #666;
          }
        </style>
  
        <p>Hello ${ this.name }!</p>`;      
    }
    
  }
  


  export { HelloWorld }