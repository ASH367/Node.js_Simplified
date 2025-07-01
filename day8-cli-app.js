const method = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);
function calculator(method, num1, num2){
    if (method === "sum"){
        return sum(num1, num2);
    }
    else if (method === "subtract"){
        return subtract(num1, num2);
    }
    else if (method === "multiply"){
        return subtract(num1, num2);
    }
    else if(method === "divide"){
        return divide(num1, num2);
    }
    else{
        console.log('Invalid operation. Use sum, subtract, multiply, divide.');
    }
}

function sum(num1, num2){
    return(num1 + num2);
}

function subtract(num1, num2){
    return(num1 - num2);
}

function multiply(num1, num2){
    return(num1 * num2);
}

function divide(num1, num2){
    return(num1/num2);
}

console.log(calculator(method, num1, num2));