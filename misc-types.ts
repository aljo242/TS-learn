// unknown is like "any", but provides a bit more safety
// if a type is "any", it is like we are just turning TS off
// if "unknown", TS will do static checking so we cannot
// assign other types to unknown without runtime checking
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Alex";
// userName = userInput; cannot do
if (typeof userInput === 'string') {
    userName = userInput; // this is valid with extra runtime check
}

// below we are using the "never" return type
// this function will always throw, and will
// NEVER return a value, so we can give it type never
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError("Error Occured!", 500);