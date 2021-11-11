function solution(list){
    let minRange=null, maxRange=null;
    let range = [];
    list.forEach(element => {
        if(minRange ==null) {
            minRange = element;
            maxRange = element;
        } else if(element == maxRange + 1) {
            maxRange = element
        } else {
            if(maxRange-minRange===1) {
                range.push(minRange,maxRange);

            } else {
                let rng = (maxRange !== minRange)? `${minRange}-${maxRange}` : minRange;
                range.push(rng);
            }
            minRange = element;
            maxRange = element;
        }
    });
    if(maxRange-minRange===1) {
        range.push(minRange,maxRange);

    } else {
        let rng = (maxRange !== minRange)? `${minRange}-${maxRange}` : minRange;
        range.push(rng);
    }
    return range.join();
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))