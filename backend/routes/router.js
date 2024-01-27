const express = require("express");

const router = express.Router();

const userRouter = require("./userRoutes");

//auth
router.use("/auth", userRouter);

module.exports = router;
