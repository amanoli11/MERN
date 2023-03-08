const express = require("express");
const dbConnect = require("../dbConnect");
const errorHandler = require("../helper/errorHandler");

const uomRoute = require("../routes/uom-routes");
const itemCategoryRoute = require("../routes/itemCategoryRoute");

const app = express();
app.use(express.json());

app.use("/uom", uomRoute);
app.use("/itemCategory", itemCategoryRoute);
app.use(errorHandler);

const port = 5000;
app.listen(port);

// yarn run serve utils/server.js

// const routes = require("../routes/Routes");
// app.use("/", routes);
