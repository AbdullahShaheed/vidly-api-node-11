const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/vidly", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      winston.log({ level: "info", message: "Connected to MongoDB..." })
    );
};
