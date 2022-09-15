// This known as factorial
// Factorial 0f 4! = 4*3*2*1
// Factorial 0f 5! = 5*4*3*2*1
function factorial(number) {
    let result = 1;
    for(let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

const results = factorial(4);

console.log(results);