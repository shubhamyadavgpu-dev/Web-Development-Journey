const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise is accepted :");
  } else {
    reject("Promise is rejected :");
  }
});

promise
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });
