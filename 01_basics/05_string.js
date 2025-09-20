const name = "Shri";
const repoCount = 50;

console.log(name + ": " + repoCount); // -> older syntax
//Mordern approach: use backtick (string interpolation), where we make placeholders, we can directly inject variables
console.log(`This is ${name} and my repo count is ${repoCount}.`);


// other way of using strings variables
const gameName = new String('Krshna');
console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));


