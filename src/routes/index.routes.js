const Router = require("express").Router;
const router = Router();
const {
  createTask,
  renderTasks,
  getById,
  updateTask,
  toogleDone,
  deleteTask,
} = require("../controllers/tasks.controller");

router.post("/tasks/add", createTask);

router.get("/", renderTasks);

router.get("/tasks/:id/edit", getById);

router.get("/tasks/:id/toogledone", toogleDone);

//? deberia hacerse mediante PUT
router.post("/tasks/:id/edit", updateTask);

//!DELETE
//? deberia hacerse mediante DELETE
router.get("/tasks/:id/delete", deleteTask);

module.exports = router;
