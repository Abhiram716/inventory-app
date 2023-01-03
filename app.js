const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const jsonParser = bodyParser.json();

const categoryRouter = require("./routes/category");

app.use("/", jsonParser, categoryRouter);

const dbURI = process.env.DB_URL;
console.log(dbURI);
mongoose.connect("mongodb://localhost/inventoryv1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is connected on port ${PORT}`);
});
