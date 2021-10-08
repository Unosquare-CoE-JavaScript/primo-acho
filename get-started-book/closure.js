function calculateRange(start, end){
    let i = start
    const ArrRange = [];
    while(i<=end) {
        ArrRange.push(i);
        i++;
    }
    console.log(ArrRange);
}
function range(start, end) {
    if(end ==null) {
        return function getEnd(ended) {
            return calculateRange(start, ended)
        }
    } else {
        calculateRange(start, end);
    }
}

range(3,3);
var start3 = range(4);

start3(8);