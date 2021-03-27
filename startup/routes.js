const express = require("express");
const error = require("../middleware/error");
require("express-async-errors");
const genres = require("../routes/genres");
const customers = require("../routes/customers");
const movies = require("../routes/movies");
const rentals = require("../routes/rentals");
const users = require("../routes/users");
const logins = require("../routes/logins");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", genres);
  //another way to use a router,
  //the url is there in customers.js route
  app.use(customers);
  app.use(movies);
  app.use(rentals);
  app.use(users);
  app.use(logins);
  app.use(error);
};
