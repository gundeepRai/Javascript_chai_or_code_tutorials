// Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [0, 1, 2, 3, 4, true, false, null];
// console.log(myArr[0]);
const fruits = ["apple", "kiwi", "bannana"]

const myArr2 = new Array(10, 20, 30, 40, 50, 60, 70, 80);
// console.log(typeof myArr2);

myArr.push(5);      //similarly pop removes last element
// console.log(myArr);

// shift and unshift
// myArr.unshift(786); //adds element in front and shifts whole array
// console.log(myArr);

// myArr.shift();  //removes element from front and shifts whole array
// console.log(myArr);


// ------------- questionnaire wale methods in Array -------------
// console.log(`The array 'myArr' includes 10? = ${myArr.includes(10)}`)
// console.log(`Index of "false" in 'myArr' = ${myArr.indexOf(false)}`)
// console.log(`Index of "undefined" in 'myArr' = ${myArr.indexOf(undefined)}`)


// ---------------- .join() in array --------------
const newArr = myArr.join();

// console.log(`Type of newArr is "${typeof newArr}".\nnewArr : ${newArr}`);
// console.log(myArr);

// -------------- slice, spice ------------------
console.log("myArr(before slicing) : ", myArr); //original array

const myn1 = myArr.slice(2, 6); //slicing will not change the myArr
console.log(`myn1: ${myn1}`);

console.log("myArr(After slicing) : ", myArr);

const myn2 = myArr2.splice(2, 1);    //splice changes the actual array too
console.log(`myn2: ${myn2}`);

console.log("myArr2(After SPLICING) : ", myArr2);







