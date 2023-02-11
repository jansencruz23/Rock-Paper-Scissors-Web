

function getComputerChoice(){
    let choice = Math.ceil(Math.random() * 3);
    if(choice == 1) return 'rock';
    else if(choice == 2) return 'paper';
    else return 'scissors';
}

function play(player, bot){
    if((player == 'rock' && bot == 'rock') || (player == 'paper' && bot == 'paper') || (player == 'scissors' && bot == 'scissors'))
    {
        return `Draw! you both picked ${player}`;
    }
    else if((player == 'rock' && bot == 'scissors') || (player == 'paper' && bot == 'rock') || (player == 'scissors' && bot == 'paper'))
    {
        return `You Win! ${player} beats ${bot}`;
    }
    else if((player == 'rock' && bot == 'paper') || (player == 'paper' && bot == 'scissors') || (player == 'scissors' && bot == 'rock'))
    {
        return `You Lose! ${bot} beats ${player}`;
    }
    else
    {
        return 'Invalid';
    }
}