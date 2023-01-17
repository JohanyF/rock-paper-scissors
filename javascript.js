let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let choice = Math.floor((Math.random() * 3)+ 1);
    let ComputerChoice;
    
    switch(choice)
    {
        case 1:
            ComputerChoice = "rock";
            break;
        case 2:
            ComputerChoice = "paper";
            break;
        case 3: 
            ComputerChoice = "scissors";
            break;
    }

    return ComputerChoice;
}


function playRound(playerSelection, computerSelection)
{

    if(playerSelection.toLowerCase() === computerSelection)
    {
        return "Tied Game!";
    }
    else if((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper"))
    {
        computerScore++;
        return "You Lose! Paper beats Rock";

    }
    else if((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors"))
    {
        playerScore++;
        return "You Win! Rock beats Scissors";


    }
    else if((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock"))
    {
        playerScore++;
        return "You Win! Paper beats Rock";

    }
    else if((playerSelection.toLowerCase() === "paper") && (computerSelection === "scissors"))
    {
        computerScore++;
        return "You Lose! Scissors beats Paper";

    }
    else if((playerSelection.toLowerCase() === "scissors") && (computerSelection === "rock"))
    {
        computerScore++;
        return "You Lose! Rock beats Scissors";

    }
    else if((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper"))
    {
        playerScore++;
        return "You Win! Scissors beats Paper";

    }
}

//console.log(playerSelection);
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));

function game()
{
    
    for(let i  = 0; i < 5; i++)
    {
        playerSelection = prompt("Rock, Paper or Scissors?")
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if(playerScore > computerScore)
    {
        console.log("You Win! You beat the computer.");
    }
    else if(playerScore < computerScore)
    {
        console.log("You Lost! A computer is superior than you...");
    }
    else
    {
        console.log("Nobody won?! Tied Game... ");
    }
}

game();
console.log(playerScore)
console.log(computerScore);