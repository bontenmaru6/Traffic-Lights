(function() {
  'use strict'

  const blue = document.getElementById("blue");
  const yellow = document.getElementById("yellow");
  const red = document.getElementById("red");
  const auto = document.getElementById("auto");
  const change = document.getElementById("change");
  const colors = [blue, yellow, red];
  let n = 0;

// クリックしたら自動で色が変化
  auto.addEventListener("click", function() {
      let count = 0;
      const countUp = function() {
      count++;
      const id = setTimeout(countUp,1000);

      switch (count) {
        case 1:
          blue.style.backgroundColor = "#66ff66";
          yellow.style.backgroundColor = "#222222";
          red.style.backgroundColor = "#222222";
          auto.disabled = true;
          change.disabled = true;
          break;

        case 2:
          blue.style.backgroundColor = "#222222";
          yellow.style.backgroundColor = "#ffff66";
          red.style.backgroundColor = "#222222";
          break;

        case 3:
          blue.style.backgroundColor = "#222222";
          yellow.style.backgroundColor = "#222222";
          red.style.backgroundColor = "#ff3333";
          break;

        case 4:
          blue.style.backgroundColor = "#222222";
          yellow.style.backgroundColor = "#222222";
          red.style.backgroundColor = "#222222";
          auto.disabled = false;
          change.disabled = false;
          break;
        }

        if (count > 3) {
          clearTimeout(id);
        }
      }
      countUp();
    });

// クリックしたら色が一つ変化
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
