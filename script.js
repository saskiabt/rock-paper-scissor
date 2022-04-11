// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

// STILL TO BE DONE : FIX BUG WHERE CANCEL DOESN'T EXIT THE LOOP / RN CANCEL WILL JUST BRING UP THE PROMPT AGAIN AND YOU HAVE TO PLAY UNTIL SOMEONE GETS TO 5 TO EXIT 

// FUNCTION TO PICK COMPUTER CHOICE 
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']; 
    let random = Math.floor(Math.random()*3)
    let computerChoice = choices[random]
    return computerChoice
} 


let computerScore = 0
let playerScore = 0 



function playRound(playerSelection) { 
    const computerSelection = computerPlay()
    let validSelection

    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        validSelection = true
        }

    if (validSelection === true) { 
        console.log(`Player selection is ${playerSelection}`) 
        console.log(`Computer selection is ${computerSelection}`) 
        }
    
    // IF PLAYER SELECTS ROCK // 
    if ( playerSelection === 'rock') {  
             if (computerSelection === 'scissors') { 
                 console.log('You win! Rock beats scissors')
                 playerScore ++ ; 
          
             } else if (computerSelection === 'paper') { 
                console.log('You Lose! Paper Beats Rock')
                 computerScore ++ 
              
            } else if (computerSelection === 'rock') { 
                 console.log('Tie! Rock vs. Rock.')
                 }
        // IF PLAYER SELECTS PAPER // 
        } else if (playerSelection === 'paper') { 
                if (computerSelection === 'scissors') {
                    console.log( 'You Lose! Scissors beats paper')
                    computerScore ++ 
                } else if (computerSelection === 'paper') { 
                    console.log('You tied!')
                } else if (computerSelection === 'rock') { 
                    console.log( 'You win! Paper beats rock!')
                    playerScore ++ 
                }
    // IF PLAYER SELECTS SCISSORS // 
        } else if (playerSelection === 'scissors') {
                if (computerSelection === 'scissors') { 
                    console.log( 'You tied. Scissors vs Scissors. Try Again')
                } else if (computerSelection === 'paper') { 
                    console.log( ' You win! Scissors beats paper.')
                    playerScore ++
                } else if (computerSelection === 'rock') { 
                   console.log(  'You lose! Rock beats scissors') 
                    computerScore ++
                }
        } else if (playerSelection === null) { 
            return;
        }
     
    if (validSelection === true) { 
        console.log(`Player's score is ${playerScore} ; Computer's score is ${computerScore}`)
    } 
}
    



function playGameDos() {
        const consoleStyle = 'color:pink; font-size:20px ; font-weight:bold;' 
        console.log('%c You are going to play a best of five game of Rock / Paper / Scissors against the computer. First to 3 points wins.', consoleStyle);

        while (computerScore<3 && playerScore<3) { 
           let playerSelection = prompt('Choose rock paper or scissors')
           playerSelection = playerSelection.toLowerCase() 
                

            if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
                console.log('')
                playRound(playerSelection); 
             } else { 
                playerSelection = prompt("Please enter a valid input and try again.")
                playRound(playerSelection);
            } 
        }
        
                
        if (playerScore === 3) { // declares winner at first to 3 points 
            console.log(`%c You Win!
                `, consoleStyle)
            } else if (computerScore === 3) { 
                console.log(`%c You lost. The computer won.
                `, consoleStyle)
            }
    
    }
 

 playGameDos()