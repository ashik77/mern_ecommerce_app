import express from "express";

import {
  createOrder,
  deleteOrder,
  getIncome,
  getOrder,
  getOrders,
  updateOrder,
} from "../controllers/order.controller.js";

import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);

router.put("/:id", verifyTokenAndAdmin, updateOrder);

router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

router.get("/find/:userId", verifyTokenAndAuthorization, getOrder);

router.get("/", verifyTokenAndAdmin, getOrders);

router.get("/income", verifyTokenAndAdmin, getIncome);

export default router;
