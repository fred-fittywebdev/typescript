// Create a variable of type string and try to invoke a string method on it.
// Create a variable of type number and try to perform a mathematical operation on it.
// Create a variable of type boolean and try to perform a logical operation on it.
// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// You can use type annotation or inference

let myFirstName: string = "Fred";
console.log("1 : " + myFirstName.length);

let myAge: number = 47;
let myFellingAge = myAge - 10;
console.log("2 : " + myFellingAge);

let OldGuy: boolean = false;
if (myFellingAge > 40) {
	OldGuy = true;
} else {
	OldGuy = false;
}
console.log("3 : " + OldGuy);

// CHALLENGE UNION TYPE
// Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'.
// Then, try to assign it the values 'shipped' and 'delivered'.
// Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "delivered";
console.log("4 : " + orderStatus);
orderStatus = "processing";
console.log("5 : " + orderStatus);

let discount: number | string = "20%";
console.log("6 : " + discount);
discount = 20;
console.log("7 : " + discount);
