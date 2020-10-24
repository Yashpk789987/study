const arr = [10, 15, 20, 25, 30, 35, 40];

const newArray2 = arr.filter(function (item) {
  return item % 2 === 0;
});

console.log(newArray2);

const newArray3 = arr.filter((item) => {
  return item % 2 === 0;
});

console.log(newArray3);

const newArray4 = arr.filter((item) => item % 2 === 0); /// short hand

console.log(newArray3);
