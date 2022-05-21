
// const optionBtn = document.querySelectorAll('div.optionBtn button');

function returnRock(event) {
    console.log('Rock');
 }
 function returnPaper(event) {
    console.log('Paper')
 }
 function returnScissors(event) {
     console.log('Scissors')
 }

const mybtnRock = document.getElementById('rock');
const mybtnPaper = document.getElementById('paper');
const mybtnScissors = document.getElementById('scissors');


mybtnRock.addEventListener("click", returnRock);
mybtnPaper.addEventListener("click", returnPaper);
mybtnScissors.addEventListener("click", returnScissors);



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay() {

    let randomNumber = getRandomInt(3);
    console.log(randomNumber)
   
    if (randomNumber <= 0) {
        computerChoice = 'Rock';
    }

    else if (randomNumber <= 1) {
        computerChoice = 'Paper';
    }

    else {
        computerChoice = 'Scissors';
    }
    console.log(computerChoice)
}

function playerChoice() {

    console.log(myButton);
}

function playRound(playerSelection, computerChoice) {
    // your code here!
  }
  
computerPlay()