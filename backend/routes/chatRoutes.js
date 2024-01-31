const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const chatRouter = express.Router();

const chatController = require("../controllers/chatController");

chatRouter.post("/create-chat", protect, chatController.createChat);
chatRouter.get("/chats-by-user", protect, chatController.getChatByUser);
chatRouter.post("/create-group", protect, chatController.createGroupChat);
chatRouter.put("/rename-group", protect, chatController.renameGroup);
chatRouter.put("/remove-from-group", protect, chatController.removefromGroup);
chatRouter.put("/add-to-group", protect, chatController.addToGroup);

module.exports = chatRouter;
