
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score-text');
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score2 = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [
	{
		//these are the components of the questions and their answers
		question : "What was the Starship Picard captained in ST-TNG?",
		choice1 : "The Stargazer",
		choice2 : "The Enterprise A",
		choice3 : "The Defiant",
		choice4 : "The Enterprise D",
		// tells the computer which answer is the correct one
		answer : 4
	},
	{
		question: "What Planet was Spock from?",
		choice1: "Earth",
		choice2: "Minbus III",
		choice3: "Vulcan",
		choice4: "Romulus",
		answer: 3
	},
	{
		question: "How many ships bore the name Enterprise in Start Trek?",
		choice1: "One",
		choice2: "Three",
		choice3: "Five",
		choice4: "Seven",
		answer: 4
	},
	{
		question: "What was the destination of the very first ST-TNG mission",
		choice1: "Riser IV",
		choice2: "Vulcan",
		choice3: "Farpoint",
		choice4: "Kronos",
		answer: 3
	},
	{
		question: "What was the nickname of Kirk's ships Doctor",
		choice1: "McCoy",
		choice2: "Doc",
		choice3: "Bones",
		choice4: "Scotty",
		answer: 3
	}
];

//constants
const CORRECT_BONUS = 100;
const INCORRECT_BONUS = -30;
const MAX_QUESTIONS = 5;

startGame = () => {
	questionCounter = 0;
	score2 = 0;
	availableQuestions = [ ... questions];
	
	getNewQuestion();	
};

getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
		sessionStorage.setItem("gameTwoScore", score2);
	return window.location.assign("./highScores.html");
	}
	questionCounter++;
	progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
	progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

	const questionIndex = Math.floor(Math.random() * availableQuestions.length);

	currentQuestion = availableQuestions[questionIndex];
	question.innerText = currentQuestion.question;

	choices.forEach( choice => {
		const number = choice.dataset["number"];
		choice.innerText = currentQuestion["choice" + number];
	});

	//availableQuestions.splice(questionIndex, 1);
	acceptingAnswers = true;
};

choices.forEach(choice => {
	choice.addEventListener("click", e => {
	if (!acceptingAnswers) return;
	
	acceptingAnswers= false;
	
	const selectedChoice = e.target;
	const selectedAnswer = selectedChoice.dataset["number"];
	const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
	
	if (classToApply === 'correct') {
		incrementScore(CORRECT_BONUS);
	} else {
		incrementScore(INCORRECT_BONUS);
	};
	
	selectedChoice.parentElement.classList.add(classToApply);
	
	setTimeout( () => {
		selectedChoice.parentElement.classList.remove(classToApply);
	getNewQuestion();
	}, 1000);
	});
});

incrementScore = num => {
	score2 += num;
	scoreText.innerText = score2;
	sessionStorage.setItem("gameTwoScore", score2);
};

startGame();