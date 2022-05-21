

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

}

function playRound(playerSelection, computerChoice) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
computerPlay()