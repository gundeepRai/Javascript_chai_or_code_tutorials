// Immediately Invoked Function Expressions (IIFE): is a JavaScript function 
// ------------------------------------------------
// that is defined and executed immediately after its creation. 
// This pattern creates a private scope for variables,
// preventing them from "polluting the global scope" (which causes problems sometimes)
// and promoting modular code organization. 
// FOLLOW UP: what prblm is caused by polluting global scope

// pehle padha hai ki fun_name(), yaha fun_name is referece, and () invokes/calls the func

// and last 03_arrow.js m dekha, ki '()' humko scope bhi deta hai for returning/defining func

// so iife syntax: ()()
// first bracket is for definition, second for calling it

(function chai(){
    console.log(`✅ DB CONNECTED`);    
})();        

// we can even write arrow functions in first ()
( () => {
    console.log('✅ DB CONNECTED BY ARROW FUNC');
})()

// but iife func m koi argumen kaise pass hoga (for both arrow or simple func)
( (param) => {
    console.log(`✅ DB connected via ${param}`);    
})( 'Hari' )
//          ^
// Here semicolon is playing crucial role:
// as iife invoke to hua, but it dont know execution kaha rokna hai
// so explicitly put ';' to tell it to end that code to there



// If function is named in first bracket : that iife is known as "Named iife"