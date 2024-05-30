// Array Methods - Map, Filter and reduce

// array and object
// 90% of the time you have to work with array of object
let users = [
  { id: 1, name: "Srikanth", email: "srikanth@example.com", role: "frontend" },
  { id: 2, name: "Navya", email: "navya@example.com", role: "frontend" },
  { id: 3, name: "Monish", email: "monish@example.com", role: "backend" },
  { id: 4, name: "Vamsi", email: "vamsi@example.com", role: "backend" },
  { id: 5, name: "Rakesh", email: "rakesh@example.com", role: "frontend" },
];

//Code to find the frontend developer present in the array of object
// let getFrontendDev = function (users, email) {
//   let getValue = users.filter((user) => user.email === email);
//   console.log(getValue);
// };

// getFrontendDev(users, "rakesh@example.com");
// code to find the all the emails present in this array of object
// function getUserEmail(users) {
//   let anotherValue = users.map((user) => user.email);
//   console.log(anotherValue);
// }

// getUserEmail(users);

function countUserByRole(users) {
  let allTheUser = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  console.log(allTheUser);
}

countUserByRole(users);

// Objects - It is non-primitive datatype that can store multiple values in the form of key value pairs.
// 1. Object Literal
// 2. Object Constructor

// let mySym1 = Symbol("myFirstKey");

// let person = {
//   name: "Mihir",
//   age: 20,
//   [mySym1] : 'mykey1',
//   location: "hyderabad",
//   email: "mihir@google.com",
//   isLoggedIn: true,
// greeting: function(){
//   code
// }
// };

// person.name = "Ansh";
// Accessing the objects key value
// console.log(person["email"]);

// person.userInfo = function(){
//   console.log('Hello, I am Mihir');
// }

// person.userInfo()
// person.userInfo = function(){
// this keyword will be referring to the object it is defined inside
//   console.log(`Hi, I am ${this.name} and I am living in ${this.location}`);   //template literal
// }

// person.userInfo()
// console.log(person);

let secretCode = {
  name: "Rakesh",
  age: 23,
  location: "hyderabad",
  outerObject: {
    innerObject: {
      secretObj: {
        secretKey: "1233",
        secretName: "Tiger",
      },
    },
  },
};

// console.log(secretCode.outerObject.innerObject.secretObj.secretName);

// console.log(typeof secretCode);

// console.log(Object.keys(secretCode));
// console.log(Object.values(secretCode));
// console.log(Object.entries(secretCode));
// console.log(Object.hasOwnProperty('name'));

Object.freeze(secretCode);

secretCode.age = 30;
console.log(secretCode);
