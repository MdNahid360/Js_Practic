// conver string formate
const frind = ["murshed", "nahid", "nadim", "robin"];
const f = frind.toString();
console.log(f);

//convert string with join method
const user = ["murshed", "robin", "nadim"].join("*******");
//console.log(user);

//js shift method
const user2 = ["murshed", "robin", "nadim"].shift();
console.log("using shift : ", user2);

//unshift method 
const user3 = ["murshed","robin","nadim"];
user3.unshift("hello world");
console.log("using unshift : ", user3);

//splicing

const splicingUser = ["user1","user2","user3","user4","user5","user6","user7"]
splicingUser.splice(3,7,"nahid","murshed","Freedom coder");
console.table(splicingUser);

//concatinations 

const n1 = ["user1","user2","user3","user4","user5","user6"];
const n2 = [2007, 2015, 2014, 2020, 2021, 2022]; 
const n = n1.concat(n2);
console.table(n);

//slicing
const nm = ["user1","user2","user3","user4","user5","user6"].slice(3,5);

console.log("Slicing...");
console.table(nm);