// console.log('step 1');
// let status = false;
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//      if (status) {
//       resolve('step 2');
//    }else{
//      reject('failed')
//    }
//   }, 2000)
// })
// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// console.log('step 3');


// enrollment with promise 
const paymentSuccess = true;
const marks = 80;
function enroll() {
    console.log('course enrollment is in progress');
    const promise = new Promise((resolve, reject)=>{
            setTimeout(function () {
        if (paymentSuccess) {
             resolve('course successfully enroll');
        }else { 
             reject('payment failed!!!');
        }
    },2000);
    });
    return promise;
}

function progress() {
    console.log('Course on progress');
    const promise = new Promise((resolve, reject) => {
         setTimeout(function () {
        if (marks >=80) {
            resolve();
        }else{
          reject("you could not get enough get certificated");
        }
    }, 3000);
    })
    
}

function getCertificate() {
    console.log('preparing your certificate');

    const promise = new Promise((resolve) => { 
    setTimeout(function () {
       resolve('Congrats! your certificate!');
    },3000);
    });
    return promise;
}

enroll()
    .then(progress())
    .then(getCertificate())
    .then((value)=>{
        console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })