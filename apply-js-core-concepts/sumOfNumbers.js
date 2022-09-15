function sumOfNumbers(number){
    let sum = 0;
 for(let i = 0; i <= number; i++){  
    sum = sum + i; 
}
return sum;
}

const totalSum = sumOfNumbers(99);

console.log(totalSum);