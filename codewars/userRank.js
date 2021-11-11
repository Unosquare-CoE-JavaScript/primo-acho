class User {
  constructor() {
    this.rank = 7;
    this.progress = 91;
  }

  getDifference(level) {
    if(this.rank<0 && level>0) {
      return level - this.rank - 1;
    } else {
      return level - this.rank;
    }
  };

  incProgress(level) {
    console.log(this.rank, this.progress);
    if(level>8 || level < -8 || level ===0) {
      throw new Error('invalid level')
    }
    if (this.getDifference(level)<-2) {

    } else if ((this.getDifference(level)==-2 || this.getDifference(level)==-1) && this.rank!==8) {
      this.progress += 1; 
    } else if((this.getDifference(level) === 0) && this.rank!==8) {
      this.progress += 3; 
    } else if(this.rank!==8){
      this.progress = this.progress + (10 * this.getDifference(level) * this.getDifference(level));
    }
    if(this.progress>99 && this.rank<8 ) {
      this.rank = this.rank + (Math.trunc(this.progress/100)) ;
      this.rank = (this.rank===0)? 1:this.rank;
      this.progress = this.progress % 100;
      if(this.rank==8) {
        this.progress = 0;
      }
    }
  }
}

var user = new User();

console.log(user.rank)// => -8
console.log(user.progress)// => 0
user.incProgress(8)
console.log(user.progress)
//user.incProgress(-5) // will add 90 progress
//console.log(user.progress) // progress is now zero
console.log(user.rank)