function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols:["X","Y","Z","W","$","*","<","@"],
    spin() {
        if(this.position==null) {
            this.position=randMax(this.symbols.length-1);
        }
        this.position=(
            this.position+100+randMax(100)
            ) % this.symbols.length;
    },
    display(){
        if(this.position==null) {
            this.position=randMax(this.symbols.length-1);
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [
        Object.create(reel),
        Object.create(reel),
        Object.create(reel),
    ],
    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin()
        })
    },
    display() {
        for(let i =-1; i<= 1; i++) {
            let line = this.reels.map((reel)=>{
                var slot = Object.create(reel);
                slot.position= (
                    reel.symbols.length + reel.position + i 
                ) % reel.symbols.length;
                return reel.display.call(slot);
            });
            console.log(line.join("|"))
        }
    }
}

slotMachine.spin();
slotMachine.display();