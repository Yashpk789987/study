// array mutation

const a = [
  { name: "yash", age: 22 },
  { name: "sandesh", age: 21 },
  { name: "dharmendra", age: 23 },
];

console.log(a);

a[2] = { name: "mandeep", age: 24 };

a[1].age = 25; // mutation

a.push({ name: "sakshi", age: 27 }); // mutation

console.log(a);

a[1] = { ...a[1], age: 28 }; // immutation

console.log(a);

const newArray = [...a, { name: "tiwari", age: 19 }];

console.log(newArray);

/// merging two or more arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [100, 200, 300];

const mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray);
