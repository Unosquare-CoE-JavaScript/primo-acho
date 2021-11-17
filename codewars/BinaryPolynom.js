//polynom is defined by only an array of completed polynoms 0 is represented by -1 

BinaryPolynom = (() =>{
    let polynoms= []
    let deg = null;
    return {
        deg,
        polynoms,
        fromPowers(values) {
            if(values.length ===0) {
                polynoms = [-1]
            } else {
                polynoms = [...values];
            }
            this.updateDeg()
            return this;
        },
        toString() {
            this.polynoms = this.polynoms.sort((a, b)=>b-a);
            return this.polynoms.map(monom=> monom===-1? 0 :`x^${monom}`).join(' + ')
        },
        fromDegree(deg) {
            this.polynoms = [deg];
            this.updateDeg()
            return this;
        },
        updateDeg() {
            this.deg = this.polynoms.reduce((max, curr)=>max>curr?max:curr);
        },
        add(n) {
            let newPolynom = []
            this.polynoms.forEach(elem=>{
                if(!n.polynoms.some(mon=>mon===elem)){
                    newPolynom.push(elem);
                }
            })
            this.polynoms = newPolynom;
            return this;
        }
    }
})()

console.log(BinaryPolynom.fromPowers([1,3]).add(BinaryPolynom.fromPowers(1,5)).toString());

class P {
    constructor(n) {this.val = n;}
    get deg() {return this.val<2?this.val-1:this.val.toString(2).length-1;}
    add(p) {return new P(p.val^this.val);}
    mul(p) {return new P([...p.val.toString(2)].reverse().reduce((s,d,i)=>s^(d*this.val*2**i),0));}
    divMod(p) {
      var [q,r] = [0,this.val];
      for(let s=this.deg-p.deg; s>=0; s--) {
        q*=2;
        if(r>=2**(p.deg+s)) [q,r] = [q+1, r^(p.val*2**s)];
      }
      return [new P(q), new P(r)];
    ;}
    fldMul(p) {return this.mul(p).divMod(new P(283))[1];}
    toString() {return this.val?[...this.val.toString(2)].reverse().map((d,i)=>[+d,i]).filter(([d,_])=>d).map(([_,i])=>i?`x^${i}`:'1').reverse().join(' + '):'0';}
  }
  
  var BinaryPolynom = {
    ZERO: new P(0), ONE: new P(1), fromDegree: n=>new P(2**n), fromPowers: ps=>new P(ps.reduce((s,p)=>s+2**p,0))};