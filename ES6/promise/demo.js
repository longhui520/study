Promise.reject(1)
  .then(r => console.log(1))
  .catch(err => Promise.reject(5))
  .then(r => console.log(3))
  .catch(err => console.log(4));
