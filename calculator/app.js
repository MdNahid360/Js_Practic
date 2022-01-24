function deleteItems() {
    document.getElementById('ans').value = '';
    console.log('sduifah');
}
function  main(num) {
  let n = document.getElementById('ans').value += num;
  console.log(n);
}
function anser() {
    let a = document.getElementById('ans').value;
    let b = eval(a);
    document.getElementById('ans').value = b;
}