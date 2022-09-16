let text = "hello world this is js regular expression";
let reg = text.search("this");
console.table(/reg/i);

let rep = text.replace(/this/i, "nd");
console.log(rep);


