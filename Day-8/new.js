// console.log('Hello world');

// Recursive Function : will call itself in its definition

// function recurse(){
//     (base condition){
//         do something
//         return;

//     }

//     recurse()

// }

// function fetchWater(count) {
//   if (count === 0) {
//     console.log("hey! no more water left");
//     return;
//   }

//   console.log("Fetching water....");
//   fetchWater(count - 1);
// }

// fetchWater(6);

// var a = 10;

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }
// console.log(factorial(3));

// IIFE - Immediately Invvoked function expression
// Self invoking function
// This function will be wrapping itself within parantheses () and it is defined in global scope and its is used to execute the function just after it is defined.
// Whenever we are defining the function meaning we dont want to pollute the outerscope

// (function () {
//   let a = 10;
//   console.log(a);
// })();

// Pure function
// For the same input it will give the same output always, there are no side effects of it..

// Both IIFE and pure function is having different use cases as IIFE is generally used for avoiding global scope pollution and pure will be used for its predictability and ease of use.

// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 10));
// console.log(add(5, 6));
// console.log(add(5, 18));
// console.log(add(5, 1));

// let result = 0;
// function imPureAdd(a, b) {
//   return (result = a + b);
// }
// console.log(imPureAdd(2, 5));


// Function Currying 

// function addition(a){
//     return function(b){
//         return a + b;
//     }
// }

// const add5 = addition(3);

// console.log(add5(5));

// const add5 = addition(10);

// console.log(add5(5));


function curriedAdd(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b - c * d;
            }
        }
    }
}


const add4 = curriedAdd(4);
const add3 = add4(3);
const add2 = add3(4)
console.log(add2(2));



// Function currying in javascript where the function with multiple arguments is transformed into a sequence of nested function, each taking a single arguments, it is used to create a special function taking fewer arguments