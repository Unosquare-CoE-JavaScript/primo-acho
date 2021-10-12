function calculator() {
    //the same variables here to preserve in the closure
    var result;
    var entry="";
    var operator="";
    // this are the methods the module returns as a closure
    var API = { number, 
        plus() { return aritmetic("+")},
        minus(){ return aritmetic("-")},
        mult(){ return aritmetic("*")},
        div(){ return aritmetic("/")},
        eq() { return equivalent() }}
    return API;

    function number(param) {
        if(/^-?\d+$/.test(param)){
            entry = entry+param;
        }
    }
    function aritmetic(param) {
        if( result === undefined ) {
            result = entry;
        } else {
            switch (operator) {
                case "+":
                    result = Number(result) + Number(entry);
                    break;
                case "-":
                    result = Number(result) - Number(entry);
                    break;    
                case "*":
                    result = Number(result) * Number(entry);
                    break;
                case "/":
                    result = Number(result) / Number(entry);
                    break;    
            }
        }
        entry="";
        operator = param;
    }
    function equivalent(param) {
        switch (operator) {
            case "+":
                result = result + Number(entry);
                break;
            case "-":
                result = result - Number(entry);
                break;    
            case "*":
                result = result * Number(entry);
                break;
            case "/":
                result = result / Number(entry);
                break;    
        }
        entry = "";
        console.log(result);
    }
}
//here we define the variable calc with the closure
var calc = calculator();

calc.number("4");
calc.plus();
calc.number("7");
calc.number("3");
calc.minus();
calc.number("2");
calc.eq();