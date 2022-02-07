// Method.1
// Create
// document.body.innerHTML = "<h1>Hello world</h1>";
// // Find
// let h1Element = document.querySelector('h1');
// // Modify
// h1Element.style.color = "rgb(255, 0, 0)";

// // Method.2
// // Create
// let h2Element = document.createElement('h2');
// // Attach
// document.body.prepend(h2Element);
// // Modify
// h2Element.textContent = "Nice to meet you";


// append - insert element before closing 
let exercisesElement = document.querySelector('#exercises');

let h1Element = document.createElement('h1'); //create
h1Element.textContent = "H1 header"; //modify
exercisesElement.append(h1Element); //attach


//h2
let h2Element = document.createElement('h2');

h2Element.textContent = "H2 header";
exercisesElement.append(h2Element); //attach


//h3
let h3Element = document.createElement('h3');//create

h3Element.textContent = "H3 header";//modify
exercisesElement.append(h2Element); //attach


//h4
let h4Element = document.createElement('h4'); //create
exercisesElement.prepend(h4Element); //attach
h4Element.textContent = "H4 header"; //modify

//h5

let h5Element = document.createElement('h4'); //create
exercisesElement.before(h5Element); //attach
h5Element.textContent = "H5 header"; //modify

//h6
let h6Element = document.createElement('h6'); //create
exercisesElement.after(h6Element); //attach
h6Element.textContent = "H6 header"; //modify



// Exercises

// let exercise1 = document.querySelector('#exercise');
// exercise1.before('before');
// exercise1.prepend('prepend');
// exercise1.append('append');
// exercise1.after('after');
// exercise1.replaceWith('replaced');

let buttonElement = document.createElement('button');
document.body.prepend(buttonElement)
buttonElement.textContent = "Launch Meeting";//modify
buttonElement.style.backgroundColor = "blue";
buttonElement.style.color = "white";
buttonElement.style.padding = "10px 25px";
buttonElement.style.borderRadius = "10px";
buttonElement.style.border = "none";






//
// let shoppingList = ['Apple', 'Banana','Pinapple'];

// //create ul 
// let listElement = document.createElement('ul');
// exercisesElement.prepend(listElement);
// //create li

// for (let i = 0; i < shoppingList.length; i++) {
  

// let listItemElement = document.createElement('li');
// listElement.append(listItemElement);
// listItemElement.textContent = shoppingList[i];
// }


//Таблица
 let table = ['Apple', 'Banana', 'Pinapple'];

 let listElement = document.createElement('table');
 exercisesElement.prepend(listElement);
 for (let i = 0; i < shoppingList.length; i++) {
   let tr = document.createElement('tr');
  
   table.append(tr);
   let td = document.createElement('td');
   tr.append(td);
   td.style.border = "1px solid black";
   td.textContent = shoppingList[i];
   
 }











// // How to copy
// let button2 = buttonElement.cloneNode();
// button2.textContent = "Hello";
// exercisesElement.prepend(button2);

// // let button3 = button.cloneNode();
// // button3.textContent = "World";
// // button3.style = "purple"
// // exercisesElement.prepend(button2);


// // How to remove
// button2.remove();


// let list2 = listElement.cloneNode(true);
// exercisesElement.prepend(list2);



//HELLO
// let div = document.createElement('div');
// document.body.prepend(div)
// div.textContent = "HELLO";
// div.style.fontWeight = "700";
// div.style.fontSize = "30px";    NO
// div.style.color = `rgb($()
