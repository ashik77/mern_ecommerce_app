import express from "express";

const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("user test success");
});

// router.post("/users/signin", signIn);

// router.post("/users/googlelogin", googleLogin);

export default router;
