// primitive 

// 7 types : String, number, boolean, null, undefined, symbol, BigInt

// javascript is a static or dynamic kind of language -> ans = dynamic 
// as 

const score =100 // here we are not defining that score is what kind of datatype, it automatically recognises
const scoreValue =100.3;

//lets see symbol
const id =Symbol('123')
const anotherId =Symbol('123')

console.log(id);
console.log(anotherId);
//so are id and anotherId same????
// lets see

console.log(id===anotherId);//false


// use of bigInt
const bigNumber = 45632103654563223215452;// this is big compared to number 
// const bigNumber1 = 45632103654563223215452n;// converted to bigInt  last me n

// reference (non primitive)

// array, objects, functions  => inka ddata type object hi hota hai 
// function ka object function hota hai  but will show function

const heros = ["me","papa","mumma","bhai"]//array
let myObj = {
    name: "chinmaya",
    age: 21
}

const myFunction = function(){
    console.log("hello world");
}

//pata karen kaise datatype
console.log(typeof(bigNumber1));// if we don't define it previously then it will be undefined



//***************************************************** */

//memory management

let myYoutubename = "hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);//here it will be hitesh
console.log(anothername);//it will be chaiaurcode

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com";
console.log(userOne.email);//hitesh@google.com
console.log(userTwo.email);//hitesh@google.com


//the static things are given by copy while the non primitive ones are given by references