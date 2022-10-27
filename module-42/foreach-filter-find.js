// Array of objects

const products = [
    {name:'Laptop', price: 32000, brand: 'Lenovo', color: "Silver"},
    {name:'Mobile', price: 22000, brand: 'Apple', color: "Black"},
    {name:'Watch', price: 11000, brand: 'Samsung', color: "White"},
    {name:'Sunglass', price: 2000, brand: 'Ray Ban', color: "gray"},
    {name:'Monitor', price: 18000, brand: 'LeHPnovo', color: "Black"}
]

// 1. Map with arrow function - returns a value as an array and we need to store that value to a variable

const brands = products.mao(product => product.brand);

console.log(brands);

// 2. ForEach doesn't return a value - it works like a loop
// ForEach single line
products.forEach(product => console.log(product));

// ForEach Multi line
products.forEach(product =>{
    console.log(product);
})

// 3. Filter returns conditional data

const cheap = products.filter(product => product.price <= 10000)
console.log(cheap);

// 4. Find returns only one data, when it found first items it will delivered and stops and display results as an object

const special = products.find(product => product.name.includes('n'));
console.log(special);


