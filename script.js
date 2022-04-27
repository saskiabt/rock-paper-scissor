// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

// STILL TO BE DONE : FIX BUG WHERE CANCEL DOESN'T EXIT THE LOOP / RN CANCEL WILL JUST BRING UP THE PROMPT AGAIN AND YOU HAVE TO PLAY UNTIL SOMEONE GETS TO 5 TO EXIT 

// FUNCTION TO PICK COMPUTER CHOICE 

let rockButton = document.getElementById('rock'); 
let paperButton = document.getElementById('paper'); 
let scissorsButton = document.getElementById('scissors'); 

let playerSelectionBox = document.createElement('div');    
document.getElementById("selections").appendChild(playerSelectionBox);

let computerSelectionBox = document.createElement('div'); 
 document.getElementById("selections").appendChild(computerSelectionBox); 

let winnerContainer = document.getElementById('winnerContainer'); 
document.getElementById("resultsContainer").appendChild(winnerContainer); 


let titleContainer = document.getElementById('titleContainer'); 
let resultsContainer = document.getElementById('resultsContainer'); 
let finalWinner = document.getElementById('finalWinner'); 
let winnerDeclaration = document.createElement('div')
winnerDeclaration.classList.add('winnerDeclaration')
finalWinner.appendChild(winnerDeclaration); 
let description = document.getElementById('description');


function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']; 
    let random = Math.floor(Math.random()*3)
    let computerChoice = choices[random]
    return computerChoice
} 

let computerScore = 0
let playerScore = 0 

function countScore() { 
    if (computerScore === 5) { 
       winnerDeclaration.textContent=" COMPUTER WINS"
       winnerDeclaration.classList.add('grow'); 
        titleContainer.remove(); 
        buttonsContainer.remove(); 
        resultsContainer.remove();
        description.remove(); 

        let playAgainContainer = document.createElement('div'); 
        document.getElementById("finalWinner").appendChild(playAgainContainer); 
        let playAgainButton = document.createElement('button'); 
        playAgainContainer.appendChild(playAgainButton); 
        playAgainContainer.classList.add('playAgainContainer'); 
        playAgainButton.textContent= "Play again?"
        playAgainButton.classList.add('playButton');
        playAgainButton.addEventListener('click', () =>{ 
            window.location.reload(); 
        })
        
    } else if (playerScore === 5) { 
        winnerDeclaration.textContent="You win!!!"
        winnerDeclaration.classList.add('grow'); 
        titleContainer.remove(); 
        buttonsContainer.remove(); 
        resultsContainer.remove();
        description.remove(); 

        let playAgainContainer = document.createElement('div'); 
        document.getElementById("finalWinner").appendChild(playAgainContainer); 
        let playAgainButton = document.createElement('button'); 
        playAgainContainer.appendChild(playAgainButton); 
        playAgainContainer.classList.add('playAgainContainer'); 
        playAgainButton.textContent= "Play again?"
        playAgainButton.classList.add('playButton');
        playAgainButton.addEventListener('click', () =>{ 
            window.location.reload(); 
        })
    }
}



function playRound(playerSelection) { 
    // IF PLAYER SELECTS ROCK // 
    rockButton.addEventListener('click', () => { 
        const computerSelection = computerPlay(); 
        let playerSelection = 'rock'
        playerSelectionBox.textContent = `You selected 
        ${playerSelection}`
        if (computerSelection === 'scissors') { 
            computerSelectionBox.textContent = `Computer selection is ${computerSelection}`
            winnerContainer.textContent = `You win! Rock beats scissors.`
            playerScore ++ ; 
     
        } else if (computerSelection === 'paper') { 
            computerSelectionBox.textContent = `Computer selection is ${computerSelection}`
            winnerContainer.textContent = "You Lose! Paper Beats Rock"; 
            computerScore ++ 
         
       } else if (computerSelection === 'rock') { 
            computerSelectionBox.textContent = `Computer selection is ${computerSelection}`
            winnerContainer.textContent = "You tied. Play again."
        }

        playerScoreCard.textContent = `Player's score: ${playerScore}`
        computerScoreCard.textContent = `Computer's score: ${computerScore}`
        playerScoreCard.classList.add('growSmall'); 
        computerScoreCard.classList.add('growSmall'); 
        countScore(); 
    }); 


    paperButton.addEventListener('click', () => {
        const computerSelection = computerPlay(); 
        let playerSelection = 'paper'
        playerSelectionBox.textContent = `You selected ${playerSelection}`

        if (computerSelection === 'scissors') {
            computerSelectionBox.textContent = `Computer selection is ${computerSelection}`; 
            winnerContainer.textContent= 'You Lose! Scissors beats paper'; 
            computerScore ++ ; 

        } else if (computerSelection === 'paper') { 
            computerSelectionBox.textContent = `Computer selection is ${computerSelection}`; 
            winnerContainer.textContent= 'You tied. Play again.'; 
    
        } else if (computerSelection === 'rock') { 
            computerSelectionBox.textContent = `Computer selection is ${computerSelection}`; 
            winnerContainer.textContent= 'You win! Paper beats rock!'; 
            playerScore ++ ; 
        }
        
        playerScoreCard.textContent = `Player's score: ${playerScore}`
        computerScoreCard.textContent = `Computer's score: ${computerScore}`
        playerScoreCard.classList.add('growSmall'); 
        computerScoreCard.classList.add('growSmall'); 
        countScore(); 
    }); 

    scissorsButton.addEventListener('click', () => {
        const computerSelection = computerPlay(); 
        let playerSelection = 'scissors'; 
        playerSelectionBox.textContent = `You selected ${playerSelection}`; 

        if (computerSelection === 'scissors') { 
            computerSelectionBox.textContent = `Computer selection is ${computerSelection}`; 
            winnerContainer.textContent= 'You tied. Play again.'; 
        } else if (computerSelection === 'paper') { 
            computerSelectionBox.textContent = `Computer selection is ${computerSelection}`; 
            winnerContainer.textContent= 'You win! Scissors beats paper.'; 
            playerScore ++
        } else if (computerSelection === 'rock') { 
            computerSelectionBox.textContent = `Computer selection is ${computerSelection}`; 
            winnerContainer.textContent= 'You lose! Rock beats scissors'; 
            computerScore ++
        }
        playerScoreCard.textContent = `Player's score: ${playerScore}`
        computerScoreCard.textContent = `Computer's score: ${computerScore}`
        playerScoreCard.classList.add('growSmall'); 
        computerScoreCard.classList.add('growSmall'); 
        countScore(); 

    });

}

        
playRound(); 



