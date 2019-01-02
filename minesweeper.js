document.addEventListener('DOMContentLoaded', startGame)


var board = {}
//     {
//       row: 0,
//       col: 0,
//       isMine: false,
//       hidden: true,
//     },
//     {
//       row: 1,
//       col: 0,
//       isMine: false,
//       hidden: true,
//     },
//     {
//       row: 0,
//       col: 1,
//       isMine: false,
//       hidden: true,
//     },
//     {
//       row: 1,
//       col: 1,
//       isMine: false,
//       hidden: true,
//     },
//   ]


function generateCells (size) {

  // create a cells array
  // make a loop that automatically generate generateCells
  // fill the cells aray with the generated cells
  //return a cells array
  var cells = []


  for (i = 0; i < size; i++ ) {

    for (j = 0; j < size; j++){
        cell = {
               row: i,
               col: j,
               isMine: false,
               hidden: true,
        }

      cells.push(cell)
    }
  }

  return cells
}

function startGame () {
  board['cells'] =  generateCells(3)
  // Don't remove this function call: it makes the game work!
  for(x = 0; x < board.cells.length; x++){
    var randomNum = Math.round(Math.random())

    if (randomNum == 1) {
      board.cells[x] .isMine = true
    }
  }

  for (i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }

    document.getElementsByClassName('board')[0].addEventListener('click', checkForWin)
    document.getElementsByClassName('board')[0].addEventListener('contextmenu', checkForWin)
    lib.initBoard()

}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?


function checkForWin() {
//
//
//   // Once [ c ] is equal to visibleNonMines the user wins.
//   // Create an if statement for if they are equal console log this, if this is not true console.log try again.
//
 var totalMines = countTotalMines()
 var markedMines = isMarked()
  var visibleNonMines = countVisibleNonMines()
  var totalNonMines = countTotalNonMines()

    if (visibleNonMines === totalNonMines || markedMines === totalMines) {
      	 console.log (lib.displayMessage('You win!'))
     }

    else if ( visibleNonMines != totalNonMines ) {
      	console.log('Try Again')
    }

    }
//
//
//   // Count through the array and count all of the mines and mark it [ a ]
//   // Then, [ a ] Mines - all cells on the board  = visibleNonMines
//
function countTotalNonMines () {
  var count = 0;
  for (var i = 0; i < board.cells.length; i++){
    if (board.cells[i].isMine === false){
      count++
    }
  }
    return count
}

function countTotalMines () {
  var count = 0;
  for (var i = 0; i < board.cells.length; i++){
    if (board.cells[i].isMine === true){
      count++
    }
  }
    return count
}
//
//
//
// // Count through the array again and count all the cells that are not mines and mark it [ b]
// // Then count through all the nonMines [ b ] and for every one that has the value hidden = false increase a number called [ c ].
//
//
//

function countVisibleNonMines () {

  var notMines = []
  var count = 0

  for (b =0; b < board.cells.length; b++){
     if (  board.cells[b].isMine === false){
       notMines.push(board.cells[b])
     }
  }

  for( var i = 0;  i < notMines.length; i++) {
    if (  notMines[i].hidden === false){
      count++
    }
  }

  return count
}


function countSurroundingMines (cell) {

// make a surround array variable using the lib function
// make a count variable that starts at 0
// loop through all the surrounding cells, and if they are a mine, add to the count.
// return the counts
//
var surrounding = lib.getSurroundingCells(cell.row, cell.col)
var count = 0

for (j = 0; j < surrounding.length; j++) {
  if (surrounding[j].isMine){
    count++
  }
}

return count
}

function isMarked () {
  var mines = []
  var count = 0;
  for(i = 0; i < board.cells.length; i++){
    if (board.cells[i].isMine){
      mines.push(board.cells[i])
    }
  }
  for(x = 0; x < mines.length; x++){
    if (mines[x].isMarked){
      count++
    }
  }
  return count
  }
