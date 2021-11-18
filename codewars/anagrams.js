//look for number of anagrams combinations found in array

function anagrams(word, words) {
    let matchs = [];
    let orderedAnagram = [...word].sort()
    orderedAnagram = orderedAnagram.join('')
    matchs = words.filter(elem=>{
        return orderedAnagram === ([...elem].sort()).join('')
    });
    return matchs;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))