//problem #1 (ludo game random number)

function getRndInteger(min, max) {
    return Math.floor(Math.random()* (max - min + 1)+min);
}

console.log(getRndInteger(1, 6));



//problem #2 (sorting array) 
let name = ["md nahid", "ferdaos", "a", "murshed", "robin", "nadim"];
console.log(name.sort() + "\n" + "\n" + "\n");


//problem #3 (sorting number) 

let number = [3,2,56,3,2,6,78,33,2,2,6,81,2,62,0];
console.log("this is normal number : ");
console.log(number);

console.log("this is sorting number : ");
console.log(number.sort(function(a, b){
    return a - b;
}));


//problem #4 ( leap year ) :  
function leapYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is leap year`);
    }else {
        console.log(`${year} is not leap year`);
    }
}

leapYear(2009)


// problem #5 ( detect vowels & consonant ) :
let vowels = ['a','e','i','o','u','A','E','I','O','U'];
 
function countVowel(sentence) {
    let count = 0;
    let letter = Array.from(sentence);

    letter.forEach(function(value){
        if (vowels.includes(value)) {
            count++;
        }
    })

    return count;
}

let result = countVowel("hello world!")

console.log(result);


// problem #5 ( detect duplicate number ) :

let numbers = [1, 2, 3, 4, 1,6,2,8,3,0];

const duplicate = numbers.filter(function(value, index,array) {
    return array.indexOf(value) !== index; 
});


console.log(duplicate);

let x = "-a";
console.log(Boolean(x));

const mixedArr = [
    "lws",
    undefined,
    "md nahid",
    false,
    "", 
    "apple",
    true,
    "thanks all",
    NaN
];
console.log("problem  last");
const trueArray = mixedArr.filter(function(el) {
   if(el){
    return true;
   }else{
    return false;
   }
});
console.log(trueArray);