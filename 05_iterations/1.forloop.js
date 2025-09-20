// in order to print via console log without a new line, we can use process.stdout.write
// how it is different from console.log? 
// https://medium.com/coding-beauty/javascript-console-log-without-newline-20e7e63cca36

// 1. 2d array
// for (let i = 1; i < 11; i++) {
//     process.stdout.write(`${i}: `);

//     process.stdout.write("j values: ");
    
//     for(let j=1; j<11; j++){
//         process.stdout.write(`${j} `);
//     }
    
//     console.log();
    
// }

let myArray = ['flash', 'batman', 'superman', 'wonderwoman'];
// for (let i = 0; i < myArray.length; i++) {
//     console.log(`i: ${i}, value: ${myArray[i]}`);
// }
myArray.forEach((val, i) => {
    console.log((`${i+1}. ${val}`));
    
});
// here (val, i) => is an arrow function working here as call back function, val and i are mere parameters, can be anything