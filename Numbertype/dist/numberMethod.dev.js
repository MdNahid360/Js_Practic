"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//exponential
var num1 = 4000.33;
var ans = num1.toExponential(3);
console.log(ans); // Number

console.log(_typeof(Number("ddd")), Number("ddd"));
console.log(_typeof(Number(" 10")), Number(" 10"));
console.log(_typeof(Number("33")), Number("33"));
console.log(_typeof(Number("100 22")), Number("100 22"));
console.log(_typeof(Number("10.34567")), Number("10.34567"));
console.log(_typeof(Number("  66  ")), Number("  66  "));
console.log(_typeof(Number("nahid")), Number("nahid")); // ParseInt

console.log("ParseInt  : ", _typeof(parseInt("22"))); //ParseFloat

console.log("");