const marvel_heros = ["thor", "ironman", "wanda"];
const dc_heros = ["superman", "flash"]

// marvel_heros.push(dc_heros);    //dc_heros array is considered as element, so pushing it in marvel, added it as array
// console.log(marvel_heros);

//better to use 'concat' to merge 2 arrays
all_heros = marvel_heros.concat(dc_heros); //concat returns a new merged array, istead of changing original array
console.log(all_heros);

// ------------ spread operator : for spreading arrays ----------------
const one_more_arr = ["shaktiman", "balveer"]
const all_new_heros = [...marvel_heros, ...dc_heros, ...one_more_arr]
// the limitation in push, concat to give only 2 array parameters is removed, as kite bhi daldo spreading ke liye
console.log(`all_new_heros array is : ${all_new_heros}`);


// ------------ Flattening of array (multi-imensional) ----------------
const another_arr = [1,2,3, [4,5,6], 7, [10, 20, [30, 40]]]
console.log(flat_another_arr = another_arr.flat(1)) //upto depth 1
console.log(flat_another_arr = another_arr.flat(2)); //upto dpth 2
// instead of 1, 2 -> infinity can also be written, like when you dont know the depth



console.log(Array.isArray("Shri krshna"));
console.log(Array.isArray(flat_another_arr));

// eg. jaise websites se data-scraping krne par data kai formats main ata hai, 
// but use traverse krne ke liye, we need to covert it into array
console.log(Array.from("Shri krshna"));
console.log(Array.from({name: "eg name"})); // intersting case: as here we need to explicitly mention, to make array of keys or values


// ----------- making array of values/variables ------------
let score1 = 100, score2 = 101, score3 = 148
console.log(Array.of(score1, score2, score3));


// Read about isArray(), from(), of() : these 3 functions of Array

