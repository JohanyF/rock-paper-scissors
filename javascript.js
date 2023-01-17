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

//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection)
{

    if(playerSelection.toLowerCase() === computerSelection)
    {
        return "Tied Game!";
    }
    else if((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper"))
    {
        return "You Lose! Paper beats Rock";
    }
    else if((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors"))
    {
        return "You Win! Rock beats Scissors";
    }
    else if((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock"))
    {
        return "You Win! Paper beats Rock";
    }
    else if((playerSelection.toLowerCase() === "paper") && (computerSelection === "scissors"))
    {
        return "You Lose! Scissors beats Paper";
    }
    else if((playerSelection.toLowerCase() === "scissors") && (computerSelection === "rock"))
    {
        return "You Lose! Rock beats Scissors";
    }
    else if((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper"))
    {
        return "You Win! Scissors beats Paper";
    }
}

//console.log(playRound("Paper", "scissors"));
