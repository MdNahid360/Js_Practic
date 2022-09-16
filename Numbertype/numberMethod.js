//exponential
const num1 = 4000.33;
const ans = num1.toExponential(3);
console.log(ans);

// Number
console.log(typeof Number("ddd"), Number("ddd"));

console.log(typeof Number(" 10"), Number(" 10"));

console.log(typeof Number("33"), Number("33"));

console.log(typeof Number("100 22"), Number("100 22"));

console.log(typeof Number("10.34567"), Number("10.34567"));

console.log(typeof Number("  66  "), Number("  66  "));

console.log(typeof Number("nahid"), Number("nahid"));

// ParseInt

console.log("ParseInt  : ", parseFloat("33"), typeof parseInt("22"));

//ParseFloat

console.log("ParseFloat : ", parseFloat("33"), typeof parseFloat("33"));