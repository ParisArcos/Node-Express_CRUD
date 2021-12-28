const Task = require("../models/Task");

//!CREATE
const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

//!READ
const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  const formAction = "/tasks/add";
  const btnText = "Add Task";
  res.render("index", {
    tasks: tasks,
    formAction: formAction,
    btnText: btnText,
  });
};

const getById = async (req, res) => {
  const task = await Task.findById(req.params.id).lean();
  const formAction = `/tasks/${task._id}/edit`;
  const btnText = "Update Task";
  res.render("edit", {
    task: task,
    formAction: formAction,
    btnText: btnText,
  });
};

//!UPDATE

const updateTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const toogleDone = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};

//!DELETE
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTask: createTask,
  renderTasks: renderTasks,
  getById: getById,
  updateTask: updateTask,
  toogleDone: toogleDone,
  deleteTask: deleteTask,
};
