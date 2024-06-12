// Regular Expression or RegEx
// In Javascript, regex are patterns used to match character combination in strings.
// They provide flexible way to search, match and manipulate text.

// flags(modifiers) - global(g), i(insensitive), m(multiline)
// ^ start of string $ end of a string
//  const regex = /^I/gm;

// const text = `Hello hello,
//  I am mr.
//  hello javascript`;

// console.log(text.replace(regex, 'hi'));
// console.log(text.match(regex));

document.getElementById("myForm").addEventListener("submit", function (event) {
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  const emailPattern = /^[\w.-]+@[\w.-]+\.\w{2,6}$/;
  //
  if (!emailPattern.test(email.value)) {
    alert("Please enter valid email.");
    event.preventDefault();
    return;
  }

  const phonePattern = /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/;
  if (!phonePattern.test(phone.value)) {
    alert("Please enter valid phone.");
    event.preventDefault();
    return;
  }

  
  alert("Form submitted successfully");
});
