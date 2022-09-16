const users = ["MH Murshed", "Md Nahid", "md robin khan"];

// console.log(users);

//add array items 

const users2 = [];
users2[0] = "Nahid";
users2[1] = "Mh Murshed";
users2[2] = "Md robin khan";

//console.log(users2);

//create array javascript new keyword
const user = new Array("user 1 ", "user2 ", " user3 ")

//console.log(user);

//Accessing Array Elements

const examp = ["nahid", "mh murshed", " robin"]

//console.log(examp[2]);

//array example in dom
const name = ["Md nahid", "MH Murshed", "md robin", " nadim hassan"];

// document.getElementById("demo").innerText = name;


const items = [];
const nahid = {
    year: 18,
    address: "Mymenshing",
    Education: "Diploma in CSE",
    Interest: "Programming"
}

items[0] = nahid;
items[1] = 2022;
items[2] = "hello world";
items.sort();
//console.log(items);

//access array last element 
const fruits = ["mango", "orange", "banana"];
fruits[3] = "pinapple";
fruits[4] = "jambora";
fruits[5] = "tetol"

//console.table("Your Fruits Is : ");
// console.table(fruits);

// last items
// console.table("last items is : " + fruits[fruits.length - 1]);

//array looping
const member = [{
    name: "Md Nahid",
    subtitle: "Fron end developer",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eveniet minima iure quas fugiat ",
}, {
    name: "Mh Murshed",
    subtitle: "Back end developer",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eveniet minima iure quas fugiat ",
}, {
    name: "Md Robin",
    subtitle: "Back end developer",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eveniet minima iure quas fugiat ",
}, {
    name: "Nadim Hassan",
    subtitle: "UI/UX Designer",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eveniet minima iure quas fugiat ",
}, {
    name: "noo name",
    subtitle: "noo subtitle",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eveniet minima iure quas fugiat ",
}, {
    name: "name janina",
    subtitle: "subtitle nai",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eveniet minima iure quas fugiat ",
}, {
    name: "noo name",
    subtitle: "noo subtitle",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eveniet minima iure quas fugiat ",
}, {
    name: "name janina",
    subtitle: "subtitle nai",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eveniet minima iure quas fugiat ",
}];

// for (let i = 0; i < member.length; i++) {
//     const info = member[i];
// console.log(info);
//    let box = document.getElementById('n');
//    let ul = document.createElement('ul');
//    let li = document.createElement('li');
//    let userInfo = `
//         <div class="card text-white bg-dark  shadow mb-3" style="max-width: 18rem;">
//         <div class="card-header border-bottom-2 border-warning"><small>${info.subtitle}</small></div>
//                   <div class="card-body">
//                     <h5 class="card-title">${info.name}</h5>
//                     <p class="card-text text-muted font-italic">${info.dis}</p>
//                     <button class="btn btn-outline-danger">See more</button>
//                  </div>
//          </div>
//    `
//    li.innerHTML = userInfo;
//    ul.appendChild(li)
//    box.appendChild(ul)
//}


// how to add / push any items on array using javascript.
let ns = {
    name: "nnss",
    subtitle: "nnss",
    dis: "nnss"
}
let ns2 = {
    name: "Java Script Push method",
    subtitle: "Java Script Practic",
    dis: "java script add/puss any items in array "
}
let ns3 = {
    name: "Java Script add items",
    subtitle: "Java Script Practic",
    dis: "member[member.length] = ns3;"
}
member.push(ns,ns2);
member[member.length] = ns3;
member[17] = "lulululu";

//forEach method 

function userInformations(info) {
    console.table(info);

        let box = document.getElementById('n');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let userInfo = `
            <div class="card text-white bg-dark  shadow mb-3" style="max-width: 18rem;">
            <div class="card-header border-bottom-2 border-warning"><small>${info.subtitle}</small></div>
                      <div class="card-body">
                        <h5 class="card-title">${info.name}</h5>
                        <p class="card-text text-muted font-italic">${info.dis}</p>
                        <button class="btn btn-outline-danger">See more</button>
                     </div>
             </div>
       `
        li.innerHTML = userInfo;
        ul.appendChild(li)
        box.appendChild(ul)
}
member.forEach(userInformations)

// 