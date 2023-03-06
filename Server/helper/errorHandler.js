const ErrorHandler = (error, req, res, next) => {
  res
    .status(error.status || 500)
    .send({ message: error.message ?? "Something went wrong!" });
};

module.exports = ErrorHandler;
