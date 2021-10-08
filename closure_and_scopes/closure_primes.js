
function searchPrime() {
    var cache = [];
    return isPrime;

    function isPrime(v) {
        let number = cache.find(number=>number.num==v);
        if(number){
            return number.isPrime;
        }
        if(v<=3) {
            cache.push({
                num: v,
                isPrime: v>1
            })
            return v>1;
        }
        if (v% 2 == 0 || v%3 == 0) {
            cache.push({
                num: v,
                isPrime: false
            })
            return false;
        }
        var vSqrt = Math.sqrt(v);
        for (let i = 5; i <= vSqrt; i+=6) {
            if(v % i ==0 || v % (i + 2) ==0){
                cache.push({
                    num: v,
                    isPrime: false
                })
                return false;
            }
        }
        cache.push({
            num: v,
            isPrime: true
        })
        return true;
    }
}
var primes = searchPrime();

function factorize(v) {
    if(!primes(v)) {
        let i = Math.floor(Math.sqrt(v));
        while (v%i != 0) {
            i--;
        }
        return [
            ...factorize(i),
            ...factorize(v / i)
        ]
    }
    return [v];
}

console.log(factorize(67280421310721));
console.log(factorize(67280421310721));
