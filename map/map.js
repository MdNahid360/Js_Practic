const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.table(fruits);

// set
console.log("\n");
const users = new Map();
users.set("name :", "nahid");
users.set("roll :", 455056);
users.set("department :", "computer");
users.set("semester", "5th");


let findInfo = fruits.get("apples");
console.table(findInfo);