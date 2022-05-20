import React from 'react';
import ReactDOM from 'react-dom';

const destination = document.getElementById('destination');

const choices1 = Array.from(document.getElementsByClassName('choice1'));
const choices2 = Array.from(document.getElementsByClassName('choice2'));
const choices3 = Array.from(document.getElementsByClassName('choice3'));
const choices4 = Array.from(document.getElementsByClassName('choice4'));
const choices5 = Array.from(document.getElementsByClassName('choice5'));

const scoreText = document.getElementById('scoreBottom');
const Aone = document.getElementById('attemptOne');
const Atwo = document.getElementById('attemptTwo');
const Athree = document.getElementById('attemptThree');
const Afour = document.getElementById('attemptFour');
const Afive = document.getElementById('attemptFive');

let currentDestination = {};
let score = 0;
let destinationCounter = 0;
let availableDestinations = [];
let attempt1 = 0;
let attempt2 = 0;
let attempt3 = 0;
let attempt4 = 0;
let attempt5 = 0;
let acceptingAnswers1 = true;
let acceptingAnswers2 = true;
let acceptingAnswers3 = true;
let acceptingAnswers4 = true;
let acceptingAnswers5 = true;
let finish1 = false;
let finish2 = false;
let finish3 = false;
let finish4 = false;
let finish5 = false;

let destinations = [
	{
		destination : "P - 1 5 3 8 7 5",
		answer1 : 4,
		answer2 : 9,
		answer3 : 13,
		answer4 : 23,
		answer5 : 27
	},
	{
		destination : "P - 7 9 3 8 8 1",
		answer1 : 2,
		answer2 : 10,
		answer3 : 18,
		answer4 : 19,
		answer5 : 30
	},
	{
		destination : "P - 4 7 2 9 8 6",
		answer1 : 1,
		answer2 : 8,
		answer3 : 15,
		answer4 : 24,
		answer5 : 26
	},
	{
		destination : "P - 3 2 8 8 3 1",
		answer1 : 3,
		answer2 : 10,
		answer3 : 13,
		answer4 : 22,
		answer5 : 28
		},
		{
		destination : "P - 1 5 8 4 3 9",
		answer1 : 4,
		answer2 : 7,
		answer3 : 16,
		answer4 : 20,
		answer5 : 25
		},
		{
		destination : "P - 9 1 8 3 5 6",
		answer1 : 6,
		answer2 : 8,
		answer3 : 15,
		answer4 : 18,
		answer5 : 29
		}
];

const CORRECT_BONUS = 10;
const INCORRECT_BONUS = -3;
const MAX_DESTINATIONS = destinations.length;

startGame = () => {
	destinationCounter = 0;
	score = 0;
	attempt1 = 0;
	attempt2 = 0;
	attempt3 = 0;
	attempt4 = 0;
	attempt5 = 0;
	availableDestinations = [ ... destinations];
	getNewDestination();
};

getNewDestination = () => {
	if (availableDestinations.length === 0 || destinationCounter >= MAX_DESTINATIONS) {
		localStorage.setItem("gameOneScore", score);
		return window.location.assign("./highScores.html");
	}
	
	const destinationIndex = Math.floor(Math.random() * availableDestinations.length);

	currentDestination = availableDestinations[destinationIndex];
	destination.innerText = currentDestination.destination;
	acceptingAnswers = true;
};

choices1.forEach(choice => {
	choice.addEventListener("click", e => {

		if (!acceptingAnswers1) return;
		attempt1++;
		if (attempt1 <= 5) {
		const selectedChoice = e.target;
		const yourChoice = selectedChoice.dataset['number'];
		const selectedAnswer = currentDestination.answer1;
		const classToApply = selectedAnswer == yourChoice ? 'correct' : 'incorrect';
		
		if (classToApply === 'correct') {
			incrementScore(CORRECT_BONUS);
			acceptingAnswers1 = false;
			Aone.innerText = "YES!"
			finish1 = true;
			if (finish1 == true && finish2 == true && finish3 == true && finish4 == true && finish5 == true ) {window.location.assign("./highScores.html")};
			selectedChoice.parentElement.classList.add(classToApply);
		} else {
			incrementScore(INCORRECT_BONUS);
			Aone.innerText = "NOPE!"
		};
		
		} else {
			const selectedChoice = e.target;
			const yourChoice = selectedChoice.dataset['number'];
			const selectedAnswer = currentDestination.answer1;
			const classToApply = selectedAnswer == yourChoice ? 'correct' : 'incorrect';
			selectedChoice.parentElement.classList.add(classToApply);
			acceptingAnswers1 = false;
			Aone.innerText = "SORRY"
			finish1 = true;
			if (finish1 == true && finish2 == true && finish3 == true && finish4 == true && finish5 == true ) {window.location.assign("./highScores.html")};
		};
		
	});
});

choices2.forEach(choice => {
	choice.addEventListener("click", e => {
		
		if (!acceptingAnswers2) return;
		attempt2++;
		if (attempt2 <= 5) {
		const selectedChoice = e.target;
		const yourChoice = selectedChoice.dataset['number'];
		const selectedAnswer = currentDestination.answer2;
		const classToApply = selectedAnswer == yourChoice ? 'correct' : 'incorrect';
		
		if (classToApply === 'correct') {
			incrementScore(CORRECT_BONUS);
			acceptingAnswers2 = false;
			Atwo.innerText = "YES!"
			finish2 = true;
			selectedChoice.parentElement.classList.add(classToApply);
			if (finish1 == true && finish2 == true && finish3 == true && finish4 == true && finish5 == true ) {window.location.assign("./highScores.html")};
		} else {
			incrementScore(INCORRECT_BONUS);
			Atwo.innerText = "NOPE!"
		};
		} else {
			const selectedChoice = e.target;
			const yourChoice = selectedChoice.dataset['number'];
			const selectedAnswer = currentDestination.answer1;
			const classToApply = selectedAnswer == yourChoice ? 'correct' : 'incorrect';
			selectedChoice.parentElement.classList.add(classToApply);
			acceptingAnswers2 = false;
			Atwo.innerText = "SORRY"
			finish2 = true;
			if (finish1 == true && finish2 == true && finish3 == true && finish4 == true && finish5 == true ) {window.location.assign("./highScores.html")};
		}
	});
});

choices3.forEach(choice => {
	choice.addEventListener("click", e => {
		
		if (!acceptingAnswers3) return;
		attempt3++;
		if (attempt3 <= 5) {
		const selectedChoice = e.target;
		const yourChoice = selectedChoice.dataset['number'];
		const selectedAnswer = currentDestination.answer3;
		const classToApply = selectedAnswer == yourChoice ? 'correct' : 'incorrect';
		
		if (classToApply === 'correct') {
			incrementScore(CORRECT_BONUS);
			acceptingAnswers3 = false;
			Athree.innerText = "YES!"
			finish3 = true;
			selectedChoice.parentElement.classList.add(classToApply);
			if (finish1 == true && finish2 == true && finish3 == true && finish4 == true && finish5 == true ) {window.location.assign("./highScores.html")};
		} else {
			incrementScore(INCORRECT_BONUS);
			Athree.innerText = "NOPE!"
		};
		} else {
			const selectedChoice = e.target;
			const yourChoice = selectedChoice.dataset['number'];
			const selectedAnswer = currentDestination.answer1;
			const classToApply = selectedAnswer == yourChoice ? 'correct' : 'incorrect';
			selectedChoice.parentElement.classList.add(classToApply);
			acceptingAnswers3 = false;
			Athree.innerText = "SORRY"
			finish3 = true;
			if (finish1 == true && finish2 == true && finish3 == true && finish4 == true && finish5 == true ) {window.location.assign("./highScores.html")};
		}
	});
});

choices4.forEach(choice => {
	choice.addEventListener("click", e => {

		if (!acceptingAnswers4) return;
		attempt4++;
		if (attempt4 <= 5) {
		const selectedChoice = e.target;
		const yourChoice = selectedChoice.dataset['number'];
		const selectedAnswer = currentDestination.answer4;
		const classToApply = selectedAnswer == yourChoice ? 'correct' : 'incorrect';
		
		if (classToApply === 'correct') {
			incrementScore(CORRECT_BONUS);
			acceptingAnswers4 = false;
			Afour.innerText = "YES!"
			finish4 = true;
			selectedChoice.parentElement.classList.add(classToApply);
			if (finish1 == true && finish2 == true && finish3 == true && finish4 == true && finish5 == true ) {window.location.assign("./highScores.html")};
		} else {
			incrementScore(INCORRECT_BONUS);
			Afour.innerText = "NOPE!"
		};
		
		} else {
			const selectedChoice = e.target;
			const yourChoice = selectedChoice.dataset['number'];
			const selectedAnswer = currentDestination.answer1;
			const classToApply = selectedAnswer == yourChoice ? 'correct' : 'incorrect';
			selectedChoice.parentElement.classList.add(classToApply);
			acceptingAnswers4 = false;
			Afour.innerText = "SORRY"
			finish4 = true
			if (finish1 == true && finish2 == true && finish3 == true && finish4 == true && finish5 == true ) {window.location.assign("./highScores.html")};
		}
	});
});

choices5.forEach(choice => {
	choice.addEventListener("click", e => {
		
		if (!acceptingAnswers5) return;
		attempt5++;
		if (attempt5 <= 5) {
		const selectedChoice = e.target;
		const yourChoice = selectedChoice.dataset['number'];
		const selectedAnswer = currentDestination.answer5;
		const classToApply = selectedAnswer == yourChoice ? 'correct' : 'incorrect';
		
		if (classToApply === 'correct') {
			incrementScore(CORRECT_BONUS);
			acceptingAnswers5 = false;
			Afive.innerText = "YES!"
			finish5 = true;
			selectedChoice.parentElement.classList.add(classToApply);
			if (finish1 == true && finish2 == true && finish3 == true && finish4 == true && finish5 == true ) {window.location.assign("./highScores.html")};
		} else {
			incrementScore(INCORRECT_BONUS);
			Afive.innerText = "NOPE!"	
		};
		
		} else {
			const selectedChoice = e.target;
			const yourChoice = selectedChoice.dataset['number'];
			const selectedAnswer = currentDestination.answer1;
			const classToApply = selectedAnswer == yourChoice ? 'correct' : 'incorrect';
			selectedChoice.parentElement.classList.add(classToApply);
			acceptingAnswers5 = false;
			Afive.innerText = "SORRY"
			finish5 = true;
			if (finish1 == true && finish2 == true && finish3 == true && finish4 == true && finish5 == true ) {window.location.assign("./highScores.html");};
		}
	});
});

incrementScore = num => {
	score += num;
	scoreText.innerText = score;
	localStorage.setItem("gameOneScore", score);
};

startGame();

