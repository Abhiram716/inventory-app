const category = require("../models/categorySchema");

exports.getCategories = (req, res, next) => {
    category.find().then((result) => {
        res.status(200).json({
            result,
        });
    });
};
