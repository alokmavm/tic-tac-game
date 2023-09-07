let gameBoard = [
    ["","",""],  ["","",""], ["","",""]
];

let currentPlayer = 'X';
let numOfPlayers = 0;
let isGameOver = false;

function playerMove(cell){
   let row = cell.parentNode.rowIndex;
   let col = cell.cellIndex;
   numOfPlayers++;
   if(gameBoard[row][col]===""){
    gameBoard[row][col] = currentPlayer;
    cell.innerHTML = currentPlayer;

  }
    if(checkWinner()){
        document.getElementById("result").innerHTML = `player ${currentPlayer} won`
    }
    else if(checkTie()){
        document.getElementById("result").innerHTML = `game is tie`
    }
    else{
        if(currentPlayer==="X"){
            currentPlayer = "O"
        }
        else{
            currentPlayer = "X";
        }
        document.getElementById("playerTurn").innerHTML = `now it is the turn of ${currentPlayer}`
    }

}

function checkWinner(){
    //row
   for(let i=0 ;i<3 ; i++){
    if(gameBoard[i][0]===currentPlayer
        && gameBoard[i][1]===currentPlayer
        && gameBoard[i][2]===currentPlayer){
        return true;
     }
   }
    //col
    for(let i=0 ;i<3 ; i++){
        if(gameBoard[0][i]===currentPlayer
            && gameBoard[1][i]===currentPlayer
            && gameBoard[2][i]===currentPlayer){
            return true;
         }
       }
    //dig-1
    for(let i=0 ;i<3 ; i++){
        if(gameBoard[0][0]===currentPlayer
            && gameBoard[1][1]===currentPlayer
            && gameBoard[2][2]===currentPlayer){
            return true;
         }
       }
   //dig-2
   for(let i=0 ;i<3 ; i++){
    if(gameBoard[0][2]===currentPlayer
        && gameBoard[1][1]===currentPlayer
        && gameBoard[2][0]===currentPlayer){
        return true;
     }
   }
}

function checkTie(){
    if(numOfPlayers===9){
        return true
    }
    return false
}

 function restartGame(){
   gameBoard = [
        ["","",""],  ["","",""], ["","",""]
    ];
   currentPlayer = 'X';
   numOfPlayers = 0;
  let cells = document.getElementById("cell");
  for(let i=0 ;i<cells.clientHeight;i++){
    cells[i].innerHTML = "";
  }
  // another way
//   for(let cell of cells){
//      cell.innerHTML = "";
//   }
 }
