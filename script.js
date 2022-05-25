
const buttons = document.querySelectorAll('button')

let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    //function to generate a random number
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    

    let randomNumber = getRandomInt(3);
    
    if (randomNumber <= 0) {
        computerChoice = 'rock';
    }

    else if (randomNumber <= 1) {
        computerChoice = 'paper';
    }

    else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function playRound(playerChoice) {
    // your code here!
    let result = '';
    let computerChoice = computerPlay();

    console.log(playerChoice);
    console.log(computerChoice);


        if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'scissors' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'rock')) {

            result = 'Win';
            playerScore++
            console.log(result);
            console.log(playerScore, 'Player');
            console.log(computerScore, 'Computer');
        }

        else if (playerChoice == computerChoice)    {
            result = 'Tie';
            console.log(result);
            console.log(playerScore, 'Player');
            console.log(computerScore, 'Computer');
        }

        else {
             result = 'Lose';
             computerScore++
             console.log(result);
             console.log(playerScore, 'Player');
             console.log(computerScore, 'Computer');
        }

        if (playerScore == 5)    {
            console.log('Player has won!');
            playerScore = 0;
            computerScore = 0;
        }

        else if (computerScore == 5) {
            console.log('Computer has won')
            computerScore = 0;
            playerScore = 0;
        }
    
}
  
function game() {
    

   

}

  buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
