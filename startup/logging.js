const winston = require("winston");

module.exports = function () {
  winston.add(
    new winston.transports.File({
      filename: "uncaughtExceptions.log",
      level: "error",
      handleExceptions: true,
      handleRejections: true,
    })
  );
  winston.add(
    new winston.transports.File({
      filename: "logfile.log",
      level: "info",
    })
  );
  winston.add(new winston.transports.Console());
};
