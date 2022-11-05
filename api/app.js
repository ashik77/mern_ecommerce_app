import express from "express";
import dotenv from "dotenv";

import authRoute from "./src/routers/auth.router.js";
import userRoute from "./src/routers/user.router.js";
import productRoute from "./src/routers/product.router.js";
import cartRoute from "./src/routers/cart.router.js";
import orderRoute from "./src/routers/order.router.js";
import paymentRoute from "./src/routers/payment.router.js";

dotenv.config({ path: ".env" });

const app = express();

app.set("port", process.env.PORT);

app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ extended: true }));

app.use("/api/v1/auth", authRoute);

app.use("/api/v1/users", userRoute);

app.use("/api/v1/products", productRoute);

app.use("/api/v1/carts", cartRoute);

app.use("/api/v1/orders", orderRoute);

app.use("/api/v1/checkout", paymentRoute);

export default app;
