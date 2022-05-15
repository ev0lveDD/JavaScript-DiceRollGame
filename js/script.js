function rollDice() {
  var player = Math.random();
  player = player * 6;
  player = Math.floor(player)+1;

  return player;
}

function changeDiceImage(value,position) {
  if (value == 1) {
    document.querySelectorAll(".columns img")[position].setAttribute("src", "images/dice1.png")
  } else if (value == 2) {
    document.querySelectorAll(".columns img")[position].setAttribute("src", "images/dice2.png")
  } else if (value == 3) {
    document.querySelectorAll(".columns img")[position].setAttribute("src", "images/dice3.png")
  } else if (value == 4) {
    document.querySelectorAll(".columns img")[position].setAttribute("src", "images/dice4.png")
  } else if (value == 5) {
    document.querySelectorAll(".columns img")[position].setAttribute("src", "images/dice5.png")
  } else {
    document.querySelectorAll(".columns img")[position].setAttribute("src", "images/dice6.png")
  }
}

function actionDiceRoll() {
  var player1 = rollDice();
  changeDiceImage(player1,0);

  var player2 = rollDice();
  changeDiceImage(player2,1);

  if (player1 > player2) {
    document.querySelector(".content h1").textContent="Player 1 wins !"
  } else if (player1 < player2) {
    document.querySelector(".content h1").textContent="Player 2 wins !"
  } else {
    document.querySelector(".content h1").textContent="It's a draw !"
  }
}
