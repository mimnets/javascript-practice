var student = { 
    id: 115, 
    name: 'Solaiman Khan', 
    class: 9, 
    marks: 98
};

var mobile = {
    brand: 'Samsung',
    price: 19000,
    storage: 64,
    camera: '7MP'
};

var objectProperties = mobile.brand;
console.log(mobile);
mobile.camera = '12mp'; //this is how to change object properties value
console.log(mobile);
console.log(objectProperties);