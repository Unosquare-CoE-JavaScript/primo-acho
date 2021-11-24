//one line task, filter arrays that are no in the range given

checkRange=(a,x,y,c=0)=>a.map(v=>c+=x>v==v>y)|c
checkRange=(a,x,y)=>a.map(v=>d+=x>v==v>y,d=0)|d
checkRange=(a,x,y)=>a.map(b=>n+=b<x==b>y,n=0)|n

console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],1,7))