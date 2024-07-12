let humanScore = 0
let computerScore = 0
function getComputerChoice(){
    let compNum = Math.floor(Math.random() * 3)
    if(compNum === 0) {
        alert("ROCK!")
    }
    else if(compNum === 1) {
        alert("PAPER")
    }
    else {
        alert("SCISSORS")
    }
    return compNum
}
function getHumanChoice(){
    let ans = prompt("rock paper scissors SHOOT!")
    let humNum
    if(ans === "rock"){
        humNum = 0
    }
    else if(ans ==="paper"){
        humNum = 1
    }
    else if(ans ==="scissors"){
        humNum = 2
    }
    else {
        humNum = 3
    }
    console.log(humNum)

    return humNum
}

function playRound(humanChoice,computerChoice){
    if(humanChoice == 0 && computerChoice == 0){
        alert("tie")
    }
    else if(humanChoice == 1 && computerChoice == 0){
        alert("you win. paper beats rock")
        humanScore++
    }
    else if(humanChoice == 2 && computerChoice == 0){
        alert("you lose")
        computerScore++
    }
    else if(humanChoice == 0 && computerChoice == 1){
        alert("you lose")
        computerScore++
    }
    else if(humanChoice == 1 && computerChoice == 1){
        alert("tie")
    }
    else if(humanChoice == 2 && computerChoice == 1){
        alert("you win. scissors beats paper")
        humanScore++
    }
    else if(humanChoice == 0 && computerChoice == 2){
        alert("you win. rock beats scissors")
        humanScore++
    }
    else if(humanChoice == 1 && computerChoice == 2){
        alert("you lose")
        computerChoice++
    }
    else if(humanChoice == 2 && computerChoice == 2){
        alert("tie")
    }
    alert(`Human : ${humanScore} Computer : ${computerScore}`)

}


const humanSelection = getHumanChoice()
const computerSelction = getComputerChoice()

playRound(humanSelection,computerSelction)