//these ecercise fills an array N x N like a snail
snail = function(array) {
    // enjoy;
    if(array[0].length==0) {
        return [];
    }
    let result = [];
    let n = array.length -1
   for (let a = 0; a < n / 2; a++) {
      for (let i = a; i < n - a; i++) {
         result.push(array[a][i])
      }
      for (let i = a; i < n - a; i++) {
        result.push(array[i][n - a])
      }
      for (let i = n - a; i > a; i--) {
         result.push(array[n - a][i]);
      }
      for (let i = n - a; i > a; i--) {
        result.push(array[i][a])
      }
   }
   if ((n+1) % 2 == 1) {
      result.push(array[n / 2 ][n / 2]);
   }
   return result;
  }

  console.log(snail([[]]));