// cntrl + spacebar for vscode intellisence

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);  //0 is january month, number for dec is 11 and not 12
// console.log(myCreatedDate.toLocaleString()); 

let myCreatedDate = new Date("2025-08-31"); //in this format use real month's number from 1 not from 0
console.log(myCreatedDate.toDateString());
console.log(`myCreatedDate in ms: ${myCreatedDate.getTime()}`); //converts myCreatedDate into milliseconds


let myTimestamp = Date.now(); //in milliseconds from the beginning of January 1, 1970, UTC.
console.log(myTimestamp); 

//present date in seconds
console.log(`Date in sec: ${Math.floor(Date.now()/1000)} sec`); //as 1sec = 1000ms


// some more eg.

let newDate = new Date();
console.log(newDate.getMonth() + 1); //as month is 0 based

// Date is interesting specially ye method tolocaleString() method
newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate.weekday);




