//slice
const user = ["hello", "ferdaos", "how ", "are", "you"];
const ans = user.slice(3, -1);
console.log("sliceing ans is : ", ans);

// replace
const user1 = "hello world this";
const updt = user1.replace("world this", "md NAHID");
console.log(updt);

//concatenation
const a = 'hello';
const b = ' world';
const name = a.concat(" ", b);
console.log(name);

//trim
const n = "     testing trim     ";
//n.trim();
console.log(n.trim());

const c = 'hello world';
console.log(c[6]);
console.log("charAt ans is :", typeof c.charAt(500));
console.log("charAt ans is :", typeof c.charAt[500]);

// split
const d = "split check";
console.log("split ans is : ", typeof d.split("|"));

//indexing
let idx = "hello z world z i am nahid";
// let idxAns = idx.indexOf('h');
console.log(idx.indexOf("z", 7, 17));

//lastindex
let lidx = "testin last index index";
let sf = lidx.lastIndexOf('i')
console.log(sf);

//include method
let lls = "nahid,murshed,robin,nadim,foysal";
let aan = lls.includes("nahid")
console.log(aan);

// template string 
const nm = "murshed";
const year = 18;
const text = `name :${nm} ; year : ${year};`;
console.log(text);