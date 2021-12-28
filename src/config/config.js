const { config } = require("dotenv");

config();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;

module.exports = {
  DB_URI: DB_URI || "mongodb://localhost/crud-mongo",
  PORT: PORT || 3000,
};
