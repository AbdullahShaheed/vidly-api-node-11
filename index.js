const express = require("express");
const app = express();
const winston = require("winston");

require("./startup/logging")();
require("./startup/db")();
require("./startup/routes")(app);
require("./startup/configuration")();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  winston.log({ level: "info", message: `Listening on port ${port}...` });
});
