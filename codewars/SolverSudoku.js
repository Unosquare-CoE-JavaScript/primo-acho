  function validSolution(board){
    board.forEach(element => {
      if(!validSequence(element)) {
        return false;
      }
    });
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
    var result = sequence.reduce((prev, curr)=> prev+curr);
    return result === 45;
  }

function sudoku(puzzle) {
    while(!validSolution(puzzle)) {
        
    }
  }