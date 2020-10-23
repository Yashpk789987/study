const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);

// // method 1
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

// // method 2 (arrow function)
// arr.forEach((element) => {
//   console.log(element);
// });

// // method 2 (normal function)
// arr.forEach(function (element) {
//   console.log(element);
// });

// (map , filter, reducer)
// method 3 map

arr.map(function (item, index) {
  console.log(item, "Item");
  console.log(index, "Index");
});
