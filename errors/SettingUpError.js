class SetUpError extends Error {
  // extending Error constructor to create our own
  constructor(message, statusCode) {
    super(message); // getting all the parameters with a keyword 'super' that we rewrite to use

    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // if it's true then it was set by a developer rather then an
    // unexpected error

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = SetUpError;

// usecase: new SetUpError(message<String>, statusCode<1xx-5xx>);
