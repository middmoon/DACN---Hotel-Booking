const express = require("express");
const router = express.Router();

// router.use("/register", require("./access/register"));
// router.use("/login", require("./access/login"));
// router.use("/logout", require("./access/logout"));

router.get("/", (req, res) => {
  res.send("hello home");
});

module.exports = router;
