// Array Methods
// Push() : Adds one or more elements to the end of an array and returns the new length of the array.

// let innoStudents = ["Mihir", "Saikiran", "Ansh", "Rakesh", "Kartheek"];
// innoStudents.push("Srikanth");
// innoStudents.push('Monish');
// console.log(innoStudents);

// pop(): Removes the last element from an array and returns that element.

// innoStudents.pop();
// console.log(innoStudents);

// shift(): Removes the first element from an array and returns that element.
// innoStudents.shift();
// console.log(innoStudents);

//unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// innoStudents.unshift('Vamsi');
// console.log(innoStudents);

// slice(): Returns a shallow copy of a portion of an array into a new array selected from start to end (end not included).
// let innoStudents = ["Mihir", "Saikiran", "Ansh", "Rakesh", "Kartheek"];

// let slicedItem = innoStudents.slice(1, 4);
// let slicedItem = innoStudents.slice(-3)

// console.log(innoStudents);
// console.log(slicedItem);

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The splice() method is highly flexible, allowing you to:

// Remove elements from an array.
let innoStudents = ["Mihir", "Saikiran", "Ansh", "Rakesh", "Kartheek"];

// let newArray = myArray.splice(start, deleteCount, item1, item2, item3)
// let newArray = innoStudents.splice(2, 2)
// console.log(newArray);
// console.log(innoStudents);

// Add new elements to an array.

// let addElement = innoStudents.splice(1, 0, "Vamsi", "Monish");
// console.log(innoStudents);

// Replace existing elements with new ones.
// let replaceElement3 = innoStudents.splice(
//   2,
//   2,
//   "Bhogeswar",
//   "Vedashri",
//   "Sharat"
// );

// console.log(innoStudents);
// Combine removal and addition in a single operation.
// let replaceElement = innoStudents.splice(1, 1, "Navya");
// console.log(innoStudents);

//forEach(): Executes a provided function once for each array element.

// let fruits = ['apple', 'grapes', 'banana', 'pineapple'];

// fruits.forEach(fruit => console.log(fruit))

// Map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

// let numbers = [2, 4, 5, 6, 8];
// let double = numbers.map((num) => (num * 2));
// console.log(double);

//filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// let evenNumbers = numbers.filter((even) => even % 2 !== 0);
// console.log(evenNumbers);

//reduce():  Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let numbers = [2, 4, 5, 6, 7];
let variableNew = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(variableNew);


//sort: Sorts the elements of an array in place and returns the array.

// let fruits = ['apple', 'grapes', 'banana', 'pineapple'];
// fruits.sort();
// console.log(fruits);

//reverse: Reverses the order of the elements in an array in place and returns the array.
// let fruits = ['apple', 'grapes', 'banana', 'pineapple'];
// fruits.reverse()
// console.log(fruits);

//find, every, some, findIndexOF - array methods (Home Work)