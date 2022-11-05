import express from "express";

import {
  createCart,
  deleteCart,
  getCart,
  getCarts,
  updateCart,
} from "../controllers/cart.controller.js";

import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createCart);

router.put("/:id", verifyTokenAndAuthorization, updateCart);

router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

router.get("/find/:userId", verifyTokenAndAuthorization, getCart);

router.get("/", verifyTokenAndAdmin, getCarts);

export default router;
