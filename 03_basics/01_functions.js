// -------------------------- vd-19 --------------------------------------------
// if a fucntion's name is "eg_func"
// ' eg_func ' -> carries the reference of that function
// ' eg_func() ' -> does the execution of function, parentheses lagate hi execution

// "Arguments": values which are passed during function calling
// "Parameters": are the inputs accepted in functions definition




// -------------------------- vd-20 --------------------------------------------
function calculateCartPrice(val1, ...num1){     // ...var_name is known as rest/spread operator
    console.log(val1);                          // name is known as per usage, like here it is rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 2349, 799));
// the first value goes in val1 variable, and rest becomes array, due to use of rest operator with num1



// ---- passing obj as value ---- in func ----------- 
const user = {
    username: "hitesh",
    price: 199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and 'price' is '${anyobject.price}'`);
    console.log(`Username is ${anyobject.username} and 'prices' is '${anyobject.prices}'`);
}

// handleObject(user);
handleObject({
    username: "sam",
    prices: 999
})


// same we can do with passing array or strings etc as string

