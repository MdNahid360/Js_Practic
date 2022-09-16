// let n = Math.floor(Math.random() * 100) + 1;
// console.log(n);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min));
}

console.log(getRndInteger(10, 30));