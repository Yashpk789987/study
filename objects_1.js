const obj = { name: "sandesh", age: 21 };

const keys = ["name", "age"];

console.log("NAME ::: ", obj.name);
console.log("AGE ::: ", obj.age);

console.log("NAME ::: ", obj["name"]);
console.log("AGE ::: ", obj["age"]);

// dynamic way of accessing
keys.map((item, index) => {
  console.log(`VALUE ${index}`, obj[item]); // ==> console.log("VALUE " + index, obj[iten])
});
