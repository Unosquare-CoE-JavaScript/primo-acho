//this makes all posible combinations from a sequence of words works with optimization for
// big cases

function permutations(string) {
  let splitted = [...string];
  let permutations = [];
  for (let i = 0; i< splitted.length;i++) {

      for (let j=0; j<(splitted.length-i); j++){
          for (let k=0;k<(splitted.length-i); k++) {
            const arr = [...splitted];  
            const init = arr.slice(0,k);
            const replace = arr.slice(k,i);
            const last_part = arr.slice(k+i, splitted.length);
            
            const alter = [...init, ...last_part[0], ...replace,...last_part]
            if(!permutations.some(elem=>elem ===alter.join(''))) {
                permutations.push(alter.join(''));
            }
          }
      }
  }
  return permutations;
}

console.log(permutations('aabb'));