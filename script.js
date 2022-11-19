const buttons = Array.from(document.querySelectorAll('#choices button'));
const score = document.querySelector('#Score');
const roundResult = document.querySelector('#RoundResult');
const start = document.querySelector('#Start');

start.addEventListener('click',startGame,{once: true});
function startGame () {
    buttons.forEach(button => {
        button.addEventListener('click',function () {
            playRound(button.id.toLowerCase(),getComputerChoice());
        });
    });
}



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
//play one round of RPS
function playRound(userChoice, computerChoice) {
    //first check if the userInput is right, if not give a proper alert
    if (!checkUserInput(userChoice)) {
         alert('Sorry, Wrong input! Just "Rock", "Paper" or "Sissor" is allowed!');
         return ''; 
    }
    //otherwise change the userinput to be written with the first latter capitalized
    userChoice = userChoice.substring(0,1).toUpperCase() + userChoice.substring(1).toLowerCase();
    //do the calculation of win, draw or lose
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
    //log the result with proper text
    if (result === 'win') {
        roundResult.textContent = (`You win! ${userChoice} beats ${computerChoice}!`);
    } else if (result === 'lose') {
        roundResult.textContent = (`You lose! ${computerChoice} beats ${userChoice}!`);
    } else {
        roundResult.textContent = (`It's a draw! Both chosed ${computerChoice}!`);
    }
    return result;
}

//function to play a full game
/*function play() {
    //initialize variables
    let userWins = 0;
    let computerWins = 0;
    let keepGoing = true;
    //play until one player reaches 5 wins
    while (keepGoing) {
        let result = playRound(getUserInput(),getComputerChoice());
        if (result === 'win') {
            userWins++;
        } else if (result === 'lose') {
            computerWins++;
        }
        console.log(logStandings(userWins,computerWins));
        if (userWins >= 5 || computerWins >= 5) {
            keepGoing = false;
        }
    }
    //calculate the result
    return calcResult(userWins,computerWins);
}
//function to log the current standings
function logStandings(userWins, computerWins) {
    return `Current Standings:
    User: ${userWins} Wins
    Computer: ${computerWins} Wins`
}*/
//return the result
function calcResult(userWins, computerWins) {
    if (userWins > computerWins) {
        return `You won the Game ${userWins} to ${computerWins}! Congratulations!` 
    } else {
        return `You lost the Game ${userWins} to ${computerWins}. Better luck next time!`;
    }
}
