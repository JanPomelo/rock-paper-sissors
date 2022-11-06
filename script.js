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