const express = require("express");
const category = require("../controllers/category");

const router = express.Router();

// GET home page, which shows a list of all categories
router.get("/", category.getCategories);

module.exports = router;
