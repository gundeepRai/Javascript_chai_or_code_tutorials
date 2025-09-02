// const tinderUser = new Object() // -> is an empty object as of now
// SINGLETON OBJECT: above declaration is known so, were we use constructor to let object have own properties

//below object is object literal & a "NON-SINGLETON OBJECT"
const tinderUser = {
    id: "123abc",
    name: "Random",
    isLoggedIn: false
}

//IMP: getting all keys of object in array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//to check if object has certain key or not
console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('Name'));








// ---------------- Assigning obj from one to other -------------
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: 'abc', 4: 'xyz'}

// const obj3 = {obj1, obj2}; // 1. nested obj
// console.log(obj3);

// const obj3 = Object.assign({}, obj2, obj1); // 2. assign operator
// //here {} is empty object, -> target and obj2, obj1 are sources
// // i.e. sources ko target m assign karo
// console.log(obj3);

// 3. using spread operator
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);



