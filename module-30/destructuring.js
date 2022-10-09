// Object destructuring
const fish = {name: 'Hilsha Fish', address: 'Chandpur', phone: '01743762978'};

const {phone} = fish;

console.log(phone);

// Array destructuring

const [first] = [49, 99];
console.log(first);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost] = nayoks;

console.log(king);

// Function destructuring

function getAll(){
    const fullName = ['Monirul', 'Islam'];
    return fullName;
}

const [f, l] = getAll()

console.log(f, l)