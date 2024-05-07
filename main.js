

import { CounterClass } from "./components/counterClass.js";


const header = document.querySelector('header');
header.innerHTML = 'hugo';
header.className = 'bold';

const mainContent = document.querySelector('.main-content')


CounterClass.insertInto(mainContent)
CounterClass.insertInto(mainContent)
