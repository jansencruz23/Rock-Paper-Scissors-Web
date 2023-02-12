const picks = document.querySelectorAll(".pick");
const userIcon = document.querySelector("#user-icon");
const botIcon = document.querySelector("#bot-icon");
const header = document.querySelector(".header h1");
const subHeader = document.querySelector(".header p");
const userScoreDiv = document.querySelector("#user-score");
const botScoreDiv = document.querySelector("#bot-score");
const modal = document.querySelector(".modal-box");
const modalExit = document.querySelector(".modal-exit");
const modalBtn = document.querySelector("#modal-btn");
const modalHeader = document.querySelector(".modal-header");
const MAX_SCORE = 5;

let userScore = 0;
let botScore = 0;
let hasWinner = false;

picks.forEach((pick) => {
    pick.addEventListener('click', (e) => {
        let userPick = getUserChoice(e);
        let botPick = getComputerChoice();

        if(!hasWinner){
            displayPick(userPick, botPick);
            play(userPick, botPick);
        }else{
            modal.style.display = 'block';
        }
    });
});

modalExit.addEventListener('click', ()  => {
    modal.style.display = 'none';
    hasWinner = true;
});

modalBtn.addEventListener('click', () => {
    //resets the game
    hasWinner = false;
    userScore = 0;
    botScore = 0;
    userIcon.textContent = '🤔';
    botIcon.textContent = '🦾';
    userScoreDiv.innerHTML = `Player: ${userScore}`;
    botScoreDiv.innerHTML = `Computer: ${botScore}`;
    header.innerHTML = 'Choose your pick';
    subHeader.innerHTML = 'First to score 5 points to win the game';
    modal.style.display = 'none';
});

function displayPick(userPick, botPick){
    switch(userPick)
    {
        case 'rock': userIcon.textContent = '✊'; break;
        case 'paper': userIcon.textContent = '🖐'; break;
        case 'scissors': userIcon.textContent = '✌️'; break;
    }

    switch(botPick)
    {
        case 'rock': botIcon.textContent = '✊'; break;
        case 'paper': botIcon.textContent = '🖐'; break;
        case 'scissors': botIcon.textContent = '✌️'; break;
    }
}

function getUserChoice(e){
    if(e.target.id == 'rock') return 'rock';
    else if(e.target.id == 'paper') return 'paper';
    else if(e.target.id == 'scissors') return 'scissors';
}

function getComputerChoice(){
    let choice = Math.ceil(Math.random() * 3);
    if(choice == 1) return 'rock';
    else if(choice == 2) return 'paper';
    else return 'scissors';
}

function play(player, bot){
    if((player == 'rock' && bot == 'rock') || (player == 'paper' && bot == 'paper') || (player == 'scissors' && bot == 'scissors'))
    {
        header.textContent = "It's a tie!";
        subHeader.textContent = `${player} ties with ${bot}`;
    }
    else if((player == 'rock' && bot == 'scissors') || (player == 'paper' && bot == 'rock') || (player == 'scissors' && bot == 'paper'))
    {
        header.textContent = "You win!";
        subHeader.textContent = `${player} beats ${bot}`;
        userScore++;
        userScoreDiv.innerHTML = `Player: ${userScore}`;
        displayWinner();
    }
    else if((player == 'rock' && bot == 'paper') || (player == 'paper' && bot == 'scissors') || (player == 'scissors' && bot == 'rock'))
    {
        header.textContent = "You lost!";
        subHeader.textContent = `${player} is beaten by ${bot}`;
        botScore++;
        botScoreDiv.innerHTML = `Computer: ${botScore}`;
        displayWinner();
    }
    else
    {
        return 'Invalid';
    }
}

function displayWinner(){
    if(userScore >= MAX_SCORE || botScore >= MAX_SCORE){
        if(userScore > botScore){
            modalHeader.innerHTML = 'You won!';
        }
        else {
            modalHeader.innerHTML = 'You lost :(';
        }
        modal.style.display = 'block';
        return;
    }
}