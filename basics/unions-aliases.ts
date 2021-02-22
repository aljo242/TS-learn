const AS_NUMBER  = "AS_NUMBER";
const AS_STRING = "AS_STRING";

// we can use TS type aliases as a convenience 
type Combinable = number | string;
type ConversionDescriptor = "AS_NUMBER" | "AS_STRING";

// what if we want to be flexible and work with numbers AND strings???
function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultType: ConversionDescriptor, // union literal type to say we only accept two possible inputs
 ){
    // now we need a runtime check
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultType === AS_NUMBER) {
        result = +input1 + +input2;
    } else { // string case
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedAges = combine(20, 30, AS_NUMBER);
console.log(combinedAges);

const combinedNames = combine("Cozart ", "Shmooper", AS_STRING);
console.log(combinedNames);

