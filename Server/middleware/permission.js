const { HttpStatusCode } = require("../enums/statusCode");
const { AuthUser } = require("../helper/authUser");

exports.Permission = (roles) => async (req, res, next) => {
  if (roles.length < 1) {
    return res.status(HttpStatusCode.NOT_FOUND), res.send("No roles specified");
  }

  const token = req.headers.authorization.split(" ")[1];
  const { _id, role } = await AuthUser(token, res);
  if (!_id) {
    return (
      res.status(HttpStatusCode.NOT_FOUND),
      res.send({ message: "User not found" })
    );
  } else if (!roles.includes(role)) {
    return (
      res.status(HttpStatusCode.BAD_REQUEST),
      res.send({ message: "Permission not granted" })
    );
  } else next();
};
