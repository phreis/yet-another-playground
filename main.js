import { Counter } from "./components/counter.js";
import { CounterContainer } from "./components/counterContainer.js";
import { CounterOuterState } from "./components/counterOuterState.js";
import { CounterOuterStateContainer } from "./components/counterOuterStateContainer.js";
import { ToDoApp } from "./components/todo/todo.js";
import { HelloWorld } from "./webcomponents/helloWorld.js";
import { CounterWc } from "./webcomponents/counterWc.js"
import { CounterWcContainer } from "./webcomponents/counterWcContainer.js";
import { HelloTs } from "./hello-ts.ts"


//just do test Typescript integration

//HelloTs()


//const mainContent = document.querySelector('.main-content')

//creates two independent counter instances
/* mainContent && Counter.insertInto(mainContent)
mainContent && Counter.insertInto(mainContent) */

//ceates one CounterContainer (which creates a number of independet counter inside itself)
//mainContent && CounterContainer.insertInto(mainContent, { caption: 'I am a container!' })

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

//mainContent && CounterOuterStateContainer.insertInto(mainContent, { caption: 'I am a container which holds my childrens states' })
//mainContent && ToDoApp.insertInto(mainContent)

//register Web Components
customElements.define('hello-world', HelloWorld);
customElements.define('counter-wc', CounterWc);
customElements.define('counter-wc-container', CounterWcContainer);
