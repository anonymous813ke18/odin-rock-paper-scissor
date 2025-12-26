let humanscore = 0;
let computerscore = 0;
let keepGoing = true;

let buttons = document.querySelectorAll("button");
let humanPara = document.querySelector("#humanScore");
let compPara = document.querySelector("#computerScore");
let result = document.querySelector("#result");

buttons.forEach((button) => {
    button.addEventListener("click", playRound);
})

function playRound() {
    let humanChoice = this.id;
    let computerChoice = getComputerChoice();

    if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissor") || 
        (humanChoice == "scissor" && computerChoice == "rock")) {
        computerscore++;
        humanPara.textContent = `Your Choice: ${humanChoice} Your Score: ${humanscore}`;
        compPara.textContent = `Computer Choice: ${computerChoice} Computer Score: ${computerscore}`;
        result.textContent = `Computer Wins This Round!!`;
    } else if (humanChoice === computerChoice) {
        humanPara.textContent = `Your Choice: ${humanChoice} Your Score: ${humanscore}`;
        compPara.textContent = `Computer Choice: ${computerChoice} Computer Score: ${computerscore}`;
        result.textContent = `It's a TIE!!`;
    }
    else {
        humanscore++;
        humanPara.textContent = `Your Choice: ${humanChoice} Your Score: ${humanscore}`;
        compPara.textContent = `Computer Choice: ${computerChoice} Computer Score: ${computerscore}`;
        result.textContent = `Player Wins This Round!!`;
    }

    if (humanscore == 5) {
        alert("Player WINS!!");
        buttons.forEach((button) => button.removeEventListener("click", playRound));
    } else if (computerscore == 5) {
        alert("Computer WINS!!");
        buttons.forEach((button) => button.removeEventListener("click", playRound));
    }
}

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    choice = num == 0 ? "rock" : num == 1 ? "paper" : num == 2 ? "scissor" : "not possible";
    return choice;
}

