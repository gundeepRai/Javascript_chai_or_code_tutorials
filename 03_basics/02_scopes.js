/*
---------------------------- vd-21 -------------------------------
    since there are 3 major types of variables:
    1. let
    2. const
    3. var

    - the let and const variables if used out of scopes posses error
    - Using 'var' or even simply declaring variables (eg: c=5) is used out of scopes posses no error, 
      and just worked, which is not optimum and un desirable
    
    IMPORTANT NOTE:
    - the cheking/ or anything, the global scope of web browser(wahi dev console pe)
        and the scope of node environment is different
*/

//  ------------------------- vd-22 ---------------------------------

// one(); 

{function one(){
    const username = "Shri ji"
    // two();

    function two(){
        const website = "youtube"
        console.log(username);        
    }

    // console.log(website);
    
    two();
}}

// one();

// closure in js : A closure in JavaScript is the combination of a function and the lexical environment within which that function was declared. This means that an inner function, defined inside an outer function, retains access to the outer function's variables and scope, even after the outer function has finished executing. 



//  ******************************* interesting *****************************
addOne(4); //can call before defining/initialization, perfectly fine
function addOne(num){
    return num+1
}
addOne(5);

// addTwo(5); calling addTwo expression before defining/initialization gives error
const addTwo = function(num){
    return num+2;
}
addTwo(5);

// the "addOne" function is simply a function 
// while the "addTwo" function is known as an "Expression"