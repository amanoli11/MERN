const express = require("express");
const dbConnect = require("../dbConnect");
const errorHandler = require("../helper/errorHandler");

const app = express();
app.use(express.json());

// const routes = require("../routes/Routes");
// app.use("/", routes);

const uomRoutes = require("../routes/uom-routes");
app.use("/uom", uomRoutes);
app.use(errorHandler);

const port = 5000;
app.listen(port);
