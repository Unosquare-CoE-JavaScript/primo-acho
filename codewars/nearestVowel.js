const vowelCodes = [97, 101, 105, 111, 117];
function f (s) {
    let distance = [];
    let vowelIndexes = [];
    [...s].forEach((elem, index )=>{
        if(vowelCodes.some(vow=> elem.charCodeAt(0)===vow)) {
            vowelIndexes.push(index);
        }
    });
    console.log(vowelIndexes);
    [...s].forEach((elem, index)=>{
        vowelIndexes.forEach((vow,arrIndex)=>{
            const min = vow;
            const max = arrIndex + 1 === vowelIndexes.length ? s.length : vowelIndexes[arrIndex + 1];
            if( min <= index && index< max) {
                console.log(min, max, index);
                if(Math.max( (min + max /2) , index) === index) {
                    //higher interval
                    distance.push(Math.abs(max - index));
                } else {
                    //lower interval
                    distance.push(Math.abs(index-min));
                }
            }
        });
    });
    return distance
}
function getdistance(char, base) {
    return Math.abs(char.charCodeAt(0) - base.charCodeAt(0));
}

console.log(f('abcdefgh'));


//oneline version
f=s=>[...s].map(g=(d,i,m)=>/[aeiou]$/i.test(s[i+d*m])?d:g(~~d+!~m,i,-m|1))