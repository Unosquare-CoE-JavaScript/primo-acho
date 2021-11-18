//These exercise valid whether a sudoku is properly filled

function validSolution(board){
  //first we evaluate horizontal grids
  board.forEach(element => {
    if(!validSequence(element)) {
      return false;
    }
  });
  //we take vertical grids
  for(let i=0;i<9;i++) {
    let verticalGrid = [];
    board.forEach(element=>verticalGrid.push(element[i]));
    if(!validSequence(verticalGrid)) {
      return false;
    }
  }
  // we evaluate cuadrants
  for (let i=0;i<3;i++){
    for(let j=0;j<3;j++) {
      let cuadrantGrid = [];
      for(let k = 0; k<3;k++) {
        cuadrantGrid.push(board[(i*3)+k][(j*3)]);
        cuadrantGrid.push(board[(i*3)+k][(j*3)+1]);
        cuadrantGrid.push(board[(i*3)+k][(j*3)+2]);
      }
    if(!validSequence(cuadrantGrid)){
      return false;
    }
    }
  }
  return true;
}

function validSequence( sequence) {
  //we valid if the sequence of non repeating columns is equal to 45 (9+8+ ...+1)
  var result = sequence.reduce((prev, curr)=> prev+curr);
  return result === 45;
}

console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]));