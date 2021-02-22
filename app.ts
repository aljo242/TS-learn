const AS_NUMBER = 0;
const AS_STRING = 0;

// what if we want to be flexible and work with numbers AND strings???
function combine(input1: (number | string), input2: (number | string), resultType: number) {
    // now we need a runtime check
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else { // string case
        result = input1.toString() + input2.toString();
    }

    if (resultType === AS_NUMBER) {
        return +result;
    } else { // string case
        result.toString();
    }
}

const combinedAges = combine(20, 30, AS_NUMBER);
console.log(combinedAges);

const combinedNames = combine("Cozart ", "Shmooper", AS_STRING);
console.log(combinedNames);

