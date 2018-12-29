(function() {
  'use strict';

  var blue = document.getElementById("blue");
  var yellow = document.getElementById("yellow");
  var red = document.getElementById("red");
  var change = document.getElementById("change");
  var colors = [blue, yellow, red];
  var n = 0;

  change.addEventListener("click", function() {
    if (n < 3) {
      n += 1;
    }
    switch(colors[n - 1]) {
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
