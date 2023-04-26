# Each File is a Program
The article explains that in JavaScript, each standalone file, whether it's a typical .js file or a module, is treated as its own separate program. This has important implications for error handling, as one failing file won't necessarily prevent the next file from being processed. Therefore, it's crucial to ensure that each file works properly and handles failures in other files gracefully.

While it may seem like a website or web application is one big program, that's because the execution of the application allows the individual programs to cooperate and act as one program. However, the only way multiple standalone .js files act as a single program is by sharing their state and access to their public functionality via the global scope.

Since ES6, JS has also supported a module format in addition to the typical standalone JS program format. Modules are also file-based and each module is treated separately. However, importing a module into another allows runtime interoperation between them.

Regardless of the code organization pattern used for a file, each file should be thought of as its own mini-program that can cooperate with other mini-programs to perform the functions of the overall application.

# Values
This paragraph discusses the concept of values in JavaScript, which are the fundamental units of information in a program. Values come in two forms: primitive and object. Primitive values include strings, booleans, numbers, null, undefined, and symbols, while object values include arrays and objects. The paragraph discusses various ways to embed primitive string literals in programs, such as using quotes or back-ticks, and covers the behavioral differences between them. It also explains how to use numbers and booleans in programs and how to treat null and undefined consistently. Finally, it briefly touches on symbols and their usage in low-level code.

# Arrays And Objects
This passage discusses the two main value types in JavaScript: primitives and objects. Arrays, which are ordered and numerically indexed lists, are a special type of object. Objects, on the other hand, are unordered and consist of keyed collections of values, which can be accessed using string location names (keys or properties).

The typeof operator can be used to determine the built-in type of a value, with "object" being returned for objects, including arrays, and "function" being returned for functions. It's important to note that typeof returns "object" for null values, which is considered a bug.

Converting between value types is known as coercion, and will be covered in more detail later in the chapter. Finally, the passage notes that primitive values and object values behave differently when assigned or passed around, and provides a reference to a section in Appendix A for further information.

# Value Type Determination
The typeof operator is used to determine the built-in type of a value in JavaScript. It returns a string indicating the data type of the operand. For primitive types, it returns the corresponding primitive type (such as "number", "string", or "boolean"), while for non-primitive types (objects, arrays, functions, etc.), it returns "object".

For example, typeof 42 would return "number", typeof "abc" would return "string", and typeof true would return "boolean". The typeof operator also returns "undefined" for undefined values, "object" for null values (which is considered a bug), and "function" for functions.

It's important to note that typeof does not distinguish between different types of objects. For example, both arrays and objects will be identified as "object".

JavaScript also allows for type coercion, which is the process of converting a value from one type to another. This can happen implicitly (automatically) or explicitly (through coding).

It's also important to understand the difference between primitive values and object values when they're assigned or passed around. This is explained in more detail in Appendix A, "Values vs References."

# Declaring and Using Variables
The section discusses variables in JavaScript and how they are declared and used in programs. Variables are containers that hold values and must be declared before they can be used. The section covers three keywords used to declare variables - var, let, and const. 

The var keyword declares a variable that can be accessed by a wider scope, whereas let and const use block scoping and limit the scope of the variable to the block they are declared in. Const is similar to let, but it must be assigned a value at the time of declaration and cannot be reassigned later.

The section also provides a tip to use const only with primitive values to avoid confusion between reassignment and mutation.

Besides var, let, and const, other syntax forms that declare variables include named parameters in functions and catch clauses. Named parameters in functions behave similarly to var-declared variables, while catch clauses create block-scoped variables like let-declared variables.

# Functions
Functions in JavaScript are collections of statements that can be invoked one or more times, can be provided with input parameters, and may return one or more output values. In contrast to the precise mathematical definition of a function in functional programming, in JS, the term "function" should be understood in the broader sense of a "procedure."

JS supports function declarations and function expressions. A function declaration is defined using the syntax "function name(parameters) { ... }," while a function expression can be defined and assigned like "var/let/const name = function(parameters) { ... }." A function declaration is associated with its identifier during the compile phase of the code, whereas a function expression is not associated with its identifier until runtime.

Functions are values in JS, which means they can be assigned as properties on objects and passed around. They can receive parameter input and return values using the `return` keyword. Functions can be defined to receive any number of parameters, from none upward. Each parameter is assigned the argument value passed in that position.

In JS, functions can take many forms, and there are many variations of how they can be defined and used. These variations are discussed in more detail in Appendix A, "So Many Function Forms."

# Comparisons
What are the differences between an equality comparison and an equivalence comparison in JavaScript?

In JavaScript, the most common comparison asks the question "Is this X value the same as that Y value?" The meaning of "the same as" can be more complicated than the obvious exact identity sort of matching. Sometimes, an equality comparison intends exact matching, but other times the desired comparison is a bit broader, allowing closely similar or interchangeable matching. In other words, we must be aware of the nuanced differences between an equality comparison and an equivalence comparison.

The "triple-equals" === operator, also known as the "strict equality" operator, is the most common operator used for equality comparison. It is designed to check both the value and the type of the compared values. The operator disallows any sort of type conversion in its comparison, where other JavaScript comparisons allow coercion. However, the === operator has some nuances. For example, it is designed to lie in two cases of special values: NaN and -0. In the case of NaN, the === operator returns false instead of true, and in the case of -0, it returns true instead of false.

For NaN comparisons, one should use the Number.isNaN() utility, which does not lie, and for -0 comparison, use the Object.is() utility, which also does not lie. Object.is() can also be used for non-lying NaN checks, if preferred.

When comparing object values (non-primitives), JavaScript uses identity equality instead of structural equality. All object values are held by reference, assigned and passed by reference-copy, and compared by reference (identity) equality. JavaScript does not provide a mechanism for structural equality comparison of object values, only reference identity comparison. To do structural equality comparison, developers need to implement the checks themselves, which can be more complicated than one would assume.

# Coercive Comparisons
The article discusses coercion in JavaScript, which means converting a value of one type to its respective representation in another type. Coercion is a core feature of the language and cannot be avoided. Coercion is used when comparing values with operators like equality. The "loose equality" operator, ==, is often criticized for being poorly designed and dangerous. However, the operator does consider the type of the values being compared. If the value types are different, == allows coercion before comparison. It is therefore described as "coercive equality." Being aware of the nature of == helps avoid most corner cases. However, relational comparison operators, like < and >, also use coercion. The wiser approach is not to avoid coercive comparisons but to learn their ins and outs.

# How We Organize in JS
This text discusses two major patterns for organizing code in the JavaScript ecosystem: classes and modules. Classes are a definition of a "type" of custom data structure that includes both data and behaviors that operate on that data, while modules are a way to group related functionality into one file, which can be imported into other files. Both patterns are not mutually exclusive and many programs can use both. The text also covers class inheritance, where specific types of publications like books and blog posts extend the general definition of Publication to include additional behavior. Finally, the text highlights the importance of understanding both patterns and where they are appropriate in order to write well-organized and maintainable code.

## Classes
```
class Page {
    constructor(text) {
        this.text = text;
    }

    print() {
        console.log(this.text);
    }
}

class Notebook {
    constructor() {
        this.pages = [];
    }

    addPage(text) {
        var page = new Page(text);
        this.pages.push(page);
    }

    print() {
        for (let page of this.pages) {
            page.print();
        }
    }
}

var mathNotes = new Notebook();
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin cos tan ...");

mathNotes.print();
```
### Class inheritance
```
class Book extends Publication {
    constructor(bookDetails) {
        super(
            bookDetails.title,
            bookDetails.author,
            bookDetails.publishedOn
        );
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print() {
        super.print();
        console.log(`
            Publisher: ${ this.publisher }
            ISBN: ${ this.ISBN }
        `);
    }
}

class BlogPost extends Publication {
    constructor(title,author,pubDate,URL) {
        super(title,author,pubDate);
        this.URL = URL;
    }

    print() {
        super.print();
        console.log(this.URL);
    }
}
```

## Classic Modules
```
function Publication(title,author,pubDate) {
    var publicAPI = {
        print() {
            console.log(`
                Title: ${ title }
                By: ${ author }
                ${ pubDate }
            `);
        }
    };

    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.publishedOn
    );

    var publicAPI = {
        print() {
            pub.print();
            console.log(`
                Publisher: ${ bookDetails.publisher }
                ISBN: ${ bookDetails.ISBN }
            `);
        }
    };

    return publicAPI;
}

function BlogPost(title,author,pubDate,URL) {
    var pub = Publication(title,author,pubDate);

    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        }
    };

    return publicAPI;
}

```

## ES Modules

```
function printDetails(title,author,pubDate) {
    console.log(`
        Title: ${ title }
        By: ${ author }
        ${ pubDate }
    `);
}

export function create(title,author,pubDate) {
    var publicAPI = {
        print() {
            printDetails(title,author,pubDate);
        }
    };

    return publicAPI;
}
```
```
import { create as createPub } from "publication.js";

function printDetails(pub,URL) {
    pub.print();
    console.log(URL);
}

export function create(title,author,pubDate,URL) {
    var pub = createPub(title,author,pubDate);

    var publicAPI = {
        print() {
            printDetails(pub,URL);
        }
    };

    return publicAPI;
}
```

```
import { create as newBlogPost } from "blogpost.js";

var forAgainstLet = newBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let
```