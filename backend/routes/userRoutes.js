const express = require("express");

const userRouter = express.Router();

const registrationController = require("../controllers/userControllers");

userRouter.get("/get-user", registrationController.getUsers);
userRouter.post("/register", registrationController.registerUser);
userRouter.post("/login", registrationController.login);

module.exports = userRouter;
