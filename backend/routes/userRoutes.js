const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const userRouter = express.Router();

const registrationController = require("../controllers/userControllers");

userRouter.get("/get-user", registrationController.getUsers);
userRouter.get("/all-users", protect, registrationController.allUser);
userRouter.post("/register", registrationController.registerUser);
userRouter.post("/login", registrationController.login);

module.exports = userRouter;
