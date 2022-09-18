const country = 'Bangladesh';

const age = 52;

const isIndependent = true;

const student = {id: 121, class: 11, name: 'Agun'};

const friends = [13, 14, 11, 43, 23, 43, 67];
function add(num1, num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);

console.log(typeof student);

console.log(typeof friends); 
// To check array

console.log(Array.isArray(friends));

// To check the item is in the array
console.log(friends.includes(13));

console.log(typeof add);