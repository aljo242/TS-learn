
// core types in TS
//      numbers 
//          ex. 1, 5.3, -10
//          so we have integrals and floats as NUMBERS

//      string
//          ex. 'HI', "HI", `HI`
//          `` are template literals

//      boolean
//          ex. true, false

const str = "i am a string"

function add(n1: number, n2: number, showResult: boolean) {
    console.log(typeof(n1));
    if (showResult) {
        console.log(n1 + n2);
    } else {
        return n1 + n2;
    }
} 

function checkStr(s : string) {
    const check = s == str;
    console.log(typeof(check));
    console.log(typeof(s));
    if (check) {
        console.log("Strings are equal!");
    } else {
        console.log("Strings aren't equal!");
    }
}

// declarations like these use type deduction
const number1 = 5;
const number2: number = 2.8; // we can do this, but it is redundant
const printRes = true;

add(number1, number2, printRes);
checkStr(str)
console.log("trying again with wrong string...")
checkStr("s")

