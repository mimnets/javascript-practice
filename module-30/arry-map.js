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

const products = [
    {
        id:1,
        name: 'laptop',
        price: 480000
    },
    {
        id:2,
        name: 'mobile',
        price: 80000
    },
    {
        id:2,
        name: 'watch',
        price: 23000
    }
]