function sumIntervals(intervals){
    let proceeded = [];
    let sum = 0;
    interval.forEach(element => {
        let interval = getNearestInterval(element, proceeded);
    });
  }
function getNearestInterval(arr, val) {
    if(arr.some(elem=>elem[0]===val[0] && elem[1] === val[1])) {
        return val;
    } else  {
        let foundCoincidence = arr.find(elem=>{
            return val[1]< elem[0];
        })
        if(foundCoincidence) {
            //cota superior
            return 
        } else {
            foundCoincidence = arr.find(elem=>{                
                return elem[1] < val[0]
            })
            //cota inferior

        }
    }
}

console.log(sumIntervals([[1,4],[7, 10],[3, 5]]));