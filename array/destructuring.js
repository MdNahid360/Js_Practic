const user = ["name : md nahid", "email : example@xyz.com"]
// const a = user[0]
// const b = user[1]
// console.log(a,b);

// destructing
const [name,email] = user
console.log(name,email);

function userData (a,b){
    const add = a + b;
    const subtraction = a - b;
    const multiplication = a * b;
    const divide = a / b;
   return [add, subtraction, multiplication, divide]
}

const [add, subtraction, multiplication, divide] = userData(5, 12)
console.log("Add : ",add,"Divide : ",divide);

//destructing with object
const member = {
    name : "murshed",
    number : 013332211223,
    email : "murshed@exmple.com",
    
}

function tx({name,number,email}) {
    console.log('Member : '+name \n 'Number : '+number);
}