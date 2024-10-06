let score = "1e09"

// console.log(typeof(score));//string

let valueInNumber = Number(score);

// console.log(typeof(valueInNumber));
// console.log(valueInNumber);// NaN not a number   but still typeof will return a number type

// if the score  is not a number in any form like string, then conversion to number will lead to making it NaN 

// if the score  is null(object), then conversion to number will lead to making it 0

// if the score  is undefined, then conversion to number will lead to making it NaN



// ***** in typeof it returns "number" ie. all in small but while conversion we need to write the first letter as capital




// "33" => 33
// "33hj" => NaN
// true = 1, false =0


let isLoggedIn = 6

let booleanConversion = Boolean(isLoggedIn)
// console.log(booleanConversion);

// 1/>1 => true, 0=> false
//""=> false
//  " "=> true ie. anything in "" can lead to true




// **************Operations**********************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2**3)// ** acts like power
// console.log(typeof(2/3))// it gives number ie not int


let str1= "hello"
let str2= " pika"
let str3 =str1+ str2
// console.log(str3)
// problem starts here
// console.log("1"+2);//12
// console.log(1+"2");//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32

// console.log(2+3*4-5)


console.log(+true);
console.log(+"ghj");