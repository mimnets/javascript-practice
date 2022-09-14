var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 3,
    pen: 25
};

//when we know the specific property name, we can use dot notation to get the property value
var penCount = shoppingCart.pen;

console.log(shoppingCart);
console.log(penCount);

//when we know the specific property name, we can use string notation to get the property value
var penCount2 = shoppingCart['pen'];

//Object property list with Object.keys()
var properties = Object.keys(shoppingCart);
console.log(properties);

//Object properties values list with Object.values()
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

//get the object property value in different way
var propertyName = 'mouse';
var porpertyValue = shoppingCart[propertyName];

console.log(propertyName, porpertyValue);

//set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart['mouse'] = 29;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;

console.log(shoppingCart);

