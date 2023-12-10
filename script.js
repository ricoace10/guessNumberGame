"use strict";

// console.log (document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳Correct Number!';

let ranNum, score, highscore;

ranNum = Math.trunc(Math.random() * 20) + 1;
score = 20;
highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //  When there is no answer.
  if (!guess) {
    document.querySelector(".message").textContent = " 🤬Wrong Number!";

    // When Player Wins.
  } else if (guess === ranNum) {
    document.querySelector(".message").textContent = "🥳Correct Number!";

    document.querySelector(".number").textContent = ranNum;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is too high.
  } else if (guess > ranNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " ☹️You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }

    //  When guess is too low.
  } else if (guess < ranNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " ☹️You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  ranNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
