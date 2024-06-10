// Read
// const heading = document.getElementById("heading");
// console.log(heading);

// Create

// function addSubjects(subject) {
//   const li = document.createElement("li");
//   li.innerHTML = `${subject}`;
//   const ul = document.querySelector("#subjects");
//   ul.appendChild(li);
// }

// addSubjects("Science");

// function addSubjects(subject) {
//   const li = document.createElement("li");

//   const myCont = document.createTextNode(subject);
//   li.appendChild(myCont);
//   const ul = document.querySelector("#subjects");

//   ul.appendChild(li);
// }

// addSubjects("Computer");

// Edit (update)
// const secondSubj = document.querySelector('li:nth-child(2)');
// const secondSubj = document.querySelector("li:first-child");

// const newLi = document.createElement("li");
// newLi.textContent = "Moral Science";
// secondSubj.replaceWith(newLi);

//Edit
// const firstChild = document.querySelector("li:first-child");
// firstChild.outerHTML = `<li>History</li>`;

//remove

// const lastChild = document.querySelector("li:last-child");

// lastChild.remove();

//glowing circle

const circle = document.querySelector("#circle");
const btn = document.querySelector("#btn");

let flag = 0;

btn.addEventListener("click", function () {
  if ((flag === 0)) {
    circle.style.backgroundColor = "yellow ";
    console.log('button clicked : ON');
    flag = 1;
   
  } else {
    circle.style.backgroundColor = "transparent";
    console.log('button clicked : OFF');
    flag = 0;
  }
});
