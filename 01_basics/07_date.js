let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString()) // day month date year
// console.log(myDate.toISOString()) //2024-10-07T02:14:57.270Z -> upto 07 is understood after that not understood
// console.log(myDate.toJSON()) //same as toISOString()
// console.log(myDate.toLocaleDateString()) // it gives month date year 10/7/2024
// console.log(myDate.toLocaleDateString('en-IN')) // it gives date month year 7/10/2024
// console.log(myDate.toLocaleString()) // gives date and time too
// console.log(myDate.toLocaleString('en-IN')) // gives date and time too


// console.log(typeof(myDate)) // object


//********month in js is started with 0 */
let myCreatedDate= new Date(2024,0,28,5,8,26)// format of yr, month,date,hr,min,sec with jan as 0 
// console.log(myCreatedDate.toLocaleString())//1/28/2024, 5:08:26 AM

// dikkat
// let myCreatedDate1= new Date("2024-00-17")//Invalid Date 
// let myCreatedDate1= new Date("2024-01-17") 
let myCreatedDate1= new Date("01-17-2024") // in india mm-dd-yyyy
// console.log(myCreatedDate1)

let myTimeStamp=Date.now();

// console.log(myTimeStamp);//a long number 1728268190228 but can't be used in anything like you can't get the time from it actually it is the time from the start considered ie something in 1970
// console.log(myCreatedDate.getTime()) //now this and myTimeStamp are comparable

//the above timestamps are in milisecs
//to get in secs
// console.log(Math.floor(myTimeStamp/1000))//timestamp in secs


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());//will give no. which starts with 0 as Jan     so to remove the confusion add 1
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long"
})