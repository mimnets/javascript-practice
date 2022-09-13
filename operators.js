// different types of arithmetic operators
/*
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
*/
var apple = 200;
var mango = 130;
var fruits = 0;

fruits = apple + mango;
var tax = 2; // 2 percent

var fruitsTax = (fruits * 2) / 100;

var fruitsPrice = fruits + fruitsTax;

console.log(fruitsPrice);
//different types of assignment operators
/*
=
+=
-=
/=
*=
++
--
%=
*/

//apple price increase with += and ++ operator
apple += 30;

apple++;

// console.log(apple);

// mango price decrease with -= and -- operator
mango -= 30;
mango--;

var guava = 30;
// console.log(mango);

//comparison with operator

if (mango > apple){
    console.log('Buy apple');
}
else if (mango < apple){
    console.log('Buy mango');
}    