// ========= chai or code (vd-40) ==========
// ----- "promise 1"
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    // ~IMPORTANT~ : here resolve() and reject() are Promise's constructor methods and we just got them and using as our need
    // resolve() : brings promise obj in 'fullfilled' or 'resolved' state
    // reject() : changes state of promise as 'rejected()' 

    setTimeout(function(){
        console.log('Async task is complete')
        resolve();
    }, 1000);
});

// consuming the promise 1
promiseOne.then(function(){
    console.log("Promise consumed");
});


// ----- "promise 2:" 
// other way of defining prom, without storing its reference
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();        
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})


// ----- "promise 3:" eg. network se data aya
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({
            username: "chai",
            email: "chai@example.com"
        }); // passing obj in resolve
    },1000);
}
);

promiseThree.then(function(user){
    console.log(user);
})



// ----- "promise 4" : """``Promise chaining``"""
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "sarthak 4th promise", password: "123"})
        }else{
            reject('Error: Something went wrong');
        }
    }, 1000);
});

promiseFour.then((user)=>{
    // console.log(user);
    return user.username;  // let we mere want to return the username not whole user    
                           // while solely printing it throws error and rejection 
}).then((my_username)=>{
    console.log("username is " + my_username);
    // ye .then() is getting returned value from above .then()
}).catch((err) => {console.log(err);
}).finally( ()=> {} );


// ----- "promise 5:" **aync await wala syntax**
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "javascript 5th promise", password: "123"})
        }else{
            reject('Error: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);        
    }
}

consumePromiseFive();





//                      (Vd - 29)
//  +++++++++++ Saurabh sir on promises +++++++++++

function someAPI() {
    let p1 = new Promise(function(resolve, reject){
    // yaha koi bhi longer duration ka task, jaise DB sebaat, payment ka gateway
    // ~IMPORTANT~ : here resolve() and reject() are Promise's constructor methods and we just got them and using as our need
    // resolve() : brings promise obj in 'fullfilled' or 'resolved' state
    // reject() : changes state of promise as 'rejected()' 

    setTimeout(() => {
        const x = Math.round(Math.random() *10);

        if(x%2 == 0){
            // even therefore promise fullfilled
            resolve(x);
        }else{
            reject(x);
        }
        // IMP : here resolve() and reject() are Promise's constructor function and we just got them and using as our need
        }, 3000);
    });
    return p1;
} // let say someApi kisi company ne banake di hai, jise hum 'consumer' use kr sake

//Consumer code ----- p is promise we got from someAPI func
let p = someAPI();
 // ab chunki hum p promise ke diff states ke according kuch krna chahte hai to we would use
 // then() : joki run hota hai agar state 'pending' na ho
p.then(function(res){
    console.log("Promise is fullfilled and number is even : " + res);    
}, (rejected_no) => {
    console.log("Promise Rejected and number is odd : ", rejected_no);  
});

p.catch( ()=>{
    console.log("In catch and rejected.");
});


// .then() have 1 or 2 arguments, 1 is for resolve func, and 2nd for rejected func
