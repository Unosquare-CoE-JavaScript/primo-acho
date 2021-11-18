//some directions takes yout to the same place, so given a sequence, we reduce till there is no 
// useless movement

function opossite(dir1, dir2) {
    if((dir1==='NORTH' && dir2=='SOUTH') || (dir2==='NORTH' && dir1=='SOUTH')) {
        return true;
    }
    if((dir1==='EAST' && dir2=='WEST') || (dir2==='EAST' && dir1=='WEST')){
        return true;
    }
    return false
}

function dirReduc(arr){
    let newDirs = [];
    let result = arr;
    while(true) {
        let i = 0;
        newDirs=[];
        while(i<result.length) {
            if(i===result.length-1) {
                newDirs.push(result[i]);
                break;
            } else if (opossite(result[i],result[i+1])){
                i=i+2;
            } else {
                newDirs.push(result[i])
                i++;
            }
        }
        //if there is no changes we just finish the iteration;
        if(result.length === newDirs.length){
            break;
        }
        result = newDirs;
    }
    return newDirs;
  }


  console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))