var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var playerScore = 0;
var gameBoard = document.getElementById("game-board");

var resetBoard = function() {
	allCards = document.getElementsByClassName("card");
	for(var i = 0; i < allCards.length; i++) {
		allCards[i].innerHTML = "";
	}
	cardsInPlay = [];
}

var isMatch =function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		playerScore++;
		document.getElementById("score").innerHTML = playerScore;
		resetBoard();
	}
}

var revealCard = function() {
	var cardType = this.getAttribute('data-card');
	this.innerHTML = "<img src='" + cardType + ".png'/>";
	cardsInPlay.push(cardType);
	if (cardsInPlay.length === 2) {
		setTimeout(function() {
			isMatch();
		}, 100)
	}
	else if (cardsInPlay.length === 4) {
		setTimeout(function(){
			alert("You Lost!");
			resetBoard();
		}, 100)
	}
}

var createBoard = function() {

	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement("div");
		newCard.className = "card";

		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', revealCard);

		gameBoard.appendChild(newCard);
	}

}

createBoard();