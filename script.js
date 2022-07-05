
const inputs = document.querySelectorAll('input')
const divResults = document.getElementById('roundResults')
const playerResult = document.getElementById('playerResults')
const computerResult = document.getElementById('computerResults')
let playerScore = 0;
let computerScore = 0;

// Animate Text in the gameRules paragraph 
var i = 0;
var txt = 'Welcome to a friendly game of Rock, Paper, Scissor. First to 5 wins. Choose your weapon below!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("gameRules").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



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
            playerResult.innerHTML = ('Player: ' + playerScore);
            computerResult.innerHTML = ('Computer: ' + computerScore);

            console.log(result); 
            console.log(playerScore, 'Player');
            console.log(computerScore, 'Computer');
        }

        else if (playerChoice == computerChoice)    {
            result = 'Tie';

            divResults.innerHTML = ('It\'s a tie!');
            playerResult.innerHTML = ('Player: ' + playerScore);
            computerResult.innerHTML = ('Computer: ' + computerScore);


            console.log(result);
            console.log(playerScore, 'Player');
            console.log(computerScore, 'Computer');
        }

        else {
             result = 'Lose';
             computerScore++
             divResults.innerHTML = ('Computer Wins!');
             playerResult.innerHTML = ('Player: ' + playerScore);
            computerResult.innerHTML = ('Computer: ' + computerScore);

            
             console.log(result);
             console.log(playerScore, 'Player');
             console.log(computerScore, 'Computer');
        }

        if (playerScore == 5)    {
            console.log('Player has won!');
            divResults.innerHTML = ('Player has won the game!');
            playerResult.innerHTML = ('Player: ' + playerScore);
            computerResult.innerHTML = ('Computer: ' + computerScore);


            window.alert('You have one the match!')
            
            playerScore = 0;
            computerScore = 0;
        }

        else if (computerScore == 5) {
            console.log('Computer has won')
            divResults.innerHTML = ('The Computer has won the game!');
            playerResult.innerHTML = ('Player: ' + playerScore);
            computerResult.innerHTML = ('Computer: ' + computerScore);

            
            window.alert('The Computer has won!');
            
            computerScore = 0;
            playerScore = 0;
        }
}
  
function game() {
    

   

}

  inputs.forEach(input =>{
    input.addEventListener('click', function(){
        playRound(input.value)
    })
})
