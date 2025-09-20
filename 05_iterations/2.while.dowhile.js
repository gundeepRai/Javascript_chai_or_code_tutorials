let i = 0;
// while(i< 10){
//     console.log(i);
//     i++;
// }

let myArray = ['shaktiman', 'nagraj', 'doga', 'superman'];
while(i < myArray.length){
    console.log(`${i+1}: ${myArray[i]}`);
    i++;    
}

i=0;
do{
    console.log(`${i+1}: ${myArray[i]}`);
    i++;
}while(i < myArray.length); 