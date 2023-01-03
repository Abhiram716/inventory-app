const Category = require("../models/categoryModel");

exports.categoryIndex = (req, res) => {
    Category.find().then((category) => res.json(category));
};

exports.getCategoryItem = (req, res) => {
    res.json(res.category);
};

exports.addCategoryToDb = async (req, res) => {
    let category = new Category({
        name: req.body.name,
        description: req.body.description,
    });
    try {
        let newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        await res.category.remove();
        res.json({ message: "Deleted Category" });
    } catch (error) {
        res.status(500);
    }
};

exports.updateCategory = async (req, res) => {
    if (req.body.name != null) {
        res.category.name = req.body.name;
    }
    if (req.body.description != null) {
        res.category.description = req.body.description;
    }
    try {
        let updatedCategory = await res.category.save();
        res.json(updatedCategory);
    } catch (error) {
        res.status(500);
    }
};
