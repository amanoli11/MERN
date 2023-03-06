const TryCatchHandler = (callback) => (req, res, next) => {
  Promise.resolve(callback(req, res, next)).catch(next);
};
module.exports = TryCatchHandler;

// const TryCatchHandler = (callback) => {
//   try {
//     callback();
//   } catch (error) {
//     next({ status: res.statusCode === 200 && 500, message: error.message });
//   }
// };

// const validator = (callback) => {
//   return async (req, res, next) => {
//     try {
//       await callback(req, res, next);
//     } catch (error) {
//       res.status(res.statusCode === 200 && 500).send(error.message);
//     }
//   };
// };

// const validator = (callback) => async (req, res, next) => {
//   try {
//     await callback(req, res, next);
//   } catch (error) {
//     res.status(res.statusCode === 200 && 500).send(error.message);
//   }
// };

// function catchAsyncErrors(middleware) {
//   return async function (req, res, next) {
//     try {
//       await middleware(req, res, next);
//     } catch (err) {
//       next(err);
//     }
//   };
// }
// router.get(
//   "/tasks",
//   catchAsyncErrors(async (req, res, next) => {
//     const data = await TaskService.getTasks();
//     res.send({ code: 200, message: "Success", data });
//   })
// );
