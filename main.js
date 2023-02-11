const picks = document.querySelectorAll(".picks");

picks.forEach((pick) => {
    pick.addEventListener('click', (e) => {
        let userPick = getUserChoice(e);
        let botPick = getComputerChoice();
    
        play(userPick, botPick);
    });
});


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
        alert( `Draw! you both picked ${player}`);
    }
    else if((player == 'rock' && bot == 'scissors') || (player == 'paper' && bot == 'rock') || (player == 'scissors' && bot == 'paper'))
    {
        alert( `You Win! ${player} beats ${bot}`);
    }
    else if((player == 'rock' && bot == 'paper') || (player == 'paper' && bot == 'scissors') || (player == 'scissors' && bot == 'rock'))
    {
        alert( `You Lose! ${bot} beats ${player}`);
    }
    else
    {
        return 'Invalid';
    }
}