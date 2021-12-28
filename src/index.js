const app = require("./app");
require("./db/database");
require("./config/config");
const { PORT } = require("./config/config");

app.listen(PORT);
console.log("Server on port", PORT);
