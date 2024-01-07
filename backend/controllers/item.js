const ItemModel = require("../models/itemsSchema");

const createItemByUser = (req,res)=>{
    const user = req.token.userId;

    const {name,image,description,price,category} = req.body;

    const newItem = new ItemModel({
        name,image,description,price,category,user
    });
    

    newItem.save().then((result)=>{
        res.status(200).json({
            success:true,
            message:"Item was posted",
            item:result,
            user:user
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

const getAllItemRandom = (req,res)=>{
    ItemModel.find({}).then((result)=>{
        res.status(200).json({
            success:true,
            message:"Item Random here",
            items:result
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })
}

const getItemsByName=(req,res)=>{
    const name = req.params.name;

    ItemModel.find({_id:name}).then((result)=>{
        res.status(200).json({
            success:true,
            message:`item ${name}`,
            item:result
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })
};

const getItemByUser =(req,res)=>{
    const id = req.params.id;

    console.log(id);
    ItemModel.find({user:id}).then((result)=>{
        res.status(200).json({
            success:true,
            message:`items`,
            item:result
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })

}
// On Dashboard's User will be related to token directly but the home page will be related to params.//!Done
// will be order using every functions here then delete and update//!Done
// get items by category name

module.exports={
    createItemByUser,
    updateItemByUser,
    deleteItemByUser,
    getAllItemRandom,
    getItemsByName,
    getItemByUser

}