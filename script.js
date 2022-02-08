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


// append - insert element before closing tag
// prepend - insert element after opening tag
// before - insert element before opening tag
// after - insert element after closing tag
// let exercisesElement = document.querySelector('#exercises');

// let h1Element = document.createElement('h1'); //create
// h1Element.textContent = "H1 header"; //modify
// exercisesElement.append(h1Element); //attach


// //h2
// let h2Element = document.createElement('h2');

// h2Element.textContent = "H2 header";
// exercisesElement.append(h2Element); //attach


// //h3
// let h3Element = document.createElement('h3');//create

// h3Element.textContent = "H3 header";//modify
// exercisesElement.append(h2Element); //attach


// //h4
// let h4Element = document.createElement('h4'); //create
// exercisesElement.prepend(h4Element); //attach
// h4Element.textContent = "H4 header"; //modify

// //h5

// let h5Element = document.createElement('h4'); //create
// exercisesElement.before(h5Element); //attach
// h5Element.textContent = "H5 header"; //modify

// //h6
// let h6Element = document.createElement('h6'); //create
// exercisesElement.after(h6Element); //attach
// h6Element.textContent = "H6 header"; //modify



// // Exercises

// // let exercise1 = document.querySelector('#exercise');
// // exercise1.before('before');
// // exercise1.prepend('prepend');
// // exercise1.append('append');
// // exercise1.after('after');
// // exercise1.replaceWith('replaced');

// let buttonElement = document.createElement('button');
// document.body.prepend(buttonElement)
// buttonElement.textContent = "Launch Meeting";//modify
// buttonElement.style.backgroundColor = "blue";
// buttonElement.style.color = "white";
// buttonElement.style.padding = "10px 25px";
// buttonElement.style.borderRadius = "10px";
// buttonElement.style.border = "none";






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


// // Create TABLE
// let table = document.createElement('table');
// exercisesElement.prepend(table);
// // Create LI
// for (let i = 0; i < table.length; i++) {
//     let tr = document.createElement('tr');
//     table.append(tr);
//     let td = document.createElement('td');
//     tr.append(td);
//     td.style.border = "1px solid black";
//     td.textContent = shoppingList[i];
// }









// // How to copy
// let button2 = button.cloneNode();
// button2.textContent = "Hello";
// exercisesElement.prepend(button2);

// let list2 = listElement.cloneNode(true);
// exercisesElement.prepend(list2);

// // How to remove
// button2.remove();


// let colorful = document.createElement('div');
// colorful.textContent = "HELLO";
// colorful.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
// document.body.prepend(colorful);

//HELLO
// let div = document.createElement('div');
// document.body.prepend(div)
// div.textContent = "HELLO";
// div.style.fontWeight = "700";
// div.style.fontSize = "30px";    NO
// div.style.color = `rgb($()









// let buttonElement = document.createElement('button');
// document.body.prepend(buttonElement)
// buttonElement.textContent = "Launch Meeting";//modify
// buttonElement.style.backgroundColor = "blue";
// buttonElement.style.color = "white";
// buttonElement.style.padding = "10px 25px";
// buttonElement.style.borderRadius = "10px";
// buttonElement.style.border = "none";


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

// // Create TABLE
// let table = document.createElement('table');
// exercisesElement.prepend(table);
// // Create LI
// for (let i = 0; i < table.length; i++) {
//     let tr = document.createElement('tr');
//     table.append(tr);
//     let td = document.createElement('td');
//     tr.append(td);
//     td.style.border = "1px solid black";
//     td.textContent = shoppingList[i];
// }

// HOMEWORK
let divElement = document.createElement('div');
document.body.prepend(divElement);
divElement.style.display = "flex";
divElement.style.flexWrap = "wrap";

for (let i = 0; i < divElement.length; i++) {
    let articleElement = document.createElement('article');
    divElement.append(articleElement);
    let imgElement = document.createElement('img');
    imgElement.append(articleElement);
    let h3Element = document.createElement('h3');
    h3Element.append(imgElement);
    let pElement = document.createElement('p');
    pElement.append(h3Element);
    imgElement.src = "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png";
    imgElement.style.width = "100%";
    imgElement.style.marginBottom = "10px";
    h3Element.textContent = "Sample article";
    pElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate excepturi eaque autem magnam itaque sit aperiam provident enim odio modi ut sapiente doloribus impedit libero unde, tempore aut earum."
    articleElement.style.flexBasis = "25%";
    articleElement.style.flexGrow = "1";
    articleElement.style.padding = ".5%";
    articleElement.style.margin = ".5%";
    articleElement.style.boxShadow = "0 0 10px black";

  
}
