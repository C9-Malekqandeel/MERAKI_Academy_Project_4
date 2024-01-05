const ItemModel = require("../models/itemsSchema");

const createItemByUser = (req,res)=>{
    const userId = req.token.userId;
    const user = req.params.name

    const {name,image,description,price,category} = req.body;

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

const updateItemByUser = (req,res)=>{
    const idItem = req.params.id;
    const userId = req.token.userId;
// we don't provide user in Model to get it from token

    const {name,image,description,price,category} = req.body;

    ItemModel.findByIdAndUpdate({_id:idItem},{name,image,description,price,category},{new:true}).then((result)=>{
        if(!result){
            return res.status(404).json({
                success:false,
                message:'Item is not found'
            })
        }
        res.status(200).json({
            success:true,
            message:"Item was Updated",
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

const deleteItemByUser = (req,res)=>{
    const idItem = req.params.id;
    const userId = req.token.userId;

    ItemModel.findOneAndDelete({_id:idItem}).then((result)=>{
        if(!result){
            return res.status(404).json({
                success:false,
                message:'Item is not found',
                user:userId
            })
        }
        res.status(200).json({
            success:true,
            message:'Item was deleted'
        })
    }).catch((err)=>{
        res.status(500).json({
        success:false,
        message:'Server Error',
        err:err.message
        })
    })
}
module.exports={
    createItemByUser,
    updateItemByUser,
    deleteItemByUser
}