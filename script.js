// Method.1
// Create
document.body.innerHTML = "<h1>Hello world</h1>";
// Find
let h1Element = document.querySelector('h1');
// Modify
h1Element.style.color = "rgb(255, 0, 0)";

// Method.2
// Create
let h2Element = document.createElement('h2');
// Attach
document.body.prepend(h2Element);
// Modify
h2Element.textContent = "Nice to meet you";