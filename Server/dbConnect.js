const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/AMS";

mongoose.connect(URL);

let connectionObj = mongoose.connection;
connectionObj.on("connected", () => console.log("connected"));
connectionObj.on("error", () => console.log("not connected"));
