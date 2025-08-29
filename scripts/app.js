//@ts-check
// This will be our first javascript file

console.log("Hello world from JavaScript");

// this is a string (text) variable
// strings are surrounded by double quotes "", singles quotes '',
// or backtick ``
let username = "SlayBoy71";
// this variable name is camelCased
let favSong = "Watch your mouth";

console.log(username, favSong);

// reassign the value
favSong = "Saturday night fever";
console.log(username, favSong);

// we concatenate and change number to strings magically
let whatHappens = username + favSong + 1000;

console.log(whatHappens);

// numbers are kinda for math stuff
let likes = 1000000;
let subscribers = 10;

//@ts-ignore I know what I am doing!
whatHappens = likes / subscribers;
console.log(whatHappens);

// booleans are true false

let noCap = true;
let cap = false;
let is2greaterThan3 = 2 > 3;

console.log(noCap, cap, is2greaterThan3);

// define a constant
const DO_NOT_CHANGE_ME = "NOT ALLOWED!!!";

// this will fail as it is a constant
//DO_NOT_CHANGE_ME = "ALLOWED";

// Arrays -  lists of stuff

let favSnacks = ["oreos", "takis", "potato chips"];
console.log(favSnacks, favSnacks[1]);
console.log("this is the number of snacks:", favSnacks.length);

let squad = ["Cody", "Jason", "Luke", "Russ"];

// Objects - this grouped data/info

let profile = {
	username: "KittyMaster1000",
	favGame: "Fallout 4",
	likes: 500,
	subscribers: 25000,
	friends: ["Jason", "Luke", "Colten"],
};
console.log(profile);

profile.like = 1216;
console.log(profile);
