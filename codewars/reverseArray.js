//this is a oneline task, reverse an array without using Array.reverse

reverse=a=>a.map(a.pop,[...a])
console.log(reverse([1, 2, 3]));
