const mongoose = require("mongoose");

const URL = "mongodb+srv://Aman:amanmongo@cluster0.kxqacw9.mongodb.net/POS";

mongoose.connect(URL);

let connectionObj = mongoose.connection;
connectionObj.on("connected", () => console.log("connected"));
connectionObj.on("error", () => console.log("not connected"));
