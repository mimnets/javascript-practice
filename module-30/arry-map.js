const numbers = [2, 8, 4, 6, 3];
const output = [];

for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output)

const doubleIt = num => num * 2;

// function inside the map

const makeDouble = numbers.map(num => num * 2);

console.log(makeDouble)