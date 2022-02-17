require("dotenv").config();
const debug = require("debug")("things:root");

const connectToDataBase = require("./db");
const serverUp = require("./server/index");

const port = process.env.SERVER_PORT || 4000;
const mongoConnection = process.env.LOGIN_DB_STRING;

(async () => {
  try {
    await serverUp(port);
    await connectToDataBase(mongoConnection);
    debug("que dices loco");
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
