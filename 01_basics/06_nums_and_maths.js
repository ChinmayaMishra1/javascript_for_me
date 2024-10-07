const score =400 // here you don't explicity define it as number but it is taken so

// you can explicitly define it as number
const balance = new Number(100)
// console.log(balance);//it prints [Number: 100]
// console.log(score);// it prints 400

// console.log(balance.toString());
// //now you have all those properties of strings now

// console.log(balance.toFixed(2))// important, you will use it many a times  // this will make 2 digits after ie. 100.00
//as you have to show to the client in 2 digits after the number the price

const otherNumber = 123.8963

// console.log(otherNumber.toPrecision(4));//here this 4 is the number of significant digits you require in the ans and rounded off

const hundreds = 1000000

//now you want to know how much money it is in us standardisation and indian 

// console.log(hundreds.toLocaleString());//1,000,000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000

//********************maths ***************************/


// console.log(Math)
// console.log(Math.abs(-3))//gives the absolute value
// console.log(Math.round(4.5))//it rounds off to a number without decimals
// console.log(Math.ceil(4.5))
// console.log(Math.floor(4.5))
// console.log(Math.min(2,8,36,74,26));// here you can directly write the nums among which you want to use the min

// console.log(Math.random());//always a number between 0(inclusive) and 1(exclusive)
// console.log(Math.random()*10);//this might happen ki Math.random() generates 0.001 then after 10 multiplication also it will be 0.01 but if we require a number after 1 , then +1
// console.log((Math.random()*10)+1);

//if you want random nums all greater than min(might come) and smaller than max(might come)
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
//thing to remember is that Math.random() -> range is [0,1)

