const CategoryModel = require("../models/categorySchema");

const createCategory = (req,res)=>{
    const {name , image}= req.body;

    const newCategory = new CategoryModel({
        name , image
    })

    newCategory.save().then((result) => {
        res.status(201).json({
          success: true,
          message: `Category created`,
          Category: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        })});
}

const getCategory = (req,res)=>{
    
}

module.exports = {
    createCategory,
}