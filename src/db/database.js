const mongoose = require("mongoose");

(async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/crud-mongo");
    console.log("DB connected to", db.connection.name);
  } catch (err) {
    console.log(err);
  }
})();
