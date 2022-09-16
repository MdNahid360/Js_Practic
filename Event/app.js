document.querySelector('#btn').addEventListener('click', function () {
    let text = document.querySelector('h1');
    text.style.color = "red";
})

let add = document.getElementById('add')

add.addEventListener('click', function () {
    let inp = document.getElementById('inp').value;
    let info = document.getElementById('info');
    info.innerText = inp;
})

// add.addEventListener('mouseover', function () {
//     let inp = document.getElementById('inp').value;
//     let info = document.getElementById('info');
//     info.innerText = inp;
// })
add.addEventListener('keydown', function () {
    let inp = document.getElementById('inp').value;
    let info = document.getElementById('info');
    info.innerText = inp;
})
add.addEventListener('keyup', function () {
    let inp = document.getElementById('inp').value;
    let info = document.getElementById('info');
    info.innerText = inp;
})