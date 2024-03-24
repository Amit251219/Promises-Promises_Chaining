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
  .then((result) => {
    console.log("data1 Saved");
    console.log("Rssult pf promise",result);
    return savetoDB("second data");
  })
  .then((result) => {
    console.log("data2 Saved");
    console.log("Rssult pf promise",result);
    return savetoDB("third data");
  })
  .then((result) => {
    console.log("data3 Saved");
    console.log("Rssult pf promise",result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("Rssult pf promise",error);
  });
