const buttons = Array.from(document.querySelectorAll('#choices button'));
const score = document.querySelector('#Score');
const roundResult = document.querySelector('#RoundResult');
const start = document.querySelector('#Start');

buttons.forEach(button => {
    button.setAttribute('disabled','disabled');
    button.addEventListener('click',function () {
        playRound(button.id.toLowerCase(),getComputerChoice());
    });
});

start.addEventListener('click',startGame,{once: true});
function startGame () {
    roundResult.textContent = '';
    score.textContent = '';
    userWins = 0;
    computerWins = 0;
    start.setAttribute('disabled','disabled');
    buttons.forEach(button => {
        button.removeAttribute('disabled');
    });
    console.log(computerWins);
}



let userWins = 0;
let computerWins = 0;
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
//play one round of RPS
function playRound(userChoice, computerChoice) {
 
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
        userWins++;
    } else if (result === 'lose') {
        roundResult.textContent = (`You lose! ${computerChoice} beats ${userChoice}!`);
        computerWins++;
    } else {
        roundResult.textContent = (`It's a draw! Both chosed ${computerChoice}!`);
    }
    logStandings();
    calcResult();
}


//function to log the current standings
function logStandings() {
    score.textContent = `Current Standings:
    User: ${userWins} Wins
    Computer: ${computerWins} Wins`;
}
//return the result
function calcResult() {

    if (userWins >= 5 || computerWins >= 5) {
        if (userWins > computerWins) {
            score.textContent =  `You won the Game ${userWins} to ${computerWins}! Congratulations!` 
        } else {
            score.textContent =  `You lost the Game ${userWins} to ${computerWins}. Better luck next time!`;
        }
        buttons.forEach(button => {
            button.setAttribute('disabled','disabled');
        });
        start.removeAttribute('disabled');
        start.addEventListener('click',startGame,{once: true});
    }
}
