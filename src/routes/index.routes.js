const Router = require("express").Router;
const router = Router();

router.get("/", (req, res) => {
  res.send("This is index");
});
router.get("/abaut", (req, res) => {
  res.send("This is abaut");
});
module.exports = router;
