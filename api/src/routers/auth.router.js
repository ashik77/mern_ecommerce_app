import express from "express";

import { register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);

// router.post("/users/signin", signIn);

// router.post("/users/googlelogin", googleLogin);

export default router;
