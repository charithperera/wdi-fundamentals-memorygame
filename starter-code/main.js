console.log("JS file is connected to HTML! Woo!")

// create and initialize 4 card values
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var maxCards = 4;

// if (cardThree === cardFour) {
// 	alert("You found a match!");
// }
// else {
// 	alert("Sorry, try again!");
// }

var gameBoard = document.getElementById("game-board");

var createBoard = function(maxCards) {

	for (var i = 0; i < maxCards; i++) {
		var newCard = document.createElement("div");
		newCard.className = "card";

		gameBoard.appendChild(newCard);
	}

}

createBoard(maxCards);