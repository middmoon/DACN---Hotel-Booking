"use strict";

const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const ManagerOrderController = require("../../controller/manager.order.controller");

router
  .get("/", asyncHandler(ManagerOrderController.getAllOrder))
  .get("/detail/:orderId", asyncHandler(ManagerOrderController.getDetailOrder))
  .get("/pre-order", asyncHandler(ManagerOrderController.getPreOrder))
  .get("/on-order", asyncHandler(ManagerOrderController.getOnOrder))
  .get("/done", asyncHandler(ManagerOrderController.getDoneOrder))
  .get("/cancel", asyncHandler(ManagerOrderController.getCancelOrder))
  .patch(
    "/:orderId/add-room",
    asyncHandler(ManagerOrderController.addRoomToOrder)
  )
  .patch("/update/:orderId", asyncHandler(ManagerOrderController.updateOrder));

module.exports = router;
