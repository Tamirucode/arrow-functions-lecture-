/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
//function addTwoNumbers(a,b){
  //  return a + b;
//}
//let sum = addTwoNumbers(2,3)
//console.log(sum)
// Arrow Function With Parameters

const addTwoNumbers=(a,b) =>{
    return a + b;
}
let sum = addTwoNumbers(2,3)
console.log(sum)

// Single Line Arrow Function With Parameters
//const addTwoNumbers2=(a,b) => (a+b); also valid
const addTwoNumbers3=(a,b) => a+b;
let sum3= addTwoNumbers3(2,8)
console.log(sum3)

// Implicit Returns

saySomething=messages=>console.log(messages)
saySomething('Hello there!')
//empty close bracket tell javascript define function
const sayHello=()=>console.log('hello')
sayHello()
// Returning Multiple Lines
const returnMultipleLine=()=>(
        `<p>
        This is return multiple line strings
        </p>`
)
console.log(returnMultipleLine())