const arr = [
  { name: "yash", age: 20 },
  { name: "yash2", age: 21 },
  { name: "yash3", age: 22 },
];

const filteredData = arr.filter(function (item) {
  return item.age > 20;
});

console.log(filteredData);

//

// $.getJSON(url, params, function (data) {
//   console.log(data);
// });
