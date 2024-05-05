const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const AccessController = require("../../controller/access.controller");
const UserController = require("../../controller/user.controller");

const { verifyToken } = require("../../middleware/auth.middleware");

router
  .get("/", (req, res) => {
    res.send("TEST API V2 FOR USER");
  })
  .get("/test", (req, res) => {
    res.send("TEST API V2 FOR USER");
  })
  .post("/register", asyncHandler(AccessController.signUp))
  .post("/login", asyncHandler(AccessController.login))
  .use(verifyToken)
  .put("/update/:_id", asyncHandler(UserController.updateUserInfo))
  .get("/:_id", asyncHandler(UserController.getUserInfo))
  .post("/refesh", asyncHandler(AccessController.refresh))
  .delete("/logout", asyncHandler(AccessController.logout))
  .get("/order", asyncHandler(UserController.getAllOrder))
  .get("/order/:orderId", asyncHandler(UserController.getAllOrder))
  .post("/make-order", asyncHandler(UserController.makeOrder));

module.exports = router;
