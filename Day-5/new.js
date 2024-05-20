for loop
for in loop
for of loop
while and do while

for in loop - block of code that gets executed or iterated over an object

let Student = {
    Fname : 'Raghav',
    Lname : 'Thomas',
    age : 25,
    rollno : 2222
}

for(let key in Student){
    console.log(key + ': ' + Student[key])
}

Array.forEach

let fruits = ['mango', 'banana', 'grapes'];

for(let x in fruits){
    console.log(x + ': ' + fruits[x])
};

for of - The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object

let bikes = ["RX100", "NinjaH2", "ZMR", "ZX", "R15"];

for (const bike of bikes) {
  console.log(bike);
}

let greeting = "GoodMorning";

for (greet of greeting) {
  console.log(greet);
}

object - json

{
    {Name : 'SaiKiran',
    age: 24,
    passOut : 2020
},
    {Name : 'SaiKiran',
    age: 24,
    passOut : 2020
},
    {Name : 'SaiKiran',
    age: 24,
    passOut : 2020
},
    {Name : 'SaiKiran',
    age: 24,
    passOut : 2020
},
},

}

while - this loop executes until the specified condition is true and stops when it gets false
and do while

let i = 1;

while (i < 10) {
  console.log(i);
  //   i++;
  i += 1;
}

isNan - Not a number

let userInput;

do {
  in prompt whatever value we give no matter if it is string or number it will be treated as string
  userInput = prompt("Enter a valid number between 1 to 10");
  userInput = Number(userInput);
} while (isNaN(userInput) || userInput > 0 || userInput < 11);

console.log(`The value entered is ${userInput}`);


let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);