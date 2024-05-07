let counterState = 0;



const Counter =
  `<div>
  <button id='btn1'>click here!</button>
  <div id='counter-value'>0</div>
</div>
`;

const CounterJs = function () {
  const btn1 = document.querySelector('#btn1')
  btn1.addEventListener('click', () => { document.querySelector('#counter-value').innerHTML = ++counterState });
}



export { Counter, CounterJs };
