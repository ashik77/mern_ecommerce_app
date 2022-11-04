import express from "express";

import { login, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

// router.post("/users/signin", signIn);

// router.post("/users/googlelogin", googleLogin);

export default router;
