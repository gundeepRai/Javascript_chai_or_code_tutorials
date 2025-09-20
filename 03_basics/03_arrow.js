// ********************* vd-23 *********************
const user = {
     username: "hari",
     price: 999,

     welcomeMsg: function(){
        console.log(`WELCOME! ${this.username}`);
        console.log(this);        
     }
}

// user.welcomeMsg();
// user.username = "Hara";
// console.log("New username is:");
// user.welcomeMsg();

console.log(this); // is printing {}
// while in dev console in web broswer, above line prints "{window}" 
// i.e. in web browsers browser is the object of dev environment


// --------- printing "this" in a function in node environment -------------
function chai(){
     username = "eg"
    console.log(this.username);  // won't work, as "this" doesnt work in a function
    console.log(this); // would work and print many values    
}
// follow up question : what if we just declare username without let or const
// chai();


// ---------- In ES6js, New way of using functions => Arrow function -------- 

const chai2 = () => {
    // let username = "chai eg";
    console.log(this);
}
// chai2()

// ---- syntax of Arrow functions : ' () => {} '
// we can even hold its reference in a variable, like
const addTwo = (a, b) => {
    return a + b;
}
console.log(addTwo(3, 4));

// other way of writing it : "IMPLICIT RETURN" as no return keyword is written
const addThree = (x, y, z) => x+y+z;
console.log(addThree(10, 20, 30));

// or even close the returning result in '()' without writing keyword 'return'
const addFour = (a, b, c, d) => ( a+b+c+d );
console.log(addFour(1,2,3,4));

// using '{}', we have to write 'return' keyword: EXPLICIT RETURN
// IMP: what is we have to return an object, {} ???? ky kare
// enclose {} object in closing brackets ....
// const eg = ( a,b ) => ({username: "test"})




