require("dotenv").config();
const debug = require("debug")("things:root");
const express = require("express");
const morgan = require("morgan");

const port = process.env.SERVER_PORT || 4000;

const app = express();

(() => {
  app.listen(port);
  debug("que dices loco");
  debug(`Server listening on http://localhost:${port}`);
  app.use(morgan("dev"));
})();
