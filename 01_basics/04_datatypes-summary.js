// *************** vd-9 ***************

// TYPE 1: Primitive : are "call by value" i.e. their location are not given rather a copy of their values are given while accessing, changes are also done in copy
/* Primitive datatypes are of 7 categories:
1. String, 2.Number, 3.Boolean, 4.null, 5.undefined, 6.Symbol, 7.BigInt*/


/* TYPE 2: NON-PRIMITIVE OR REFERENCED TYPE 
 i.e. memory m inka referece directly allocate kia ja sakta hai
cateogries: 1. Array, 2.Object, 3.Functions
*/ 


// Eg. of Primitives
const isLoggedIn = false;
const outsideTemp = null; // i.e. temp main empy value hai
let userEmail; //ab ye chunki uninitialized hai to value isme "undefined hai"

const id = Symbol('123') //makes this id as unique
const anotherId = Symbol('123'); //makes this id as unique also despite both having same values
console.log(id === anotherId); //=> false

const bigNumber = 239837491827394n; //no. ke baad n lagado, vo bigInt banjayega

//Eg. of Non-primitives
const Radha = ["shri", "krshnaManoharini", "KrshnaVallabha"];  //array of string
let myObj = {
    name: "Lala",
    age: 22,
} //objects

const myFunc = function(){
    console.log("Hare Ram");
}
// here function(){ ..... } is definition of function
// myFunc is the variable for storing functions definitions
console.log(typeof myFunc);





// ************************ vd-10 ***********************
/*  
    two types of memory is there:
    1. stack memory : used by primitive types variables
    2. Heap memory : used by non-primitive type variables

    * when memory is define in stack, a copy of decalred variable's value is assigned to the caller. 

    * while in Heap memory, the reference of declared variable in heap is assigned (i.e. original value main changes honge)
*/
