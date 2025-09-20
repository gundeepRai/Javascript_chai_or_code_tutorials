// -------------- vd - 30 --------------
// const coding = ['js', 'rubby', 'py', 'cpp']

// const values = coding.forEach( (it) => {
//     console.log(it);
//     return it;    
// })

// console.log(values);


const myNums = ['',0,1,2,3,4,5,6,7,8,9,10]

// Read about filters(built in array method) : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const newNums = myNums.filter( (num) => num )
// console.log(newNums);

const newNums2 = []
myNums.forEach( (num) => {
    if(num>2 && num<=8){
        newNums2.push(num);
    }
})
console.log(newNums2);
