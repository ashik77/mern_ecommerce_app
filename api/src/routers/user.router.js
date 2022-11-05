import express from "express";

import {
  deleteUser,
  getAllUsers,
  getUser,
  getUserStats,
  updateUser,
} from "../controllers/user.controller.js";

import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);

router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

router.get("/find/:id", verifyTokenAndAdmin, getUser);

router.get("/", verifyTokenAndAdmin, getAllUsers);

router.get("/stats", verifyTokenAndAdmin, getUserStats);

export default router;
