const debug = require("debug")("things:server:middlewares:errors");

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ error: "Not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug("It seems I know nothing");
  res.status(500);
  res.json({ error: "Ugly error" });
};

module.exports = {
  notFoundError,
  generalError,
};
