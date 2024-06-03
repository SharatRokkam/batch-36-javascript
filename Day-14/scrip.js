// const listItems = document.querySelectorAll('#items')

// listItems.forEach(function(li){
//     li.style.color = 'white';
//     li.style.backgroundColor = 'tomato';
//     li.style.border = '2px solid black';
//     li.style.borderRadius = '10px';
//     li.style.display = 'inline-block';
//     li.style.padding = '20px'
// })

// listItems.style.backgroundColor = 'tomato';

// const element = document.getElementsByTagName('h2');
//  document.getElementsByTagName('h2')[1].innerHTML = 'This is also changed';

// console.log(element)
// element[0].innerHTML = 'heading changed'
// document.getElementById('head').innerHTML = 'heading Changed';

// const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[6].innerHTML)

// for(let i = 0; i< parent.children.length; i++){
//     console.log(parent.children[i].innerHTML)
//     parent.children[i].style.color = 'blue';
//     parent.children[i].style.fontSize = '25px';
//     parent.children[i].style.color = 'blue';
// }

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const div = document.createElement("div");
console.log(div);
div.className = 'firstClass';
div.id = 'myID';
div.setAttribute = ('title', 'someRandomTitle');
div.style.backgroundColor = 'white';
div.style.color = 'green';

div.style.padding = '20px';
div.style.display = 'inline-block';
// div.innerText = 'Learning DOM';
const  addText = document.createTextNode('Learning DOM');

div.appendChild(addText)
document.body.appendChild(div);

