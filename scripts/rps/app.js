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

	// get a random computer weapon and assign
	// it the the computerWeapon variable
	let computerWeapon = selectComputerWeapon();
	console.log("Computer picked", computerWeapon);
};

const selectComputerWeapon = function () {
	// this will give us a random number
	// between 0 and 3
	const rand = Math.floor(Math.random() * 3);

	if (rand == 0) {
		return ROCK;
	}

	if (rand == 1) {
		return PAPER;
	}

	if (rand == 2) {
		return SCISSORS;
	}

	// don't know what random number is choosing!
	throw "Unknown weapon";
};
