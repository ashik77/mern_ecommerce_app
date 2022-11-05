import express from "express";
import { payment } from "../controllers/payment.controller";

const router = express.Router();

router.post("/payment", payment);

export default router;
