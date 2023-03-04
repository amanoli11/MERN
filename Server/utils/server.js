const express = require("express");
const dbConnect = require("../dbConnect");

const app = express();
app.use(express.json());
const routes = require("../routes/Routes");

app.use("/", routes);
const port = 5000;

app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Example app listening at port ${port}!`));
