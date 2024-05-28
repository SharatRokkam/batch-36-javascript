// Math function
// Math : abs, round, ceil, floor

// console.log(Math)

// console.log(Math.abs(7));
// console.log(Math.round(8.75));

// console.log(Math.ceil(34.8));
// console.log(Math.floor(34.8));

// let myArray = [1,45,65,4,6,8];

// console.log(Math.min(1,45,65,4,6,8));
// console.log(Math.max(1,45,65,4,6,8));

// Math.random gives number between 0 to 1
// console.log((Math.random() * 10) + 1);

// let min = 10;
// let max = 20;

// console.log(Math.floor(Math.random() * (max - min ) + min))

// ****************Date and Time********************

// let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleTimeString());

// let myNewDate = new Date(2023, 1, 3, 5, 3);
// let myNewDate = new Date('2022-2-4');
// let myNewDate = new Date(2023, 1, 3);
// let newestDate = new Date('2-21-2001');
// console.log(newestDate.toLocaleString());
// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleString());

// let myTime = Date.now();

// console.log(Math.floor(myTime/1000));

// let myNewDate = new Date();

// console.log(myNewDate.getDate());
// console.log(myNewDate.getFullYear());
// console.log(myNewDate.getMonth());



// REVERSE A STRING 
// const myOriginalString = 'javascript';

// const reverseString = myOriginalString.split('').reverse().join('');

// console.log(reverseString);

//PALINDROME OF STRING
// Given a string write a program to check if the string is palindrome or not
//madam, radar, 141, 444

// const palindromeCheck = "madam";

// const checkPalindrome = palindromeCheck.split("").reverse().join("");

// if (palindromeCheck === checkPalindrome) {
//   console.log("Given string is palindrome");
// } else {
//   console.log("Given string is not palindrome");
// }



//********************Array and Methods *******************/

// We can define arrays in two ways 
// 1. array literal []
// 2. array constructor

// Array is used to store collection of values, it can store multiple values like Number, string, boolean, object and many more

// let myArray = [1, 3, 'newValue', true]

// let myArray2 = new Array(1, 3, 'newValue2', true)

// Accessing the element of an array 
// console.log(myArray[3]);

//length of an array
// let arrayLength = myArray.length;
// console.log(arrayLength);


// concatenation of an array
let array2 = [20, 30, 40];

// console.log(myArray + array2);
// const concatedArray = myArray.concat(array2, 'apple');

// Rest and Spread (...)
// Spread operator are used to expand the iterable of arrays and string and also in function calling
// Rest Operator will be used to pass parameter with multiple values 

let array3 = [31, 32, 33];

let newArray = [...array2, ...array3]
console.log(newArray);
// console.log(concatedArray);
