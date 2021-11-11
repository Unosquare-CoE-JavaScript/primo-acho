function nextSmaller(n) {
    const sequence = [...String(n)];
    let digits = [sequence.pop()];
    let found =false;
    while(sequence.length>0 && !found) {
        let dig = sequence.pop();
        let min = digits.reduce((prev, curr) =>{
            return prev > curr? curr: prev;
        });
        if(min<dig) {
            digits.unshift(dig);
            const sbNumber = digits.join('');
            let combinations = permutations(sbNumber);
            combinations = combinations.filter(elem => elem !==sbNumber && Number(sequence.join('')+elem)<n);
            if(combinations.length>0) {
                let maxCombination = combinations.reduce((prev, curr) =>{
                    return (Number(prev)< Number(curr))? curr: prev;
                });
                const newNumber = sequence.join('') + maxCombination;
                if(Number(newNumber) < n && String(Number(newNumber)).length === String(n).length) {
                    return Number(newNumber);
                }
            }
        } else
            digits.unshift(dig);
    }
    return -1;
  }

  function permutations(str) {
    return (str.length <= 1) ? [str] :
            Array.from(new Set(
              str.split('')
                 .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
                 .reduce((r, x) => r.concat(x), [])
            ));
   }

console.log(nextSmaller(9999999999));