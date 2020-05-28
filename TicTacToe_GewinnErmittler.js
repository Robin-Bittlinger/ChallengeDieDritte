var GM = [
    ['O','O','O'],
    ['O','X','X'],
    ['X','O','X']
]; 

var xWin = false;
var oWin = false;

function checkWinner(spieler){

    for(i=0; i<3; i++){
        if(GM[i][0] == spieler && GM[i][1] == spieler && GM[i][2] == spieler){
            console.log(spieler + " hat gewonnen.")
            return true;
        }
        if(GM[0][i] == spieler && GM[1][i] == spieler && GM[2][i] == spieler){
            console.log(spieler + " hat gewonnen.")
            return true;
        }
    }
    if(GM[0][0] == spieler && GM[1][1] == spieler && GM[2][2] == spieler){
        console.log(spieler + " hat gewonnen.")
        return true;
    }
    if(GM[0][2] == spieler && GM[1][1] == spieler && GM[2][0] == spieler){
        console.log(spieler + " hat gewonnen.")
        return true;
    }
    return false;
}

oWin = checkWinner('O');
xWin = checkWinner('X');

if(!oWin && !xWin){
    console.log("UNENTSCHIEDEN");
}