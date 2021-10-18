class Departament {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const dep = new Departament('Casa');
console.log(dep);
