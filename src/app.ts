// TSC          TYPE SCRIPT COMPILER
// tsc app.ts -> app.js
// tsc app.ts --watch (constantly watch the file and update the corresponding js file) when file is saved to disk (very nice)
// what if we have multiple files?
// first create a project
// tsc --init (run in main project directory) -> will create tsconfig.json file
// then we can just run:
// "tsc" which will compile all *.ts files into their corresponding *.js
// again we can do "tsc -w" but this is now for all files

let logged;

const userName = "Alex";

console.log(userName);

const button = document.querySelector("button")!; // find the first button
button.addEventListener("click", () => {
    console.log("clicked!");
    logged = true;
    console.log(logged);
});

// since we chose to compile to ES2020, we have a bunch of feature globally available
const map = new Map();