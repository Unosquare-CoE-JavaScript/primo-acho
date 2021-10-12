
function calculator() {
    //these are the variables that closure will remember
    var result;
    var operator="";
    var entry = "";
    const operators =["+","-","*","/"];
    var previousValue = "";
    
    return calculate;
    //this function is returned, so the closure is active
    function calculate(param) {
        if(previousValue=== "=") {
            result= undefined;
            operator="";
            entry = "";
        }
        //check if the operator is valid and we did not enter an operator previusly
        if (operators.some(op=>op===param) && !operators.some(op=>op===previousValue)) {
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
        //with this we resolve all operations and reset variables
        if (param === "="){
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
        //this case takes part if we still want to concat numbers
        if(/^-?\d+$/.test(param)){
            entry = entry+param;
        }
        previousValue=param;
    }
}
//defining this calc let the closure be alive
var calc = calculator();
