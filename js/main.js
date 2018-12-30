(function() {
  'use strict'

  let blue = document.getElementById("blue");
  let yellow = document.getElementById("yellow");
  let red = document.getElementById("red");
  let auto = document.getElementById("auto");
  let change = document.getElementById("change");
  let colors = [blue, yellow, red];
  let n = 0;

//クリックしたら自動で色が変化
  auto.addEventListener("click", function() {
    let count = 0;
    let countUp = function() {
      console.log(count++);
      let id = setTimeout(countUp,1000);

      if (count >= 1 && count < 2) {
        blue.style.backgroundColor = "#66ff66";
        yellow.style.backgroundColor = "#222222";
        red.style.backgroundColor = "#222222";
      } else if (count >= 2 && count < 3) {
        blue.style.backgroundColor = "#222222";
        yellow.style.backgroundColor = "#ffff66";
        red.style.backgroundColor = "#222222";
      }else {
        blue.style.backgroundColor = "#222222";
        yellow.style.backgroundColor = "#222222";
        red.style.backgroundColor = "#ff3333";
      }

      if (count > 2) {
        clearTimeout(id);
      }
    }
    countUp();
  });

//クリックしたら色が一つ変化
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
