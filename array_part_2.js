const arr = [10, 15, 20, 25, 30, 35, 40];

// searching for one element  // linear search
const element = arr.find(function (item) {
  return item % 7 === 0;
});

console.log(element);

const element2 = arr.find((item) => {
  return item % 7 === 0;
});

console.log(element2);

const index = arr.findIndex((item) => {
  return item % 7 === 0;
});

console.log(index);
