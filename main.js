// const makePromise = (text,delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA,promiseB])
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// const makePromise = (text,delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.race([promiseA,promiseB])
//   .then(value => console.log(value))
//   .catch(error => console.log(error));


const makeGreeting = guestName => {
  if (guestName === "" || guestName === undefined) {
    return Promise.reject("guest name must not be empty");
  }
  return Promise.resolve(`welcome ${guestName}`);
};

makeGreeting("mango")
  .then(greeting => console.log(greeting))
  .catch(error => console.log(error));