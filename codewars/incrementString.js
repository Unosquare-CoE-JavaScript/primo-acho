function incrementString (strng) {
    const str = [...strng];
    const frt = str.find(elem=>elem.match(/[1-9]/));
    const index = str.indexOf(frt);
    let finalword='';
    let initLength, number;
    if (index>=0) {
        number = (str.slice(index, str.length)).join('');
        initLength = number.length;
        number = Number(number)+1 +'';

    } else {
        initLength = 0;
        number = '1';
    }
    let fndZeros = str.find(elem=>elem==='0');
    let indexZero
    if(fndZeros) {
        indexZero = str.indexOf(fndZeros);
    }
    else {
        indexZero = -1;
    }
    if(indexZero>=0) {

        let substr = str.slice(0, index>=0?
            ((initLength===number.length)?index:index-1):str.length-1);
        finalword = substr.join('') + number;
    } else {
        if(index>=0) {
            finalword = (str.slice(0, index)).join('') + number;
        } else {
            finalword = str.join('') + number;
        }
    }
    return finalword;
  }

  console.log(incrementString('foobar099'))