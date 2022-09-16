const fruits = ["Mango", "Banana", "Apple", "Orange", "ETC"];
//fruits.sort();
fruits.reverse();
console.table(fruits);

// sorting number
const fruits2 = [10, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fruits2.sort(function(a, b) {
    return a - b;
})
console.log(fruits2);

const fruitsN = [10, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fruitsN.sort(function(a, b) {
        return b - a;
    })
    //max method 
const fruitsS = [10, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fruitsS.w
console.log(fruitsS);
console.log("Array sorting with random number............")
const fruits3 = [10, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fruits3.sort(function(a, b) {
    return 0.5 - Math.random();
})
console.log(fruits3);
const newNum = [5, 10, 15, 20];

function dubble(value) {
    return value * 2;
}
const resultNum = newNum.map(dubble);
console.log("Your number is :" + newNum);

console.log("Your duble number is :" + resultNum);