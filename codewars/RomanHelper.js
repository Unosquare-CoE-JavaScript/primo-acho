
var lookup = {M: 1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 }
var RomanNumerals = {
    toRoman(num) {
        
        let roman = '';
        for (let i in lookup ) {
          while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
          }
        }
        return roman;
    },
    fromRoman(str1) {
        if(str1 == null) return -1;
        var num = lookup[str1[0]];
        var pre, curr;
        
        for(var i = 1; i < str1.length; i++){
            curr = lookup[str1[i]];
            pre = lookup[str1[i-1]];
            if(curr <= pre){
                num += curr;
            } else {
                num = num - pre*2 + curr;
            }
        }
        
        return num;
        }
        
}




console.log(RomanNumerals.fromRoman('XXI'))