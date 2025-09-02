// import {}

const course = {
    coursename: "js in hindi",
    price: "99",
    courseInstructor: "self"
}

//  ------------ Destructuring of object ------------
// jaha bhi " {literal} " dikha, samjho destructuring
// since we may need courseInstructor name many a times, we can define it once as:
const {courseInstructor: ins} = course  //courseInstructor alias 'ins'm destructure hua
console.log(ins);

// jab bhi apna kaam kisi or ke sar pe daldena hai, use API bnana kehte hai

// website having eg. of apis: random use me
// tool to understand the api structure: json formatter