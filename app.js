function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10 + 1);
    if (internetspeed > 4) {
      resolve("sucess : data was saved");
    } else {
      reject("Failure: weak connection ");
    }
  });
}

let request = savetoDB("Amits Data");
request
  .then(() => {
    console.log("Promise was resolved");
    console.log(request);
  })
  .catch(() => {
    console.log("Promise was rejected ");
    console.log(request);
  });

// other way

savetoDB("Test Data")
  .then(() => {
    console.log("Promise was resolved");
    console.log(request);
  })
  .catch(() => {
    console.log("Promise was rejected ");
    console.log(request);
  });

//promise chaining

savetoDB("first Data")
  .then(() => {
    console.log("data1 Saved");
    return savetoDB("second data");
  })
  .then(() => {
    console.log("data2 Saved");
    return savetoDB("third data");
  })
  .then(() => {
    console.log("data3 Saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
