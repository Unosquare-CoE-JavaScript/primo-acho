//this functions verify whether two arrays has te same structure or not
Array.prototype.sameStructureAs = function (other) {
    //valid if args are array
    if(!Array.isArray(this) || !Array.isArray(other)){
        return false;
    }
    //valid same length
    if(this.length !== other.length) {
        return false;
    }
    //valid subArrays structure
    for(let i = 0; i<this.length;i++) {
        if(Array.isArray(this[i]) && Array.isArray(other[i])){
            if(!this[i].sameStructureAs(other[i])){
                return false;
            }
        }
        if((Array.isArray(this[i]) && !Array.isArray(other[i])) ||
        (!Array.isArray(this[i]) && Array.isArray(other[i]))) {
            return false;
        }
    }
    return true;
};

console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ]] ));