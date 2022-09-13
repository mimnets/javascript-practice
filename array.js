//array declaration
var tableItems = ['mouse', 'pen', 'books', 'printer', 'bottle', 'speaker'];

// array elements
// console.log(tableItems.length);

//array index
var letIndex = tableItems.indexOf('mouse');

// console.log(letIndex);

//change a array index items value

tableItems[0] = 'watch';

//get the items of the index
 
// console.log(tableItems[0]);

// how to add an elements to the array in the last index
// tableItems.push('adapter');

// how to remove an element from the array in the last index
tableItems.pop();
console.log(tableItems);