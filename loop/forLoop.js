const user = ["murshed", "nadim", "robin", "foysal", "..."];

for (let i = 0; i < user.length; i++) {
    console.log(user);

}

const user2 = ["user 1", "user 2", "user 3", "user 4", "user 5"];
for (let i = 0, j = 2; i < user2.length; i++) {
    console.table(user2);
}

// loop for in
const person = {
    name: "John",
    age: 12,
    email: "example.com"
}
for (let x in person) {
    console.log(person[x]);

}