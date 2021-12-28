const Router = require("express").Router;
const router = Router();
const Task = require("../models/Task");

//!CREATE
router.post("/tasks/add", async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    alert("Error");
    console.log(error);
  }
});

//!READ
router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  const formAction = "/tasks/add";
  const btnText = "Add Task";
  res.render("index", {
    tasks: tasks,
    formAction: formAction,
    btnText: btnText,
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

//!UPDATE
router.get("/edit/:id", async (req, res) => {
  const task = await Task.findById(req.params.id).lean();
  const formAction = `/edit/${task._id}`;
  const btnText = "Update Task";
  res.render("edit", {
    task: task,
    formAction: formAction,
    btnText: btnText,
  });
});

router.get("/toogleDone/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
});

//? deberia hacerse mediante PUT
router.post("/edit/:id", async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

//!DELETE
//? deberia hacerse mediante DELETE
router.get("/delete/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
