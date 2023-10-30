const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let gameScore = 0;
let isGameOver = false;

const bird = new Bird();
const pipe = new Pipe();
const bg = new Background(0, 0);
const bg2 = new Background(bg.size.width, 0);

const gameOverSound = new Audio('./game_over_sound.wav');
const scoreSound = new Audio('./score_sound.mp3');

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  bg.update(bird.isDead);
  bg2.update(bird.isDead);
  pipe.update();
  bird.update();

  c.fillStyle = "white";
  c.font = "30px sans serif";
  c.fillText(gameScore, 10, 30);


if (bird.isDead && !isGameOver) {
  clearInterval(intervalId);
  isGameOver = true;
  showGameOverMessage();
  gameOverSound.play();
}
else {
  requestAnimationFrame(animate);
}
}

function showGameOverMessage() {
c.fillStyle = "red";
c.font = " bold 45px sans-serif";
c.fillText("GAME OVER", 20, 200);
c.fillStyle ="darkblue";
c.font = "bold 30px sans-serif";
c.fillText("Score: " + gameScore, 100, 250);
}

const intervalId = setInterval(() => {
  gameScore++;
  scoreSound.play();    
}, 1000);

document.addEventListener("keydown", () => {
  bird.jump();
});

animate();
