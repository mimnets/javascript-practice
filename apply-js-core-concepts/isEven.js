// console.log(12/2);
// console.log(28/2);
// console.log(84/2);
// console.log(96/2);
// console.log(1234/2);

// console.log(13/2);
// console.log(21/2);
// console.log(87/2);
// console.log(95/2);
// console.log(1239/2);

// console.log(12%2);
// console.log(28%2);
// console.log(84%2);
// console.log(96%2);
// console.log(1234%2);

// console.log(13%2);
// console.log(21%2);
// console.log(87%2);
// console.log(95%2);
// console.log(1239%2);

/*function evenOdd(number){
    const remainder = number % 2;
    if(remainder === 0){
        console.log(number, 'is a Even number');
    }
    else {
        console.log(number, 'is a Odd number');
    }
}
*/


function evenOdd(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else {
        return false;
    }
}

const mynumberIsEven = evenOdd(393);
console.log(mynumberIsEven);