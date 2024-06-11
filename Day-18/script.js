// API : Application Programming Interface

// JSON : JavaScript Object Notation

// {
//     "name": 'Rohan',
//     "age": 30,
//     "isEmployee" : true

// }

// JSON.parse and JSON.stringify

// JSON.parse is a method in js that parses a JSON string and converts it into a javascript object

// let jsonString = '{"name": "John", "age":32}';

// let user = JSON.parse(jsonString);

// console.log(user.name);
// console.log(user['age']);

// JSON.stringify is a method that converts the javascript object into json string

// let user = {
//   name: "JOhn Wick",
//   age: 10,
//   isHero: true,
// };

// let jsonString = JSON.stringify(user);

// console.log(jsonString);

// RecipeAPI
// Endpoint

// WebStorage API : fetch, setTimeout, setInterval, DOM

// Fetch  : Its powerful and inbuilt method in javascript to extract the data from a endpoint of an API
// XMLHttpRequest

// Status code : 200 to 299, 404, 400 , 200 - OK

// fetch("https://jsonplaceholder.typicode.com/todos/200")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("network response was not ok " + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("problem with fetch operation ", error);
//   });

//  1 to 100

async function fetchPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/35"
    );
    if (!response.ok) {
      throw new Error("network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch {
    console.error("problem with fetch operation ", error);
  }
}

fetchPost();
