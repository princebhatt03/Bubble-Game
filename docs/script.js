let timer = 60;
let score = 0;
let hrn;
function makeBubble() {
  let clit = '';
  for (let i = 1; i <= 168; i++) {
    let rn = Math.floor(Math.random() * 10);
    clit += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector('#pbtm').innerHTML = clit;
}
function runTimer() {
  let timeInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector('#time').textContent = timer;
    } else {
      clearInterval(timeInt);
      document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
function getNewHit() {
  hrn = Math.floor(Math.random() * 10);
  document.querySelector('#hitVal').textContent = hrn;
}
function inScore() {
  score += 10;
  document.querySelector('#scoreVal').textContent = score;
}
document.querySelector('#pbtm').addEventListener('click', function (dets) {
  let cn = Number(dets.target.textContent);
  if (cn === hrn) {
    inScore();
    makeBubble();
    getNewHit();
  }
});
makeBubble();
runTimer();
getNewHit();
