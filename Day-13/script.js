//BOM - Browser Object Model
// DOM - Document Object Model

// Window - it is itself an entire container where all the methods, function and variable are stored. 
// Document : it is something which will holding the elements and content of the webpage.

// Window vs document (important)

// 4 Pillars of DOM 
// 1. DOM - checked
// 2. Selecting of a particular element
// 3. Accessing the elements and changing the elements
// 4. change the style of the document/ element 

// Selecting a particular 5 methods 
// 1. getElementbyId
// 2. getElementsbyClassName
// 3. getElementsbyTagName
// 4. querySelector
// 5. querySelectorAll


// const heading = document.getElementById('heading')
// heading.innerHTML = 'Hello World';
// heading.innerText = 'hello world 2';
// heading.textContent = 'I will change this heading';

// console.log(heading.innerText);
// console.log(heading.textContent);
// console.log(heading.innerHTML);

// console.log(heading.getAttribute('class'));
// console.log(heading.setAttribute('class', 'random firstClass'));

// console.log(heading.setAttribute('i))

// heading.setAttribute('id', 'changedID');
// console.log(heading.getAttribute('id'));


// const myOl = document.querySelector('h2')
// const myOl = document.querySelector('#id')
// const myOl = document.querySelector('.class')
// const myOl = document.querySelector('input[type='text']')
// const myOl = document.querySelector('img[src='img.jpg']');


const myOl = document.querySelector('ol');
// console.log(myOl);
const listItem = myOl.querySelector('li');

listItem.style.color = 'red';
listItem.style.backgroundColor = 'black';
listItem.style.border = '2px solid yellow';
listItem.style.borderRadius = '20px';

