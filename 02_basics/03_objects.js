// singleton
// object.create    // a method for creating object

// object literals (internally keys are too processed as)
const JsUser = {
    name: "Shri ji",
    "full name": "Krshna Manoharini",
    age: 10,
    email: "laalji@braj.com",
    "email": "laalji@braj.com",
    location: "braj",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

// // accessing objects 
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

//changing values
JsUser.email = "lali@braj.shyam"
console.log(JsUser.email);

// we can freeze the object, like its values cannot be changed later
// Object.freeze(JsUser);

// JsUser.email = "lali@barsana.in" //lets try to change
// console.log(JsUser.email); // lali@braj.shaym is printed therefore values are locked.
// // change not propagated

console.log(JsUser);

// ------- adding function in object -----------
JsUser.greeting = function(){
    console.log(`Jai Shri Krshna ${JsUser.name}.`);
    return;
}
JsUser.greeting();
// console.log(JsUser.greeting); returns the reference of function











// ------------- popular interview question of Symbol datatype ---------
// Ques: ek symbol lo or object ki keys m define krke prin karake dikhao
const mySym = Symbol("key1");

const eg = {
    mySym : "My Unique key 1",
    [mySym] : "Meri unique key 1"
}

// console.log(eg);


// console.log("\"", eg.mySym, "\", and type of mySym:",typeof(mySym));
// console.log(eg[mySym], ": is the correct value of [mySym]."); //sahi syntax using [mySym]


