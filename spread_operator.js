// spread operator 1  // immutating an object

const info = { name: "yash", age: 22 };
const newInfo = { ...info, name: "sandesh" };

console.log(newInfo);

// spread opeartor 2  // merging two objects

const infoFamily = { father: "father name", mother: "mother's name" };
const educationInfo = { college: "MITS", degree: "BE" };

const complete = { ...newInfo, ...infoFamily, ...educationInfo };

console.log(complete);
