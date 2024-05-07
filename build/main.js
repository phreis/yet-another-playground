"use strict";
(() => {
  // components/counter.js
  var counterState = 0;
  var Counter = `<div>
  <button id='btn1'>click here!</button>
  <div id='counter-value'>0</div>
</div>
`;
  var CounterJs = function() {
    const btn1 = document.querySelector("#btn1");
    btn1.addEventListener("click", () => {
      document.querySelector("#counter-value").innerHTML = ++counterState;
    });
  };

  // main.js
  console.log(Counter);
  var header = document.querySelector("header");
  header.innerHTML = "hugo";
  header.className = "bold";
  var mainContent = document.querySelector(".main-content");
  mainContent.innerHTML = Counter;
  CounterJs();
})();
