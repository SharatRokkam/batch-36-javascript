// console.log('working');

// Function : set of code once defined that can be execute over and over again
// code again, lead to many line of code, resuable code
// function once defined needs to called or invoked,

//defining of function
// function greet(){
//     console.log('Hello, Good Morning')
// }

// //invoking or calling of a function
// greet();
// greet();
// greet();

// Parameter can be single or multiple, they are the value provided to the function in order to perform task and it could get hard coded value when function gets invoked
// function student(name, age){
//     console.log(name +" " + age)
// }

// student('Alia', 23);

// function square(num){
//     return num * num
// }

// lsquare(3);

// argument - is the value get can be provided at the time of function invocation or calling

// create a function named - employee it should written the double salary.

// function employee(num) {
//     return 2 * num
// }

// let result = employee(20000);
// console.log(result);

// default parameter
// function power(base, exponent = 2) {
//   return Math.pow(base, exponent);
// }

// console.log(power(3));

// There are 3 ways to create or define  a function
// 1. Function declaration
// 2. Function Expression
// 3. Arrow Function

//Function expression - define a variable and store the function inside it ..
// let AverageOfMarks = function (math, science, english) {
//   return (math + science + english) / 3;
// };

// console.log(AverageOfMarks(78, 55, 55));

// Arrow Function - is the shortest way of defining a function, it was introduced in ES6

// const sum = (num1, num2, num3) => {
//   console.log(num1 + num2 + num3);
// };

// sum(20, 30, 10);

// const sum1 = (x, y) => x + y;

// console.log(sum1(2,4));

// Nested Function
// Nested function is the function that can be defined inside another function, where the inner function can have the access to the outer function even when the outer has finished execution, this process is called as lexical scoping

// Closure - It is combination of inner function and lexical environment of outerfunction, simply put we can have the access to outer functions variable from inside the inner function.

// function outerFunc() {
//   let someVariable = 20;

//   function innerFunc() {
//     console.log(someVariable);
//   }

//   innerFunc();
// }

// outerFunc();

// function greet(name){
//     function greetMore(){
//         return "Hello" + name;
//     }

//     console.log(greetMore());
// }

// greet('Mihir');

// function scope


// var - function scoped , meaning if it is defined inside the function it wont be accessible to outside value
// function NewFunc() {
//     var globalVar = 100;
//     console.log(globalVar);

// }

// NewFunc();
// console.log(globalVar);


// Anonymous Function - Function that does not have any name, and it is passed to a variable inorder to execute 
let sum = function(num1, num2){
    return num1 + num2
}

console.log(sum(2, 4));
