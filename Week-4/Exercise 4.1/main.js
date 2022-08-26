const getNumber = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random % 5 != 0) {
      resolve("Not divisible by five");
    }
    else{
        reject('Divisible by five');
    }
  })
    .then(console.log)
    .catch(console.error)
    .finally(console.log("Promise fulfilled successfuly."))
  