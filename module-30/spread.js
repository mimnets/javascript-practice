// spread operator (...) 3 dots

const numbers = [12, 85, 999, 43];
const largest = Math.max(...numbers);
console.log(largest);

const numbers2 = [...numbers];

numbers2.push(123);

