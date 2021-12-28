const Router = require("express").Router;
const router = Router();
const Task = require("../models/Task");

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.render("index", { tasks: tasks });
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/edit", (req, res) => {
  res.render("edit");
});
router.post("/tasks/add", async (req, res) => {
  const task = Task(req.body);
  await task.save();
  res.redirect("/");
});

module.exports = router;
