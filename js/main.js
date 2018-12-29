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
    blue.className = "blue";
    yellow.className = "light";
    red.className = "light";
    break;

    case yellow:
    blue.className = "light";
    yellow.className = "yellow";
    red.className = "light";
    break;

    case red:
    blue.className = "light";
    yellow.className = "light";
    red.className = "red";
    n = 0;
    break;
  }

});

})();
