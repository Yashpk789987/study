// es5
const { data, foo } = require("./named_export_ex");

console.log(data);
foo();

// es5
const { data: importedData, foo: functionFoo } = require("./named_export_ex");

console.log(importedData);
functionFoo();

// es6
// import { data, foo } from "./named_export_ex";
// es6
// import { data as importedData , foo as functionFoo } from "./named_export_ex";
