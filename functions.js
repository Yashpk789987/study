/// method 1 (normal functions)

// function define
function foo1(parameter1, parameter2) {
  console.log(parameter1 + "  " + parameter2);
  return parameter1 + "  " + parameter2;
}

// function calling
foo1("mandeep", "dharmendra");

/// method 2 (arrow functions)
const foo2 = (parameter1, parameter2) => {
  console.log(parameter1 + "  " + parameter2);
  return parameter1 + "  " + parameter2;
};

// function calling
foo2("mandeep", "dharmendra");

//// discussion
// language --> 1. strict type checking JAVA, c , c++ , typescript(only for developer)
// language --> 2. no strict type checking python , javascript

const sum = (a, b) => a + b; // shorthand

const result = sum(2, 3);

console.log("RESULT", typeof result);

// const sum = (a, b) => {
//   return a + b;
// };
