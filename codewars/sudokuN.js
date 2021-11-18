//this valid a sudoku table N x N similar to a previus one

var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------
  var sudoku = data;
  var length = sudoku.length;
  var cuadrant = Math.pow(length, 1/ 2);

  function isValidLength() {
      if(Math.pow(length, 1/ 2) === Math.ceil(Math.pow(length, 1/ 2))) {
        return !(sudoku.some(elem=>elem.length!==length))
      }
      return false;
  }
  function validSolution(){
    //first we evaluate horizontal grids
    sudoku.forEach(element => {
      if(!validSequence(element)) {
        return false;
      }
    });
    //we take vertical grids
    for(let i=0;i<length;i++) {
      let verticalGrid = [];
      sudoku.forEach(element=>verticalGrid.push(element[i]));
      if(!validSequence(verticalGrid)) {
        return false;
      }
    }
    // we evaluate cuadrants
    for (let i=0;i<cuadrant;i++){
      for(let j=0;j<cuadrant;j++) {
        let cuadrantGrid = [];
        for(let k = 0; k<cuadrant;k++) {
            for(let m=0;m<cuadrant;m++) {
                cuadrantGrid.push(sudoku[(i*cuadrant)+k][(j*cuadrant)+m]);
            }
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
    return result === (length*(length+1))/2;
  }
  //   Public methods
  // -------------------------
  return {
    isValid: function() {
      // YOUR SOLUTION
      return isValidLength() && validSolution();
    }
  };
};

var goodSudoku1 = new Sudoku([
    [7,8,4, 1,5,9, 3,2,6],
    [5,3,9, 6,7,2, 8,4,1],
    [6,1,2, 4,3,8, 7,5,9],
  
    [9,2,8, 7,1,5, 4,6,3],
    [3,5,7, 8,4,6, 1,9,2],
    [4,6,1, 9,2,3, 5,8,7],
    
    [8,7,6, 3,9,4, 2,1,5],
    [2,4,3, 5,6,1, 9,7,8],
    [1,9,5, 2,8,7, 6,3,4]
  ]);

console.log(goodSudoku1.isValid());