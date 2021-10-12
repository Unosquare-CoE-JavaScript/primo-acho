class CodeBuilder {
    constructor(className){
        this.className = className;
        this.fields=[];
    }
    addField(name) {
        this.fields.push(name);
    }
    toString() {
        return `
    class ${this.className} { 
        constructor (${this.fields.join(',')}) {
            ${[...this.fields.map(f=>`this.${f} = ${f}; \n`)]}
        }
    }`;

    }
}

let cb = new CodeBuilder('Person');
cb.addField('name')
cb.addField('age');

console.log(cb.toString());