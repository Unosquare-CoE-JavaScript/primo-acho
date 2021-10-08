
function calculator() {
    var result;
    var operator="";
    var entry = "";
    const operators =["+","-","*","/"];
    var previousValue = "";
    
    return calculate;

    function calculate(param) {
        if(previousValue=== "=") {
            result= undefined;
            operator="";
            entry = "";
        }
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
        if(/^-?\d+$/.test(param)){
            entry = entry+param;
        }
        previousValue=param;
    }
}

var calc = calculator();
