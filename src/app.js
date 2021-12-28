const express = require("express");
const router = require("./routes/index.routes");
const exphbs = require("express-handlebars").engine;
const path = require("path");
const morgam = require("morgan");

const app = express();

//! TEMPLATE ENGINE
//? establecemos donde estan las vistas
app.set("views", path.join(__dirname + "/views"));

//? establecemos la configuracion del template engine
app.engine(
  ".hbs",
  exphbs({
    //? establecemos donde se van a guardar las plantillas
    layoutsDir: path.join(app.get("views"), "layouts"),
    //? establecemos la plantilla principal
    defaultLayout: "main",
    //? establecemos la extension de las plantillas
    extname: ".hbs",
  })
);

//? establecemos el template engine
app.set("view engine", ".hbs");

//!Middleware
app.use(morgam("dev"));
app.use(express.urlencoded({ extended: false }));

//!Routes
app.use(router);

module.exports = app;
