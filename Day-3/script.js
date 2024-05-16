// console.log('working');

// Array is an object to store multiple data under one single variable name
//two ways to define an array - Array literal and array constructor
// Array name, elements, array index which starts with 0 always, array length

// 1. Array Literal
// let myArray = [];
// let myArray2 = ['10', 20, 'hello', true];

// console.log(myArray)
// console.log(myArray2[4]);

// 2. Array Constructor
// let newArray = new Array();
// let newArray2 = new Array('Pink', 'Blue', 'Green');
// console.log(newArray2);

// newArray[0] = "mango";
// newArray[1] = "pineapple";
// newArray[2] = "Grapes";

// console.log(newArray);

// create an array using array constructor to store student marks of 69 , 30 and 20, accessing the english with its index value...

// let student = new Array();

// student[0] = 69;
// student[1] = 30;
// student[2] = 20;

// console.log(student.length);

// Object is non-primitive data type which stores data in key value pair..
// Object literal and object constructor

// const - constant

// const student = {
//     name : 'Srikanth',
//     age : 24,
//     rollno : 12384,
//     height : '150cm'
// }

// console.log(student.rollno);
// console.log(student.height);

// const StudentMarks = {
//     Maths : 39,
//     Science : 40,
//     English : 30
// }

// console.log(StudentMarks.English)

// object constructor

let newObj = new Object();

newObj.first = "BMW";
newObj.second = "Scorpio";
newObj.third = "Kia";

console.log(newObj);
console.log(Object.values(newObj));

// Operators are used to perform operation on one or more operand(value)
// Expression

// 7;
// x = 8;
// x = 83 +7;

// Operators
// 1. Arithmetic Operator
// 2. Assignment Operator
// 3. Logical Operator
// 4. comparison Operator
// 5. Bitwise Operator
// 6. Miscallenous Operator

// 1. +, -, *, /, %(Modulo), **(Exponenation), --(decrement) , ++(increment) Arithmetic Operator

let a = 10;
let b = 2;

// console.log("a + b :", a + b);
// console.log(`addition of a + b is ${a + b}`); //string interpolation
// console.log(`substraction of a - b is ${a - b}`);
// console.log(`Multipication of a + b is ${a * b}`);
// console.log(`Division of a + b is ${a / b}`);
// console.log(`Remainder of a + b is ${a % b}`);
// console.log(`Exponentation of a + b is ${a ** b}`);

// console.log(++a); //11
// console.log(--a); //10
// console.log(a--); //10
// console.log(a); 9;

// console.log(--a);  //8
// console.log(a++); //8  
// console.log(a);

// Assignment Operator
// =, +=, -=, *=, /=, %=, **=

// let x = 5;
// x += 5; //x = x + 5
// console.log(x)
// x -= 5; //x = x - 5
// x *= 5; // x = x * 5
// x /= 5; // x = x / 5
// x %= 5; // x = x % 5
// x **= 5; // x = x ** 5


// Logical Operators 
// &&, ||, ! 

// let z = 3;
// let y = 4;

// console.log(y>=z && y==z); //false
// console.log(y>z || y==z); 




// Comparison Operator 
// ==, ===, !=, !==, >, < , >=, <= 

// Difference == and === (Imp)

// When using == it will just check the value not type, but when using === which strict way to compare it will check both value and type 

// console.log(3 == '3');
// console.log(3 === '3');
// console.log(3 != '3');
// console.log(3 < 3);


// Bitwise Operator - 32 bit 

//type of and instance of(HW)

// let str = BigInt();

// console.log(typeof str);



// Question 1: 

// Three items of 10, 20, 15
// create threee variable 
// sum of all using addition 

let firstItem = 10;
let secondItem = 20;
let thirdItem = 15;

console.log(`Cost of all the items is ${firstItem+secondItem+thirdItem}`);



// Create four variable for sal, groceries, rent, electricity 
// Subtraction from salary with all the different expenses 