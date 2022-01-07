const product = [
    {name:"Mobile",price:20000,model:"j1 ace"},
    {name:"laptop",price:80000,model:"HP"},
];
// product.forEach(pd => {
//     console.log(pd.name);
// });
const find = product.find(pd=>(pd.name === "laptop"))
console.log(find);