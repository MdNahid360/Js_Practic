// function myDisplayed(some) {
//     document.getElementById("ans").innerText = some;
//     console.log(some);
// }

// function Calculator(num1, num2) {
//     let sum = num1 + num2;
//     //return sum;
//     myDisplayed(sum)
// }
//  Calculator(52, 15);
// // myDisplayed(result);





// apply callback function
// =========================================

function myDisplayed(some) {
    document.getElementById("ans").innerText = some;
    console.log(some);
}

function Calculator(num1, num2, callback) {
    let sum = num1 + num2;
    //return sum;
    callback(sum)
 }
Calculator(52, 15, myDisplayed );
// myDisplayed(result);
