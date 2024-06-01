// Type annotations
let awesomeName: string = "Fred";
awesomeName = "Lilie";
awesomeName = awesomeName.toUpperCase();
console.log(`1 : ${awesomeName}`);

let amount: number = 50;
amount = amount * amount;
console.log(`3 : ${amount}`);

let isCheap: boolean = false;
isCheap = true;
console.log(`3 : ${isCheap}`);

// Union type
// In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator.
// It can also be used to specify that a variable can hold one of several specific values. More examples are coming up.
let taxes: number | string = 20;
taxes = "20%";
taxes = 10; // les deux sont valables grâce a l'union type.

// literal value type
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "error";

// Type any
// In TypeScript, the "any" type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking and let the values pass through compile-time checks.
// It means a variable declared with the any type can hold a value of any type.
let anyTypeVaraible: any = 4;
anyTypeVaraible = "maintenant une chaine de caractère";
anyTypeVaraible = false;
console.log(`4 : ${anyTypeVaraible}`);
