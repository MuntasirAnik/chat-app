const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const chatRouter = express.Router();

const chatController = require("../controllers/chatController");

chatRouter.post("/create-chat", protect, chatController.createChat);
chatRouter.get("/chats-by-user", protect, chatController.getChatByUser);
// chatRouter.post("/create-group", protect, createGroupChat);
// chatRouter.put("/rename-group", protect, renameGroup);
// chatRouter.put("/remove-group", protect, removefromGroup);
// chatRouter.put("/add-group", protect, addToGroup);

module.exports = chatRouter;
