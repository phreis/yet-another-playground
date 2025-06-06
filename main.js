import { Counter } from './components/counter.js';
//import { CounterContainer } from './components/counterContainer.js';
import { CounterOuterState } from './components/counterOuterState.js';
import { CounterOuterStateContainer } from './components/counterOuterStateContainer.js';
import { ToDoApp } from './components/todo/todo.js';
//import { HelloWorld } from "./webcomponents/helloWorld.js";
//import { CounterWc } from "./webcomponents/counterWc.js"
//import { CounterWcContainer } from "./webcomponents/counterWcContainer.js";
//import { HelloTs } from "./hello-ts.ts"

//just do test Typescript integration

//HelloTs()

const mainContent = document.querySelector('.main-content');

//creates two independent counter instances
/**
 * Creates a Counter instance with specific style
 * and inserts it into the mainContent
 */
mainContent &&
  new Counter().insertInto(mainContent, {
    style: `background: #ffe7e8; border: 2px solid tomato; padding: 10px; margin: 0px;`,
  });
/**
 * Creates a Counter instance with default style
 * and inserts it into the mainContent
 */
mainContent && new Counter().insertInto(mainContent);

//ceates one CounterContainer (which creates a number of independet counter inside itself)
//mainContent &&
//  CounterContainer.insertInto(mainContent, { caption: 'I am a container!' });

//.

/* window.addEventListener('hashchange', (ev) => {
  console.log('location: ', location.hash)
  switch (location.hash) {
    case ('#counter'):
      mainContent && CounterOuterStateContainer.insertInto(mainContent, { caption: 'I am a container which holds my childrens states' })
      break;
    case ('#todo'):
      mainContent && ToDoApp.insertInto(mainContent)
      break;
  }
}) */

mainContent &&
  new CounterOuterStateContainer().insertInto(mainContent, {
    caption:
      'I am a container which gets notified when my childrens states change',
    style: `border: 2px solid green`,
  });
mainContent && new ToDoApp().insertInto(mainContent);

//register Web Components
//customElements.define('hello-world', HelloWorld);
//customElements.define('counter-wc', CounterWc);
//customElements.define('counter-wc-container', CounterWcContainer);
