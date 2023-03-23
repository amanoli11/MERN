exports.errorHandler = (statusCode, message, res) => {
  return res.status(statusCode).send({
    message: message,
  });
};
