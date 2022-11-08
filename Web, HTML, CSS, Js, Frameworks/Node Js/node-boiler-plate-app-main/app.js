const express = require("express");
const expressLogger = require("express-bunyan-logger");
const cors = require("cors");
const router = require("./routes");

require("./models");

process.on("uncaughtException", (e) => {
  console.log(e);
});

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));
app.use(
  expressLogger({
    excludes: [
      "headers",
      "req",
      "user-agent",
      "short-body",
      "http-version",
      "req-headers",
      "res-headers",
      "body",
      "res",
    ], // remove extra details from log
  })
);
// app.use(expressLogger.errorLogger());
app.use(cors());

// routes
app.use("/api", router);

// catch 404 later
app.use((req, res) => {
  return res.status(404).send("Error 404, Route not found");
});

// error handling
app.use((err, req, res, next) => {
  // for now log the error and return 500; need to handle it differently in future
  if (res.headersSent) {
    return next(err);
  }
  req.log.error(err);
  return res.status(500).send(err.message);
});

module.exports = app;
