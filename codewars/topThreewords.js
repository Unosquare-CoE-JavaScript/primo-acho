//this exercise shows most 3 words used in a text

function topThreeWords(text) {
    text = text.toLowerCase();
    text = text.replace(/#+/,' ');
    text = text.replace(/:+/,' ');
    text = text.replace(/,+/,' ');
    text = text.replace(/\/+/,' ');
    text = text.replace(/\.+/,' ');
    text = text.replace(/\s'+\s/,' ');

    let splitted = text.split(/\s+/);
    let counter = {};
    splitted.forEach(element => {
        if(element !=='' && element !==' ') {
            counter[element] = counter[element]?  counter[element] + 1 : 1;  
        }
    });
    
    let values = Object.values(counter);
    values= values.sort((a,b)=>b-a);
    const result = [];
    const top = 3
    for(let i=1; i<=top;i++) {
        if(values.length>=i) {
            result.push(Object.keys(counter).find(key=>counter[key]===values[i-1]))
            delete counter[Object.keys(counter).find(key=>counter[key]===values[i-1])]
        }
    }
    return result
}

console.log(topThreeWords("  //wont won't won't "));
