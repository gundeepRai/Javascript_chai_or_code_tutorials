// --------------------------- VD-12 -----------------------
const score = 400
const balance  = new Number(100);

console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNum = new Number(28.78690);
console.log(otherNum.toPrecision(4));


const hundreds = 1000000;
// console.log(`${hundreds.toLocaleString()}/-`);     // adds commas in number as per US standards
// console.log(hundreds.toLocaleString('en-IN'));     // adds comma as per IN standard


// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);



// +++++++++++++++++++++ MATHS ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-39));

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.001));
// console.log(Math.floor(8.9999));

// console.log(Math.min(2,3,4,5,6,7,9));
// console.log(Math.max(2,3,4,2,24));

//getting random values
console.log(Math.random()); //gives random value b/w 0 and <1 i.e. [0, 1)
console.log((Math.random()*10)+1); //this will give values between 0 and 10 ie.e [0, 9] or [0, 10), just add math.floor for point se phele wali value

// what if we want values between no. x and y
const min = 10  //x
const max = 20  //y

// (Math.random() * (max-min+1))   -> this will give value from 0 to (mx-min+1), there fore add min

console.log(`Random value between ${max} and ${min} is ${Math.floor((Math.random() * (max-min+1)) + min)}.`);




