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

one(); 

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

one();