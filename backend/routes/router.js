const express = require("express");

const router = express.Router();

const userRouter = require("./userRoutes");
const chatRouter = require("./chatRoutes");

//auth
router.use("/auth", userRouter);

//chats
router.use("/chats", chatRouter);

module.exports = router;
