let value = "abc33";

let valueinNumber = Number(value);

console.log(typeof valueinNumber);
console.log(valueinNumber);

// "33" => 33
// "33abc" = NaN (not a number)
// empty string converted to boolean is logically false i.e. 0

let score = "80"
let scoreinNumber = Number(score);
console.log(scoreinNumber);
console.log(typeof scoreinNumber)