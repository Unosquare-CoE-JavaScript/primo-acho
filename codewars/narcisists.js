//a narcisisstic number y de one which is the sum of their own digits power of the number of digits
function narcissistic(value) {
    if(value>0) {
        let num = value.toString();
        num = [...num];
        num = num.map(val => Math.pow(Number(val),num.length));
        let result = num.reduce((prev, current)=>prev+current)
        return result ===value;
    }
    return false;
  }

console.log(narcissistic(371))