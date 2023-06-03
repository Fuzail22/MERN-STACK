Promise.resolve()
  .then(() => {
    throw Error("OMG");
  })
  .catch((error) => {
    return "Works";
  })
  .then((data) => {
    throw Error("not worked");
  })
  .catch((error) => console.log(error.message));
