import express from "express";
import dotenv from "dotenv";

import userRoute from "./src/routers/user.router.js";
// import memoryRoute from "./src/routers/memory.router.js";

dotenv.config({ path: ".env" });

const app = express();

app.set("port", process.env.PORT);

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ extended: true }));
// app.use(cors());

// //app.use("/api/v1", postRoute);
app.use("/api/v1", userRoute);
// app.use("/api/v1/memory", memoryRoute);

export default app;
