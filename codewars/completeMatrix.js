//we take the minimum next hamming number, focused on perfomance
    
function hammingPrimo(n) {
    var seq = [1];
    var i2 = 0, i3=0,i5=0;

    for(let i=1;i<n;i++) {
        let hammingNumber = Math.min(seq[i2] * 2, seq[i3] * 3, seq[i5] * 5);
        seq.push(hammingNumber);
        if( 2 * seq[i2] == hammingNumber) { i2++ };
        if( 3 * seq[i3] == hammingNumber) { i3++ };
        if( 5 * seq[i5] == hammingNumber) { i5++ };
    }
    return seq.pop();
}


    console.log(hammingPrimo(5000));