// Nested Function

// function doSomething() {
//   console.log("outer function");

//   function inner() {
//     console.log("inner function");
//   }

//   inner();
// }

// doSomething();

// Nested Function : we can create multiple level of nested function, but we dont generally in programming due to code complexity and it might create our code unreadable

// Function Scope
// Primary Rule
// 1. Variable defined inside any function cannot be accessed from anywhere outside of it, it can accessed inside only

// 2. Function can access any variable defined withing its scope

// let a = 10;
// const b = 20;
// var c = 30;
// function myFunc() {
//   console.log(a, b, c);
// }

// myFunc();


// Closure : Closure a combination of inner function and lexical environment created by outer function (Imp)



// function outer(x){
//     function inner(y){
//         return x+y;
//     }

//     return inner;
// }

// const outerFunc = outer(10);

// console.log(outerFunc)

// console.log(outerFunc(5));

// Execution Context : 
// Everything in javascript happens inside execution context 
// Javascript is synchronous single threaded language.


// Execution Context has two phases creation phase(memory allocation phase) and execution phase(code of execution)
// Whenever a code is run for the first time a global execution context is created and inside that multiple
// there can be multiple function execution context

//first the memory is allocated to the variables and function
// in code of execution, execution happens and value gets transferred or allocated to the variables and functions


// fifo and lifo
// Callstack : works on the basis lifo, last in first out, it is able to manage multiple execution very smoothly and fast.



var n = 2;
function cube(num){
    var ans = num * num * num;
    return ans;
}

var cube1 = cube(n);
var cube2 = cube(3);
