// JS Concepts required for React JS
// Fundamentals of JS

// 01. How to declare a variale using let and const

// Const is fixed and value will not changeable like - A person father's name is fixed
const myFather = 'Sultan Uddin Shanu';

// Variable name with let is can be changeable

let season = 'Rainy';
season = 'Winter';

// 02. Conditions
// Threre are 6 basic conditions avaiable: >, <, ===, !==, <=, >=
// Double / Multiple conditions: &&, ||

if(myFather === 'Sultan Uddin Shanu' && season === 'Winter'){
    console.lof('I need to go to village to meet with myFather');
}
else if(season === 'Rainy'){
    console.log('This rainy season - the weather is not good for visit village');
}
else{
    console.log('bKash some money for your father');
}

// 03. Array - We can get the array element of an array by using index, length and put an element into the array with push

const numbers = [34, 45, 56, 75, 23, 76];

numbers[45] = 55;

console.log(numbers);

// 04. For Loop, While Loop

for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.lof(number);
}

// 05. Function
function add(num1, num2){
    return num1 + num2;
} 

const result = add(num1, num2);

console.log(result);

// 06. Object
// Access object property by name
// There are 3 ways to access the property of the object

const student = {
    name: 'Monirul Islam',
    age: 34,
    movies: ['Kala Kutta', 'Dhori Mari Hala']
}

const myAge = 'age';
console.log(student.name);
console.log(student['age']);
console.log(student[myAge]);
