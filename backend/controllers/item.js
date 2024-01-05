const ItemModel = require("../models/itemsSchema");

const createItemByUser = (req,res)=>{
    const userId = req.token.userId;
    const {name,image,description,price,category,user} = req.body;

    const newItem = new ItemModel({
        name,image,description,price,category,user
    });

    newItem.save().then((result)=>{
        res.status(200).json({
            success:true,
            message:"Item was posted",
            item:result,
            user:userId
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })
}

const 
const updateItemByUser = (req,res)=>{

}

module.exports={
    createItemByUser
}