const gameOneFinal = document.getElementById('g1Final');
const gameTwoFinal = document.getElementById('g2Final');
const gameOneScore = sessionStorage.getItem('gameOneScore');
const gameTwoScore = sessionStorage.getItem('mostRecentScore');

gameOneFinal.innerText = gameOneScore;
gameTwoFinal.innerText = gameTwoScore;

 