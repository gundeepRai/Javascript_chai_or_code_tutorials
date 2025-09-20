// ****************** vd - 6 ****************
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




// ****************** vd - 7 ****************

let str1 = "Hare";
let str2 = "Ram";
let str3 = str1 + " " + str2;
console.log(str3);

console.log("1" + 2); //=12
console.log(1 + "2"); //=12
//refer ecma script for knowing it : https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// preincrement and postincrement operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


// ***************** vd-8: Comparison of datatypes ******************

console.log("2" > 1); //true
console.log("02" > 1); //true   //js converted "2" into number
//comparison between 2 incomparable datatypes gives unpredictable results
// So always compare variables of same datatypes
// HENCE THATS WHERE 'TYPESCRIPT' GIVES STRICT RULES: Ts doesn't allow different datatypes to be compared


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// == and comparison operators (>, <, >=, <=) works differently
// comparison operators considered null as 0

console.log(undefined == 0); //is false with both == and compari. operator


/* STRICT CHECK === */
console.log(null === 0);
console.log("23" === 0); //no conversion





