//each animal eats another so, in chain
//given an array of actions we determine which assertions are lies

function countTheLies(n,introduction) {
    let similars =[];

    function areTheSame(a, b) {
        return similars.some(elem=>{
            return elem[1].some(x=>x==a) && elem[1].some(y=>y==b) 
        });

    }
    function canEat(a,b) {
        return !similars.some(elem=>elem[0]==a && elem[1].some(x=>x==b));
    }

    let count = 0;
    introduction.forEach(elem => {
        if(elem[0]==2) {
            if(!areTheSame(elem[1],elem[2]) && elem[1] !== elem[2] && elem[1]<=n && elem[2]<=n && canEat(elem[1], elem[2])) {
                let index = similars.find(sim=>{  
                    return sim[0]===elem[2]
                })
                if(index!==undefined) { 
                    index[1].push(elem[1]);
                } 
                else { similars.push([elem[2],[elem[1]]]) }
            } else {
                count +=1;
            }
        } else {

            count = ((elem[1]===elem[2] && elem[1]<=n) || areTheSame(elem[1],elem[2]))? count : count + 1
        }
    });
    return count;
  }
  let n, introduction

        n = 3
        introduction = [ 
            [ 2, 1, 2 ], 
            [ 2, 2, 3 ], 
            [ 2, 1, 3 ], 
            [ 1, 1, 3 ] ]

console.log(countTheLies(n, introduction))