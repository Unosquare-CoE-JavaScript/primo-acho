var identity = (n) =>n;
var root = Math.sqrt;
var nDigit = (n) =>(n === 0 ? 0 : String(n).length);
var smallest = (d, p) => (d=== 1? 1: Math.ceil((10 ** (d -1)) ** (1 / p)));
var amount = (d,p) => smallest(d + 1, p) - smallest(d, p);

const getNumberByIndex = (i, p) => {
  let remain = i + 1, k;
  for(k =1;;k++) {
    let sd = amount(k,p) *k;
    if(remain -sd <= 0) break;
    remain -= sd;
  }
  let n = smallest(k,p) + Math.floor((remain - 1) / k);
  remain -= (n - smallest(k, p)) * k ;
  if(('' + n ** p).length === remain && n**p > (1<<30)) return ((n% 10) ** 2) % 10;
  return +('' + n ** p)[remain - 1];
}

function findDigit(n){
  const a = [];
  a.push([getNumberByIndex(n,1), getNumberByIndex(n,2)]);
  while(1) {
    const x = getNumberByIndex(++n, 1), y = getNumberByIndex(n, 2);
    if(x + y <= 5) break;
    a.push([x, y])
  }
  let mem = 0;
  for(let i = a.length - 1;i>=0; i--) {
    mem += a[i][0] + a[i][1];
    a[i][0] = mem % 10;
    mem = ~~(mem / 10)
  }
  return a[0][0]
}

console.log(findDigit(100));