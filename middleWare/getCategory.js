const Category = require("../models/categoryModel");

exports.getCategory = async (req, res, next) => {
    let category;
    try {
        category = await Category.findById(req.params.id);
        if (category == null) {
            return res.status(404).json({ message: "Cannot find category" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.category = category;
    next();
};
