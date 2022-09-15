function factorial(number) {
    let num = 1;
    let result = 1;
    while(num <= number){
        result = result * num;
        num++;
    }
    return result;
}

const fact = 5;
const facto = factorial(fact);

console.log(facto);