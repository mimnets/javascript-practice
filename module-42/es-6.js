// template sting
const student = {
    name: 'Monirul Islam',
    age: 34,
    movies: ['Kala Kutta', 'Dhori Mari Hala']
}
const about = `My name is ${student.name} and I am ${student.age} years and watched ${student.movies} this movie`;

// Arrow function

const getFiftyFive = () => 55;

const addSixtyFive = num => num + 1;

const isEven = axe => axe % 2 == 0;

const addThree = (a, b, c) => a + b + c;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator - it help to creat a new array from an older array and add the elements to an array
const numbers = [34, 64, 64, 3243, 54];
const newNumbers = numbers;

numbers.push(99);

const currentNumbers = [...numbers, 8];
