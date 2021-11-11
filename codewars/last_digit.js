// var lastDigit = function(str1, str2){
//     if(str2=='0')
//         return 1;
//     let var1 = Number(str2) % 4;
//     let var2 = (Math.pow(Number(str1), var1)) % 10;
//     return var2;
//   }


//console.log(lastDigit("10", "10000000000"))

// function lastDigit(n, p) {
//     return Math.pow(n % 10, (p-1) % 4 + 1) % 10;
// }
function lastDigit(as){
    if(as.length==0) {return 1};
    let num = as.pop();
    while(as.length > 0) {
        console.log(num)
        num = lastDigit_2(String(as.pop()), String(num))
    }
    return num%10;
}
var lastDigit_2 = function(str1, str2){
    let mod = String(Math.pow(str1,2)).length>1 || str2>1 ?100:10;
    return +str2 === 0 ? 1 : Math.pow(+str1.slice(-2), +str2.slice(-2) % 4 + 4) % mod
  }

console.log(lastDigit([12, 30, 21 ]));