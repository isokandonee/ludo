// function to roll dice
function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = dice1 + dice2;
    return diceTotal;
}

// miltiplayer function
function multiPlayer() {
    
}

// function to check if player has won
function checkWin(diceTotal) {
    if (diceTotal === 7) {
        return true;
    } else {
        return false;
    }
}