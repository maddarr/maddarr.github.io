const gameOneFinal = document.getElementById('g1Final');
const gameTwoFinal = document.getElementById('g2Final');
const gameOneScore = localStorage.getItem('gameOneScore');
const gameTwoScore = localStorage.getItem('mostRecentScore');

gameOneFinal.innerText = gameOneScore;
gameTwoFinal.innerText = gameTwoScore;

 