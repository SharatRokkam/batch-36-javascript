//BOM - Browser Object Model
// DOM - Document Object Model

// Window - it is itself an entire container where all the methods, function and variable are stored. 
// Document : it is something which will holding the elements and content of the webpage.

// Window vs document (important)

// 4 Pillars of DOM 
// 1. DOM - 
// 2. Selecting of a particular element
// 3. Accessing the elements and changing the elements
// 4. change the style of the document/ element 

// Selecting a particular element-  5 methods 
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


// const myOl = document.querySelector('ol');
// // console.log(myOl);
// const listItem = myOl.querySelector('li');

// listItem.style.color = 'red';
// listItem.style.backgroundColor = 'black';
// listItem.style.border = '2px solid yellow';
// listItem.style.borderRadius = '20px';


const listItems = document.querySelectorAll('#items')

// console.log(listItems);

listItems.forEach(function(li){
    li.style.color = 'white';
    li.style.backgroundColor = 'tomato';
    li.style.border = '2px solid black';
    li.style.borderRadius = '10px';
    li.style.display = 'inline-block';
    li.style.padding = '20px'
})

// listItems.style.backgroundColor = 'tomato';
