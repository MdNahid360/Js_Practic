const user = {
    name: 'nahid',
    id: 1,
    number: 013037363542,
    email: 'user@example.com',
    year: 18
}
// const data = JSON.stringify(user);
// const user_data = JSON.parse(data);
// console.log(user_data.name);

// local storage
// let v = localStorage.setItem('id', 455);
// let vl = document.getElementById('l').innerHTML = v;
// let b = localStorage.getItem('id');
// console.log(b);

// localStorage.setItem('id', 12)
const userId = localStorage.getItem('user');
// console.log(userId);
localStorage.setItem('user', JSON.stringify(user))
const nUser = localStorage.getItem('user')
const parsData = JSON.parse(nUser)
console.log(parsData.id);

Object.keys(user)

let button = document.getElementsByTagName('span'[0])
console.log(button);
button.addEventListener("click", () => {
    console.log('button clicked');
})