let user;
let users = 10;
let n;
let Ns = false;
// if(user === 'active'){
//     console.log('User Active');
// }else{
//     console.log('User Not Active');
// }
let ns = users > 50 ? 'bigger number':'smaller number number'
// console.log(ns);

let x = Ns && 500;
console.log(x);
// string to number 
let text = + '56';
console.log(text);
let num = 56 + '';
console.log(num);

// Default parameter value set
function add(n1, n2 = 50) {
    return n1 + n2;
}
const ans = add(1);
console.log(ans);