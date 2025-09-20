
const myObj = {
    js: "javascript",
    cpp: "C++",
    py: "python"
}

// in is used instead of 'of' for objects while would work for arrays and not for even maps, as they are not iterable
for(const key in myObj){
    console.log(key + ": " + myObj[key]);
    
}

// in would work fine with arrays
// as array too have keys, as numbers, starting from 0
// while objects were designed to have anything as key