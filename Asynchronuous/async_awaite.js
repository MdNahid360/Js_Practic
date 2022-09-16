async function hello(name) {
    return 'hello' + ' ' + name
}

let ans = hello('koddo')
console.log(ans);
ans.then(res => {
    console.log(res);
})

// fetch data with async await
async function loadData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json();
    return data;
}
loadData().then(data => {
        displayData(data);

});

// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=> res.json())
//     .then(data=> {
//         displayData(data)
//     })
// }
// loadData();
function displayData(data) {
    const ul = document.getElementById('ul');
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
      let li = document.createElement('li');
      li.innerText = user.name;
      ul.appendChild(li);
    }
}