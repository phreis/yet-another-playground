import { Counter } from "./components/counter.js";
import { CounterContainer } from "./components/counterContainer.js";

const mainContent = document.querySelector('.main-content')

//creates two independent counter instances
mainContent && Counter.insertInto(mainContent)
mainContent && Counter.insertInto(mainContent)

mainContent && CounterContainer.insertInto(mainContent, { caption: 'I am a container!' })
