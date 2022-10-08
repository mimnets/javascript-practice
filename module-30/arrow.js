// function declartion
function add(first, second){
    const total = first + second;
    return total;
}

// function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

// Anonymous function expression
const add2 = function (first, second){
    const total = first + second;
    return total;
}

// arrow function
const add3 = (first, second) => first + second;

const result = add(10, 20);
console.log(result);