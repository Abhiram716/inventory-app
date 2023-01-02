const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

// Compile model from schema
module.exports = mongoose.model("Category", CategorySchema);
