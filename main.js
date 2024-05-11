import { Counter } from "./components/counter.js";

const mainContent = document.querySelector('.main-content')

//creates two independent counter instances
mainContent && Counter.insertInto(mainContent)
mainContent && Counter.insertInto(mainContent)
