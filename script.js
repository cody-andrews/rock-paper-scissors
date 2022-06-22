
const buttons = document.querySelectorAll('button')
const divResults = document.getElementById('results')
const playerResult = document.getElementById('playerResults')
const computerResult = document.getElementById('computerResults')

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
            playerScore++;

            divResults.innerHTML = ('Player Wins!');
            playerResult.innerHTML = (playerScore);
            computerResult.innerHTML = (computerScore);

            console.log(result);
            console.log(playerScore, 'Player');
            console.log(computerScore, 'Computer');
        }

        else if (playerChoice == computerChoice)    {
            result = 'Tie';

            divResults.innerHTML = ('It\'s a tie!');
            playerResult.innerHTML = playerScore;
            computerResult.innerHTML = computerScore;
            

            console.log(result);
            console.log(playerScore, 'Player');
            console.log(computerScore, 'Computer');
        }

        else {
             result = 'Lose';
             computerScore++
             divResults.innerHTML = ('Computer Wins!');
             playerResult.innerHTML = playerScore;
            computerResult.innerHTML = computerScore;
            
             console.log(result);
             console.log(playerScore, 'Player');
             console.log(computerScore, 'Computer');
        }

        if (playerScore == 5)    {
            console.log('Player has won!');
            divResults.innerHTML = ('Player has won the game!');
            playerResult.innerHTML = playerScore;
            computerResult.innerHTML = computerScore;

            window.alert('You have one the match!')
            
            playerScore = 0;
            computerScore = 0;
        }

        else if (computerScore == 5) {
            console.log('Computer has won')
            divResults.innerHTML = ('The Computer has won the game!' + playerScore + computerChoice);
            playerResult.innerHTML = playerScore;
            computerResult.innerHTML = computerScore;
            
            window.alert('The Computer has won!');
            
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
