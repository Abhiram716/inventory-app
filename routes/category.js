const express = require("express");
const middleWare = require("../middleWare/getCategory");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

//get all categories
router.get("/", categoryController.categoryIndex);

//post a category to db
router.post("/post", categoryController.addCategoryToDb);

//delete a category with matching id
router.delete(
    "/delete/:id",
    middleWare.getCategory,
    categoryController.deleteCategory
);

//get category matching id
router.get("/:id", middleWare.getCategory, categoryController.getCategoryItem);

//update a category with matching id
router.patch(
    "/update/:id",
    middleWare.getCategory,
    categoryController.updateCategory
);

module.exports = router;

