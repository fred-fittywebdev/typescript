// Create a variable of type string and try to invoke a string method on it.
// Create a variable of type number and try to perform a mathematical operation on it.
// Create a variable of type boolean and try to perform a logical operation on it.
// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// You can use type annotation or inference

let myFirstName: string = "Fred";
console.log(myFirstName.length);

let myAge: number = 47;
let myFellingAge = myAge - 10;
console.log(myFellingAge);

let OldGuy: boolean = false;
if (myFellingAge > 40) {
	OldGuy = true;
} else {
	OldGuy = false;
}
console.log(OldGuy);
