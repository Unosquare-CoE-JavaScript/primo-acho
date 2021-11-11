
const calculator = function() {
    this.evaluate = string => {
      // do code here
        let variables = string.split(' ');
            let results = []
            let num1 = null;
            let operator = null;
            for(let i=0; i<variables.length;i++) {
                if(/\d+/.test(variables[i])){
                    if(!num1)
                        num1 = variables[i];
                    else {
                        if(operator === '*' || operator === '/'){
                            num1 = operator==='*'? Number(num1) * Number(variables[i]) : Number(num1) / Number(variables[i]);
                        } else {
                            results.push(num1);
                            results.push(operator);
                            num1=variables[i];
                            operator = null;
                        }
                    }

                } else {
                    operator = variables[i];
                }

            }
            if(num1!==null) {
                results.push(num1);
            }
            variables = [...results];
            results=[];
            num1 = null;
            for(let i=0; i<variables.length;i++) {
                if(/\d+/.test(variables[i])){
                    if(!num1){
                        num1 = variables[i];
                    }
                    else {
                        num1 = operator==='+'? Number(num1) + Number(variables[i]) : Number(num1) - Number(variables[i]);
                    }

                } else {
                    operator = variables[i];
                }

            }
            if(num1!==null) {
                results.push(num1);
            }
        return results[0];
    }
  };
  var calculate = new calculator()
  console.log(calculate.evaluate('127'))
  //console.log(typeof Number('+'))


module.exports = calculator;