import { Counter } from "./components/counter.js";
import { CounterContainer } from "./components/counterContainer.js";
import { CounterOuterState } from "./components/counterOuterState.js";
import { CounterOuterStateContainer } from "./components/counterOuterStateContainer.js";
import { ToDoApp } from "./components/todo/todo.js";

const mainContent = document.querySelector('.main-content')

//creates two independent counter instances
//mainContent && Counter.insertInto(mainContent)
//mainContent && Counter.insertInto(mainContent)

//ceates one CounterContainer (which creates a number of independet counter inside itself)
mainContent && CounterContainer.insertInto(mainContent, { caption: 'I am a container!' })

//.
mainContent && CounterOuterStateContainer.insertInto(mainContent, { caption: 'I am a container which holds my childrens states' })
mainContent && ToDoApp.insertInto(mainContent)
