//Conditional Statements - are used to perform certain action depending upon the condition. If a particular action is satisfied we take first action or may be the second one...

//Example : On daily basis you take n number of decision like what clothes to wear, whether to go to office by car, bike or auto, while driving should I take right or left etc...

// There are several methods to perform conditional statement
// 1. if statement - this is to tell the block of code to execute when certain condition is true
// 2. else statement - this is to tell the block of code to execute when certain condition is false
// 3. else if statement - its like chain when the first condition is false , this will check the another condition.
// 4. switch statement - will be used when we have many alternative code that should run after a particular condition is met..
// 5. ternary operator - provides easy or concise way to write if-else code in one line only..

// console.log('working');

//if statement

// if (myAge > 18) {
//   console.log("Congrats! you can vote");
// } else if (myAge >= 18) {
//   console.log("hey! you have to wait for 1 more year");
// } else {
//   console.log("sorry! you cannot vote");
// }

//ternary operator
// let myAge = prompt("enter you age");
// let result = myAge > 18 ? "congrats you can vote" : "sorry you cannot";
// console.log(result);

// let color = "green";
// let message;

// switch (color) {
//   case "red":
//     message = "stop you cannot move ahead";
//     break;

//   case "yellow":
//     message = "go with caution";
//     break;
//   case "green":
//     message = "you can go";
//     break;

//   default:
//     message = "invalid color";
// }

// console.log(message);

// Question 1

// let numbers = prompt("enter the number please");
// if (numbers % 2 == 0) {
//   console.log("given number is even");
// } else {
//   console.log("given number is odd");
// }

// pseudo code
// define three variables using let
//nested if condiitions to compare first number with second num if true execute inside block of code
// num1 with num3
// num2 with num3 else num 3

// let num1 = prompt('enter your num1'); //12
// let num2 = prompt('enter num2'); //21
// let num3 = prompt('num3') //10

// if (num1 > num2) {
//   if (num1 > num3) {
//     console.log("num1 is greatest", num1);
//   } else {
//     console.log("num3 is greatest", num3);
//   }
// }

// if (num2 > num3) {
//   console.log("num2 is greatest", num2);
// } else {
//   console.log("num3 is greatest", num3);
// }

// scope and scope chain

//Global Scope

// var c = 500;
// {
// let a = 10;
//   const b = 20;
//   var c = 30;
// }
// console.log(a);

//var is function scoped variable
// let and const are blocked scope variable
// console.log(b);
// console.log(c);

// for (let i = 1; i <= 10; i++) {
//   if(i === 8){
//     console.log('I am 8');
//     continue;
//   }
//   console.log(i)
// }

for (let i = 1; i < 10; i++) {
  console.log("i is getting printed", i);
  for (let j = 1; j < 10; j++) {
    console.log(j);
  }
}
