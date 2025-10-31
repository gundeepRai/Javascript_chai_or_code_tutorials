// object literal
const user = {
    // properties
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    // methods
    getUserDetails: function(){
        // console.log("Got user details");
        console.log(`Username: ${user.username}`); // or this.username
        // console.log(this);
        
    }
}


// console.log(this); // prints {} as there is nothing in global context (node env m)
// console.log(user.getUserDetails());

// Constructor function
function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

// making objects 
const user1 = new User("hari", 100, true);
const user2 = new User("har", 499, false);

console.log(user1.constructor);
console.log(user2);













