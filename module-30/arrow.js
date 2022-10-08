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

// no parameter arrow function
const getpie = () => 3.14;

// Multi line arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}
const result = add(10, 20);
console.log(result);