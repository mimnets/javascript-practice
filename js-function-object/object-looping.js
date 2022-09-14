var shoppingItems = ['books', 'sunglass', 'shows', 'pen'];
var friendsAge = [12,23,44,5,66,77,45];
var friendsAge = {
    rahim: 12,
    monir: 78,
    abid: 23,
    kazi: 23
};

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 3,
    pen: 25
};

const keys = Object.keys(shoppingCart);
// console.log(keys);

const values = Object.values(shoppingCart);

// console.log(values);

for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
};