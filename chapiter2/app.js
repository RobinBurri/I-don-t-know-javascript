console.log(Math.PI.toString());

var me = {
    first: 'Kyle',
    last: 'Simpson',
    age: 39,
    specialties: ['JS', 'Table Tennis'],
};

console.log(`My name is ${me.first}.`);
console.log(`My name is ${me['first']}.`);
// Here, me represents an object, and first represents the name of a location of information in that object (value collection). Another syntax option that accesses information in an object by its property/key uses the square-brackets [ ], such as me["first"].

// Value Type Determination
typeof 42; // "number"
typeof 'abc'; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" -- oops, bug!
typeof { a: 1 }; // "object"
typeof [1, 2, 3]; // "object"
typeof function hello() {}; // "function"
/**
 *! typeof null unfortunately returns "object" instead of the expected "null". Also, typeof returns the specific "function" for functions, but not the expected "array" for arrays.
 */

/**
 * !The let keyword has some differences to var, with the most obvious being that let allows a more limited access to the variable than var. This is called "block scoping" as opposed to regular or function scoping.
 */
var adult = true;

if (adult) {
    var myName = 'Kyle';
    let age = 39;
    console.log('Shhh, this is a secret!');
}

console.log(myName);
// Kyle

// console.log(age);
// Error!

let x = 'hello';
let y = 'salue';
console.log(Number.isNaN(x) === Number.isNaN(y));