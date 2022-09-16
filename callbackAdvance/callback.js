const paymentSuccess = true;
const marks = 80;
let text =document.getElementById('text');
function enroll(callback) {
    text.innerHTML = `<img src="https://i.pinimg.com/originals/c0/47/49/c047497e763b7a8711208c00bc370fb4.gif">`;

    setTimeout(function () {
        if (paymentSuccess) {
             callback();
        }else { 
             text.innerHTML = "payment failed!";
        }
    },2000);
}

function progress(callback) {
    text.innerHTML = `<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div> Course progress. . . `;

    setTimeout(function () {
        if (marks >=80) {
            callback();
        }else{
          text.innerHTML = "you could not get enough get certificated";
        }
    }, 3000);
}

function getCertificate() {
     text.innerHTML = `
     <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/zero-touch_enrollment_android.gif" class="w-50">
     preparing your certificate!!!`;

    setTimeout(function () {
       text.innerHTML = `
       <img src="https://cdn.dribbble.com/users/1842274/screenshots/9823992/media/f169b7feb6edb1b7c324d3666f0f1360.gif" class="img-fluid w-50"> 
       Congrats ! you got the certificate`;
    },3000)
}

enroll(function () {
    progress(getCertificate);
});
