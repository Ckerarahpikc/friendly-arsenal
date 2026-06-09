module.exports = (callback) => {
  return (req, res, next) => {
    // we asume callback is a promise, therefor .catch will
    // handle the incoming errors, this whole thing will get
    // rid of using 'try...catch...finally' in async functions,
    // we just need to cover whole function inside this 'catch'
    callback(req, res, next).catch(next);
  };
};

// usecase:
// assuming 'catchPromise' is how you named the file where this handler is, then
// import catchPromise from "./path/to/handler";
//
// catchPromise(function (req, res) => {
//    async code stuff
//    ! here you don't have to use try...catch anymore, all the code is
//    ! being handled by this function
// })
