// let keyword

let a = 'out of block';
if (true) {
    let a = 3;
    console.log('a in the block');
}
console.log(a);