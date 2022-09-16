const para = document.createElement("p");
const node = document.createTextNode("hello world");

const p1 = document.getElementById('p1');
const div = document.getElementById('div');

para.appendChild(node);
div.insertBefore(para, p1);