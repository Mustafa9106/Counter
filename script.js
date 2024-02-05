const count = document.querySelector("#count");
let nowcount = 0;

const btnDec = document.querySelector("#decrease");
const btnRes = document.querySelector("#reset");
const btnInc = document.querySelector("#increase");

btnDec.addEventListener("click", () => {
  if (nowcount > 0) {
    nowcount--;
    count.textContent = nowcount;
    var click = document.getElementById("soundEffect");
    click.play();
  }
  if (nowcount <= 0) {
    var block = document.querySelector("#block");
    block.play();
    document.querySelector("#decc").style.cursor = "not-allowed";
  } else {
    document.querySelector("#decc").style.cursor = "pointer";
  }
});

btnRes.addEventListener("click", () => {
  nowcount = 0;
  count.textContent = nowcount;
  var clear = document.querySelector("#clear");
  clear.play();
});

btnInc.addEventListener("click", () => {
  nowcount++;
  count.textContent = nowcount;
  var click = document.getElementById("soundEffect");
  click.play();
});
