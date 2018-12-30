(function() {
  'use strict';

  let blue = document.getElementById("blue");
  let yellow = document.getElementById("yellow");
  let red = document.getElementById("red");
  let change = document.getElementById("change");
  let colors = [blue, yellow, red];
  let n = 0;

  change.addEventListener("click", function() {

    switch(colors[n++]) {
      case blue:
        blue.style.backgroundColor = "#66ff66";
        yellow.style.backgroundColor = "#222222";
        red.style.backgroundColor = "#222222";
        break;

      case yellow:
        blue.style.backgroundColor = "#222222";
        yellow.style.backgroundColor = "#ffff66";
        red.style.backgroundColor = "#222222";
        break;

      case red:
        blue.style.backgroundColor = "#222222";
        yellow.style.backgroundColor = "#222222";
        red.style.backgroundColor = "#ff3333";
        n = 0;
        break;
    }
  });
})();
