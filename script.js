
const buttons = document.querySelectorAll('button')

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
            console.log(result)

        }

        else if (playerChoice == computerChoice)    {
            result = 'Tie';
            console.log(result);
        }

        else {
            result = 'Lose';
            console.log(result);
        }
}
  

  buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
