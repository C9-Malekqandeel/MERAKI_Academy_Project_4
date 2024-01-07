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
    let idName = req.params.name;
    console.log(idName);

    ItemsModel.find({category :idName}).populate('category').then((result)=>{
        if(!result){
            return res.status(404).json({
                success:false,
                message:"The category not found"
            })
        }
        console.log(result);
        res.status(200).json({
            success:true,
            message:`category`,
            ItemOfCategory:result

        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
        });
    });
};

const getCategoryByUser = (req,res)=>{
    const user = req.token.userId;
    console.log(user);

    ItemsModel.find({_id:user}).then((result)=>{
        if(!result){
            return res.status(404).json({
                success:false,
                message:"The category not found"
            })
        }
        res.status(200).json({
            success:true,
            message:`category ${user}`,
            category:result

        }).catch((err) => {
            res.status(500).json({
                success: false,
                message: `Server Error`,
                err: err.message,
            });
        });
    })

}

// Get category for all item on the same user /:idUser after click
const getAllCategoryForUser=(req,res)=>{
    const id = req.params.id;
    const name= req.token.userName;
    CategoryModel.findMany(name).json({
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

}

module.exports = {
    createCategory,
    getAllCategory,
    getCategoryByName,
    getCategoryByUser,
    getAllCategoryForUser
}