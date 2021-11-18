//find the last digit in a powered sequence of numbers
// we use congruences to solve this task


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