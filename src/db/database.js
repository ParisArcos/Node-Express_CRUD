const mongoose = require("mongoose");
const { DB_URI } = require("../config/config");

(async () => {
  try {
    const db = await mongoose.connect(DB_URI);
    console.log("DB connected to", db.connection.name);
  } catch (err) {
    console.log(err);
  }
})();
