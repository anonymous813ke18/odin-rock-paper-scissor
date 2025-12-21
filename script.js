let humanscore = 0;
let computerscore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissor") || (humanChoice == "scissor" && computerChoice == "rock")) {
        computerscore++;
        console.log("Computer WINS!");
        console.log(`Your Score: ${humanscore} \nComputer Score: ${computerscore}`)
    } else {
        humanscore++;
        console.log("You WIN!");
        console.log(`Your Score: ${humanscore} \nComputer Score: ${computerscore}`)
    }
}

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    choice = num == 0 ? "rock" : num == 1 ? "paper" : num == 2 ? "scissors" : "not possible";
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):");
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        alert("Please enter a valid choice!");
        getHumanChoice();
    }
}
