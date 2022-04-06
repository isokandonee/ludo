// function roll 2 dice
function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = dice1 + dice2;
    return diceTotal;
}