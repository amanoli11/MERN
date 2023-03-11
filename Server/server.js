require("dotenv").config();
const express = require("express");
const errorHandler = require("./helper/errorHandler");
const dbConnect = require("./dbConnect");

const userRoute = require("./routes/UserRoutes");
const uomRoute = require("./routes/uom-routes");
const itemCategoryRoute = require("./routes/itemCategoryRoute");

const app = express();
app.use(express.json());
dbConnect();

app.use("/user", userRoute);
app.use("/uom", uomRoute);
app.use("/itemCategory", itemCategoryRoute);
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port);

// yarn run serve utils/server.js

// const routes = require("../routes/Routes");
// app.use("/", routes);
