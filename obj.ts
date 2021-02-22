
// more types in TS...
// OBJECTS and ARRAYS and TUPLES and ENUMS
//

// this is syntax for declaring we have a specialized object
const person: {
    name:   string;
    age:    number;
} = {
    name:   "Cozart Shmoopler",
    age:    23,
};

// enums let us define constants for easy number representation in our program
enum Role {ADMIN, READ_ONLY, AUTHOR};

// equivalent to:
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// again, TS infers this info, so we can also declare like so:
const person2: {
    name: string;
    age: number;
    hobbies: string[];
    roleArray: (number | string)[];
    roleTuple: [number, string]; // TUPLE type, with FIXED field TYPES
    roleEnum: any;
} = {
    name:   "Cozart Shmoopler",
    age:    23,
    hobbies: ["Soccer", "music", "Programming", "finance"],
    roleArray: [2, "author"],  // union type array (number | string)[]
    roleTuple: [2, "author"], // tuple type [number, string]
    roleEnum: Role.ADMIN,
};

// we can update any value of role to a string or a number interchangably
person2.roleArray.push("admin");
person2.roleArray[1] = 10;

// we can't do this with the tuple
// person2.roleTuple[1] = 10;

// note above, we also use the ARRAY type in TS/JS
let favoriteActivies: string[];
favoriteActivies = ["Soccer", "music", "Programming", "finance"];

// we can assign all types to an array of any
// this basically is just how arrays normally are in JS
// so we lost the safety of TS in exchange for perhaps more flexibility
let anyArray: any[];
anyArray = [1, true, "hello", person];

console.log(person2);
console.log(typeof(person2)); // will print "object" since that is the JS runtime type

console.log("Hobbies are:");
for (const hobby of person2.hobbies) {
    // we can call string methods since we know the array is all strings
    console.log(hobby.toUpperCase()); 
    // console.log(hobby.map()) WILL BE AN ERROR!!!!
}

if (person2.roleEnum == Role.ADMIN) {
    console.log("IS AN ADMIN")
}