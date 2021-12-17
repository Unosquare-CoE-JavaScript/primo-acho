class Go {
    constructor(size) {
        if(size > 25) {
            throw new Error('Cannot be larger than 25 x 25')
        }
        this.rowInit = 65 //this represent A in ascii
        this.size = size;
        this.goTab = this.fillTab(size);
        this.turn = 'x' //this is the first move
        this.states = [];
    }
    
    fillTab(size) {
        let tab = [];
        for(let i = 0; i< size;i ++) {
            let row = [];
            for(let j = 0; j < size;j ++) {
                row.push('.');
            }
            tab.push(row);
        };
        return tab;
    }

    show() {
        for(let i = 0; i < this.size;i++) {
            console.log(this.goTab[i].join(''))
        };
    }
    get board() {
        return this.goTab;
    };

    move(movement) {
        let move = [...movement]
        if(this.validMovement(move)) {
            this.savePrevious();
            this.goTab[move[0]-1][move[1].charCodeAt(0)-this.rowInit] = this.turn;
            this.eraseCaptured();
            this.pass();
        } else {
            throw new Error('cannot achieve this movement');
        }
    };
    pass() {
        this.turn = 'x'? 'o': 'x';
    };

    validMovement(movement) {
        //valid not overpassed
        if(this.goTab[move[0]-1][move[1].charCodeAt(0)-this.rowInit] !== '.') {
            return false;
        }
        //valid not suicide

        //valid not generating a bucle
        return true;
    };
    savePrevious() {
        this.states.push(this.goTab);
    }
    eraseCaptured() {
        let killable = (this.turn='x')?'o':'x';;
        let killablePieces = [];
        for(let i=0;i<this.size;i++) {
            for(let j = 0; j<this.size;j++) {
                let groups = groupsNear(i,j);
            }
        }
        return true;
    }

    belongsToGroup(i,j) {
        let near = [];
        //
        if(i==0) {
            
        }
    }
    //TO-DO: handy capstones logic to add 
}

let game = new Go(9);



game.move(...['3D','4A']);

game.show();