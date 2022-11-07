//Create Array and store the values Rock Paper and Sissor in it

let computerChoice = [];
computerChoice[0] = 'Rock';
computerChoice[1] = 'Paper';
computerChoice[2] = 'Sissor';

//generate a random number
function calcRandomNumber() {
    return Math.floor(Math.random() * 3);
}
//choose a random Array element
function getComputerChoice() {
    return computerChoice[calcRandomNumber()];
}
//register userInput
function getUserInput() {
    let userInput = prompt('Please choose between Rock, paper, or Sissor:').toLowerCase();
    return userInput;
}

//check if userInput is either Rock, Paper or Sissor
function checkUserInput(userInput) {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'sissor') {
        return true;
    }
    else return false;
}

function playRound(userChoice, computerChoice) {
    if (!checkUserInput(userChoice)) {
        return 'Sorry, Wrong input! Just "Rock", "Paper" or "Sissor" is allowed!';
    }
    userChoice = userChoice.substring(0,1).toUpperCase() + userChoice.substring(1).toLowerCase();
    let result;
    switch (userChoice) {
        case 'Rock':
            switch (computerChoice) {
                case 'Rock':
                    result = 'draw';
                    break;
                case 'Paper':
                    result = 'lose';
                    break;
                case 'Sissor':
                    result = 'win';
                    break;
            }
            break;
        case 'Paper':
            switch (computerChoice) {
                case 'Rock':
                    result = 'win';
                    break;
                case 'Paper':
                    result = 'draw';
                    break;
                case 'Sissor':
                    result = 'lose';
                    break;
            }
            break;
        case 'Sissor':
            switch (computerChoice) {
                case 'Rock':
                    result = 'lose';
                    break;
                case 'Paper':
                    result = 'win';
                    break;
                case 'Sissor':
                    result = 'draw';
                    break;
            }
            break;
    }
    if (result === 'win') {
        return `You win! ${userChoice} beats ${computerChoice}!`;
    } else if (result === 'lose') {
        return `You lose! ${computerChoice} beats ${userChoice}!`;
    } else {
        return `It's a draw! Both chosed ${computerChoice}!`;
    }
    
    
}
