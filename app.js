const express = require("express");
require("dotenv").config();
const app = express();

const categoryRouter = require("./routes/category");

//Set up mongoose connection
const mongoose = require("mongoose");
const url = process.env.DB_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/", categoryRouter);

app.listen(3000, () => {
    console.log("abhi");
});
