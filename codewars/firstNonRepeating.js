//this function gets the fisrt non reapeating char in sequence
function firstNonRepeatingLetter(s) {
    // Add your code here
    let splited = [...s];
    let letter = ''
    while(true) {
        if(splited.length===0){
            break;
        }
        let reduced = splited.filter(elem=>elem.toLowerCase()!==splited[0].toLowerCase());
        if(reduced.length === splited.length-1) {
            letter =splited[0];
            break;
        }
        splited = reduced;
    }
    return letter
  }

  console.log(firstNonRepeatingLetter('sssedd'));