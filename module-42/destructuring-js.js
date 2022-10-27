// Array destructuring

const numbers = [48, 34];
// Old way
const x = numbers[0];
const y = numbers[1];

// Best way
const [a, b] = [48, 34];
const [c, d] = numbers;

// 2. Object destructuring

const alu = {name: 'Alu', price: 17};

const {name, price} = {name: 'Alu', price: 17};

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'Mac',
    languages: ['JS', 'Python'],
    specifications:{
        height: 67,
        weight: 69,
        address: 'Kamar Para',
        drink: 'Water'
    }
}

const {machine, ide} = employee;
const {weight, address} = employee?.specifications?.drink;

// ? between object structure is called optional chaining