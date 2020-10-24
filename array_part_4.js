// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const arr = [10, 15, 20, 25, 30, 35, 40];

const sum = arr.reduce(function (total, currentValue, currentIndex) {
  console.log(total, "TOTAL");
  console.log(currentValue, "cureent Value");
  return total + currentValue;
});

console.log(sum);

const sum2 = arr.reduce((total, currentValue, currentIndex) => {
  console.log(total, "TOTAL");
  console.log(currentValue, "cureent Value");
  return total + currentValue;
});

console.log(sum2);

// shorthand

const sum3 = arr.reduce(
  (total, currentValue, currentIndex) => total + currentValue
);

console.log(sum3);

// const newArray3 = arr.filter((item) => {
//   return item % 2 === 0;
// });

// console.log(newArray3);

// const newArray4 = arr.filter((item) => item % 2 === 0); /// short hand

// console.log(newArray3);
