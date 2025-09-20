// following loops are Array specific

const my_arr = [1, 2, "hare", 4, 5];

// 1. for--of Loop
for (const val of my_arr){
    // console.log(val);
}

// 2. for--in Loop
const greetings = "Jai Shri Radha Vallabh";
for (const each_char of greetings){
    // console.log(`Each char is: ${each_char}`);
    
}

// 3. forEach Loop
my_arr.forEach( function (val, i) {
    // console.log(`At ${i} index, value is: ${val}`);
    console.log(val);
});
// as function given as parameter to forEach, is known as callback function
// callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// callback functions have no name(meaning reference needed to be passed), they are anonymous functions, even an arrow function can be used here

// eg. what if we need to call function defined somewhere else
function printMe(item){
    console.log(item);
}
my_arr.forEach(printMe)



// -------------------- MAPS IN JS --------------------------
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

const map = new Map();
map.set('IN', 'INDIA')
map.set('US', 'UNITED STATES OF AMERICA')
map.set('UK', 'UNITED KINGDOM')
map.set('FR', 'FRANCE')
map.set('DE', 'GERMANY')

// console.log(map);

// for(const key of map){
//     // console.log(key);
//     console.log(`"${key[1]}" is abbreviated as ${key[0]}`);    
// }

// using for loop via destructuring the maps elements
for(const [key, val] of map){
    // console.log(`"${val}": ${key}`);
    
}

// these for loops won't work on object as 



// ---------------- array of objects ---------------
const myCoding = [
    {
        lang_Content: "javascript",
        lang_file_name: "js"
    },
    {
        lang_Content: "documentation",
        lang_file_name: "readme"
    },
    {
        lang_Content: "script",
        lang_file_name: "py"
    }
]


myCoding.forEach( (obj) => {
    console.log(obj.lang_Content);
    
} )