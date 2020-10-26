/// function --> return promise --> resolve --> even number
/// odd number --> reject

/// javascript synchronous behviour
// function isEvenFunction(number) {
//   if (number % 2 === 0) {
//     return "Even Number";
//   } else {
//     return "Odd Number";
//   }
// }

// console.log("hello");
// console.log(isEvenFunction(3));
// console.log("hii");

/// javascript asynchronous behaviour
function isEvenPromise(number) {
  return new Promise(function (resolve, reject) {
    if (number % 2 === 0) {
      resolve("Even Number");
    } else {
      reject("Odd Number");
    }
  });
}

/// calling method 1

// console.log("hello");
// isEvenPromise(4)
//   .then((result) => console.log("In then", result))
//   .catch((err) => console.log("In catch", err));
// console.log("hii");

// let data = {};

// console.log("hello");
// isEvenPromise(4)
//   .then((result) => (data = result))
//   .catch((err) => console.log("In catch", err));
// console.log("hii", data);

// callback hell
// console.log("hello");
// isEvenPromise(4)
//   .then((result) => {
//     console.log("hii", result);
//     foo().then(() => {
//         doo2().then()
//     })
//   })
//   .catch((err) => console.log("In catch", err));

// synchronizing the behaviour of promise

async function foo(params) {
  try {
    console.log("hello");
    const data = await isEvenPromise(4);
    // const data = await isEvenPromise(4);
    const data2 = await isEvenPromise(6);
    const data3 = await isEvenPromise(8);
    console.log(data, data2, data3);
    console.log("hii");
  } catch (error) {
    console.log("error", error);
  }
}

foo();
