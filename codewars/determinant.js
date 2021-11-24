//this functions get the determinant of a N * N matrix
function determinant(m) {
    //check if matrix length is just 1 row
    if (m.length ===1) {
        return m[0][0]
    } else if (m.length ===2) {
        // return base case 2x2 matrix
        return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]) 
    } else {
        let  det = 0;
        // reducing matrix till the base case
        for(let i=0; i< m.length;i++) {
            det = det + (m[0][i] * determinant(getMinor(m, i)) * ((i+1)%2===0?-1:1));
        }
        return det;
    }
  };
  // reducing minor matrix
function getMinor(minor, index) {
    let matrix = [];
    for(let i=1; i<minor.length; i++) {
        let row = []
        for(let j=0; j<minor.length;j++) {
            if(j!==index) {
                row.push(minor[i][j])
            }
        }
        matrix.push(row);
    }
    return matrix;
}

var m1 = [ [1, 3], [2,5]];
var m2 = [ [2,5,3], [1,-2,-1], [1, 3, 4]];

//console.log(determinant([[1]]));
//console.log(determinant(m1));
console.log(determinant(m2));