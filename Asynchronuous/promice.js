 const ans = true;
// console.log('Task 1');

// const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (ans) {
//                 resolve('task2')
//             } else {
//                 reject('failed')
//             }
//         }, 2000);
// });
// // promise call

// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })



// console.log('task 3');

// ////////////////////////////////
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (ans) {
            resolve();
        }
        else {
            reject("failed")
        }
    })
})