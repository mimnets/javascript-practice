/*function getSumOfAnArry(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(index, element);
    }
}

const myNumbers = [12, 34, 25, 43, 89, 45, 62, 65, 77, 78, 84];

getSumOfAnArry(myNumbers);
*/

function getSumOfAnArry(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

//find odd or even numbers in an array
function getOddNumbersOfAnArry(myNumbers) {
    for(let i = 0; i < myNumbers.length; i++) {
        const index = i;
        const element = myNumbers[index];
        if(element % 2 !== 0) {
            console.log(index, element);
}
}
}
const numbers = [12, 34, 25, 43, 89, 45, 62, 65, 77, 78, 84];
getOddNumbersOfAnArry(numbers)