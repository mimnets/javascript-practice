function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
    // console.log(sum);
}

// var total = add(2, 4);

// console.log('total', total);

function bringSingara(money){
    var singaraprice = 15;
    var quantity = money / singaraprice;
    return quantity;
}

var myTaka = 1000;
var sigaras = bringSingara(myTaka);

console.log(sigaras);