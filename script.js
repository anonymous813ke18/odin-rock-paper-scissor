let humanscore = 0;
let computerscore = 0;
let keepGoing = true;

let humanChoice = "";
let computerChoice = "";

while (keepGoing) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice == "quit") {
        let winner = (humanscore == computerscore) ? "No One" : 
                        (humanscore > computerscore) ? "Player" : "Computer";
        console.log(`Your Score: ${humanscore} \nComputer Score: ${computerscore} \n${winner} WINS!!!`);
        keepGoing = false;
    } else {
        playRound(humanChoice, computerChoice);
    }
}


function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissor") || 
        (humanChoice == "scissor" && computerChoice == "rock")) {
        computerscore++;
        console.log(`Your Choice: ${humanChoice} \n Computer Choice: ${computerChoice}`);
        console.log("Computer WINS!");
        console.log(`Your Score: ${humanscore} \nComputer Score: ${computerscore}`)
    } else if (humanChoice === computerChoice) {
        console.log(`Your Choice: ${humanChoice} \n Computer Choice: ${computerChoice}`);
        console.log("It's a TIE!!!");
        console.log(`Your Score: ${humanscore} \nComputer Score: ${computerscore}`)
    }
    else {
        humanscore++;
        console.log(`Your Choice: ${humanChoice} \n Computer Choice: ${computerChoice}`);
        console.log("You WIN!");
        console.log(`Your Score: ${humanscore} \nComputer Score: ${computerscore}`)
    }
}

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    choice = num == 0 ? "rock" : num == 1 ? "paper" : num == 2 ? "scissor" : "not possible";
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissor, or quit):");
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissor" || choice == "quit") {
        return choice;
    } else {
        alert("Please enter a valid choice!");
        getHumanChoice();
    }
}
