// we can add return types to functions
//function add(n1: number, n2: number): string { 
//    return (n1 + n2).toString();
//}

function add(n1: number, n2: number): number { 
    return (n1 + n2);
}

// return type of this function is : void
function printResult(num: number) {
    console.log("Result: " + num);
}

// add and call a callback function
function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
    const result = n1 + n2
    cb(result)
}

printResult(add(64, -23));

//let combineValues;            // currently is type any
//combineValues = add;          // assign function pointer
// combineValues = 5;           // if we uncomment, we're boned
//printResult(combineValues(19, -18));

//let combineValues: Function;
//combineValues = add;          // assign function pointer
//combineValues = printResult;    // still boned      
//printResult(combineValues(19, -18));

// will work with any function with the signature:
// this heavily limits the errors we could make
// assigning the wrong function pointer to this 
// note, we still could run into issues if it is a common signature
let combineValues: (a: number, b: number) => number;
combineValues = add;          // assign function pointer
printResult(combineValues(19, -18));

addAndHandle(10, 20, (result) => {
    console.log("Logging result " + result + " from anon function passed as a callback!")
});