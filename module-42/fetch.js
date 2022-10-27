// 1. Stringify, Parse
const student = {
    name: 'Monirul Islam',
    age: 34,
    movies: ['Kala Kutta', 'Dhori Mari Hala']
}

const studentJSON = JSON.stringify(student);

console.log(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

// 2. Fetch

fetch('url')
.then(res => res.json())
.then(data => console.log(data));

// Object kets, values

const keys = Object.keys(student);
const values = Object.values(student);

// For
const numbers2 = [23,23, 534, 53, 67, 88];

numbers2.forEach(num => console.log(num));

numbers2.map(num => num * 2);

// for of on array like object
// loop on an object using for in

// add or remove from an array


const products = [
    {name:'Laptop', price: 32000, brand: 'Lenovo', color: "Silver"},
    {name:'Mobile', price: 22000, brand: 'Apple', color: "Black"},
    {name:'Watch', price: 11000, brand: 'Samsung', color: "White"},
    {name:'Sunglass', price: 2000, brand: 'Ray Ban', color: "gray"},
    {name:'Monitor', price: 18000, brand: 'LeHPnovo', color: "Black"}
];

const newProduct = {name: 'webcam', price: 700, brand:'logitech'};

// copy products array and add to newProduct 

const newProducts = [...products, newProduct];


// create a new array without one specific item

// remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');