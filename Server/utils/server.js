const express = require("express");
const dbConnect = require("../dbConnect");
const errorHandler = require("../helper/errorHandler");

const app = express();
app.use(express.json());

const routes = require("../routes/Routes");
app.use("/", routes);
app.use(errorHandler);

const port = 5000;
app.listen(port);
