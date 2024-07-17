const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById("score")

rock.addEventListener("click", () => playRound(0));
paper.addEventListener("click", () => playRound(1));
scissors.addEventListener("click", () => playRound(2));

let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 3)
    if (compNum === 0) {
        alert("ROCK!")
    }
    else if (compNum === 1) {
        alert("PAPER")
    }
    else {
        alert("SCISSORS")
    }
    return compNum
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        alert("tie")
    }
    else if (humanChoice == 1 && computerChoice == 0) {
        alert("you win! paper beats rock!")
        humanScore++
    }
    else if (humanChoice == 2 && computerChoice == 1) {
        alert("you win! scissors beats paper!")
        humanScore++
    }
    else if (humanChoice == 0 && computerChoice == 2) {
        alert("you win! rock beats scissors!")
        humanScore++
    }
    else {
        alert("you lose...")
        computerScore++
    }
    if(humanScore > 1) {
        alert("Human Wins!");
        humanScore = 0;
        computerScore = 0;
    }
    
    if(computerScore > 1) {
        alert("Computer Wins!") 
        humanScore = 0;
        computerScore = 0;
    }
    
    score.innerHTML = `Human : ${humanScore}  Computer : ${computerScore}`
}
