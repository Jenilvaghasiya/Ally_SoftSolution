let player = {
    name : "Per",
    chips : 200,
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("msg-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
console.log(cards);


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards : ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "Wohoo!, You've got blackJack ! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the Game !";
    isAlive = false;
    alert("Restart the game");
  }
  messageEl.textContent = message;
}

function restart() {
    cards = [];
    sum = 0;
    hasBlackJack = false;
    isAlive = false;
    
    messageEl.textContent = "Want to play a round?";
    sumEl.textContent = "Sum:";
    cardEl.textContent = "Cards:";
}

function newcard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}
