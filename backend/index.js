const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbconfig");
const router = require("./routes/router");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errormiddleware");

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data

const api = process.env.API_URL;

app.use(`${api}`, router);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("api is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running at port ${PORT}`.yellow.bold));
