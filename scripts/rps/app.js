//@ts-check

// 1. player picks a weapon
// 2. Computer pick random weapon
// 3. Determine winner
// 4. Display
// 5. Play again / keep playing

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let aftermathElement = document.getElementById("aftermath");

const pickWeapon = function (weapon) {
	console.log("Player picked", weapon);
};

const selectComputerWeapon = function () {
	const rand = Math.floor(Math.random() * 3);

	if (rand == 0) {
		return ROCK;
	}

	if (rand == 1) {
		return PAPER;
	}

	return SCISSORS;
};
