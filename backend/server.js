require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

//.env file variables
const port = process.env.PORT;
const mongo = process.env.MONGO;

const app = express();

//Middlewares
app.use(express.json());
app.use("/user", userRoute);

//Connect to Database
mongoose
  .connect(mongo)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log("Server is Running!");
});
