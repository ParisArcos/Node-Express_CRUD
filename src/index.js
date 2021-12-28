const app = require("./app");
require("./db/database");

app.listen(3000);
console.log("Server on port", 3000);
