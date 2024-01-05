const CategoryModel = require("../models/categorySchema");
const ItemsModel= require("../models/itemsSchema");

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
};

const getAllCategory = (req,res)=>{
    CategoryModel.find().then((result)=>{
        res.status(200).json({
            success:true,
            message:"Showing All Categories",
            categories: result
        }).catch((err)=>{
            res.status(500).json({
                success:false,
                message:'Server Error',
                error:err.message
            })
        })
    })

};

const getCategoryByName = (req,res)=>{
    let name = req.params.name;

    ItemsModel.findOne(name).populate("Category").exec().then((result)=>{
        if(!result){
            return res.status(404).json({
                success:false,
                message:"The category not found"
            })
        }
        res.status(200).json({
            success:true,
            message:`category ${name}`,
            category:result

        }).catch((err) => {
            res.status(500).json({
                success: false,
                message: `Server Error`,
                err: err.message,
            });
        });
    })


};

const getCategoryByUser = (req,res)=>{
    const user = req.token.userId;
    
}



module.exports = {
    createCategory,
    getAllCategory,
    getCategoryByName,
}