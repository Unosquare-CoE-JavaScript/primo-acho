function mix(s1, s2) {
    let str1 = [...s1];
    let str2 = [...s2];
    str1 = str1.filter(elem=> (elem.charCodeAt(0)>=97 && elem.charCodeAt(0)<=122))
    str2 = str2.filter(elem=> (elem.charCodeAt(0)>=97 && elem.charCodeAt(0)<=122))
    result = []
    while(str1.length>0 || str2.length>0) {
        let nextChar1, nextChar2;
        let charTaken = '';
        if(str1.length>0) {
            charTaken = str1[0];
            nextChar1 = str1.filter(elem=>elem===charTaken);
            nextChar2 = str2.filter(elem=>elem===charTaken);
        } else {
            charTaken = str2[0];
            nextChar1 = str1.filter(elem=>elem===charTaken);
            nextChar2 = str2.filter(elem=>elem===charTaken);
        }
        if (Math.max(nextChar1.length,nextChar2.length)>1) {
            if(nextChar1.length>nextChar2.length) {
                result.push('1:' + charTaken.repeat(nextChar1.length) +'/');
            } else if (nextChar1.length===nextChar2.length) {
                result.push('=:' + charTaken.repeat(nextChar1.length) +'/');
            } else {
                result.push('2:' + charTaken.repeat(nextChar2.length) +'/');
            }
        }
        str1 = str1.filter(elem=>elem!==charTaken);
        str2 = str2.filter(elem=>elem!==charTaken);
    }
    return result.sort((a,b)=>(b.length - a.length) || a > b).join('').slice(0,-1);
  }

console.log(mix("looping is fun but dangerous", "less dangerous than coding"));