const validator = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      console.log("res", res);
      res
        .status(res.statusCode === 200 ? 500 : res.statusCode)
        .send(error.message);
    }
  };
};

module.exports = validator;
