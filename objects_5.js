const info = { name: "yash", age: 22, gender: "male" };

console.log(info);

info.name = "sandesh"; // mutating a object   --> process is slow

console.log(info);

const newInfo = Object.assign(info, { name: "dharmendra" }); // immutating an object  --> fast
console.log(newInfo);

//// spread operator

const newInfo2 = { ...newInfo, name: "mandeep" };
console.log(newInfo2);

/// Google search mutaing an object vs immutating an object
