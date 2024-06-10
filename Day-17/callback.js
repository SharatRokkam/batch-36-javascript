// Callback Function
// function that is passed as an argument inside another function is called as callback function

// Javascript is a synchronous single-threaded language
// asynchronous programming

//a - calback queue
// Event Loop - (callstack) - 1-10

// function greet(name, callback){
//     console.log("Hi, " + name)
//     callback()
// }

// function callMe(){
//     console.log('I am callback function')
// }

// greet('Peter', callMe);

// setTimeout and setInterval - two ways of performing a task after certain interval of time.
// This is not part of javascript, it is actually a web storage api that we use with js code

// syntax
// setTimeout(() => {
//   console.log(
//     "Hi, I am SetTimeout, I will get executed just once after 2seconds"
//   );
// }, 10000);

// SetTimeout will be doing some task for one time and setInterval will be keep on doing after certain interval

// setInterval(() => {
//   console.log("Hi, I am SetInterval, I will get executed after every 2seconds");
// }, 2000);

// function printUserName(name, time, callback) {
//   setTimeout(() => {
//     console.log(name);
//     callback();
//   }, time);
// }

// function printAllusers() {
//   printUserName("A", 10000);
//   printUserName("B", 2000);
//   printUserName("C", 4000);
// }

// printAllusers();

// function printNumber(number, time, callback) {
//   setTimeout(() => {
//     console.log(number);
//     callback();
//   }, time);
// }

// Pyramid like structure which is quite unreadable and difficult to debug this will create a callback hell
// multiple use of callback funtion will creeate a callback hell
// Callback hell makes code unreadable and we should avoid using callback hell
// Promise is like heaven for callback hell, better alternative to write callback code

// function printNumbers() {
//   printNumber(1, 2000, () => {
//     printNumber(2, 1000, () => {
//       printNumber(3, 3000, () => {
//         printNumber(4, 5000, () => {
//           printNumber(5, 2000, () => {
//             printNumber(6, 10000, () => {
//               printNumber(7, 3000, () => {});
//             });
//           });
//         });
//       });
//     });
//   });
// }

// printNumbers();

//67 line should not get executed until 66 line is completed

// function printVowels() {
//   setTimeout(() => {
//     console.log("a");
//     setTimeout(() => {
//       console.log("e");
//       setTimeout(() => {
//         console.log("i");
//         setTimeout(() => {
//           console.log("o");
//           setTimeout(() => {
//             console.log("u");
//           }, 5000);
//         }, 2000);
//       }, 4000);
//     }, 1000);
//   }, 2000);
// }

// printVowels();

// Promise - Its an object, whenever we create function it will return a promise, which three, resolve, reject and pending

function printVowels(vowel, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(vowel);
      resolve();
    }, delay);
  });
}

// printVowels("a", 1000)
//   .then(() => printVowels("e", 2000))
//   .then(() => printVowels("i", 3000))
//   .then(() => printVowels("o", 5000))
//   .then(() => printVowels("u", 4000))
//   .catch((error) => {
//     console.error("An error occured", error);
//   });

async function printVowel(){
  try{
    await printVowels('a', 1000)
    await printVowels('e', 5000)
    await printVowels('i', 7000)
    await printVowels('o', 3000)
    await printVowels('u', 1000)
  }
  catch(error) {
    console.error('An error occurred', error)
  }
}

printVowel();

// Multiple use of then method is called as promise chaining

