// Temporal Dead Zone and Hoisting (200%)

// Temporal Dead Zone simply means when using 'let and const' you cannot access a variable before its initialization

// Hoisting is a phenomena in javascript where we we can access the variable declared using var keyword even before its initialization, because javascript interpreter parses all the value before jumping in to the intialization and execution.

// var is function scoped variable
// let and const is

{
  // TDZ started ---
  // Tdz exist here
  // Tdz exist here
  console.log(favFood); // Tdz exist here
  // Tdz exist here
  var favFood = "Biriyani"; //TDZ ends here
}

// Execution Phase = Creation Phase(memory allocation) and Execution phase (code of execution )
// SyntaxError, Reference Error
