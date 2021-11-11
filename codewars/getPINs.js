const adyacents = {
    '1': ['1','2','4'],
    '2': ['2','1','3','5'],
    '3': ['3','2','6'],
    '4': ['4','1','5','7'],
    '5': ['5','2','4','6','8'],
    '6': ['6','3','5','9'],
    '7': ['7','4','8'],
    '8': ['8','5','7','9','0'],
    '9': ['9','6','8'],
    '0': ['0', '8']
}
function getPINs(observed) {
    const keys= [...observed];
    let sequence = [...adyacents[keys.pop()]];
    while(keys.length>0) {
        let variations =[];
        let variation = keys.pop();

        for(let i=0;i<adyacents[variation].length;i++) {
            for(j=0;j<sequence.length;j++) {
                let pin = adyacents[variation][i] + sequence[j];
                variations.push(pin);
            }
        }
        sequence = variations;
    }
    return sequence;
}

console.log(getPINs('11'));