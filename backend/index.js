const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbconfig");
const router = require("./routes/router");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errormiddleware");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());
connectDB();

app.use(express.json()); // to accept json data

const api = process.env.API_URL;
app.get("/", (req, res) => {
  res.send("api is running");
});

app.use(`${api}`, router);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT; //|| 5002;
app.listen(PORT, console.log(`server is running at port ${PORT}`.yellow.bold));
