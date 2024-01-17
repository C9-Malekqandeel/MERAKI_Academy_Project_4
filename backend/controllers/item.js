const ItemModel = require("../models/itemsSchema");
const CommentModel = require('../models/commentsSchema')

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

    ItemModel.find({_id:name}).populate('comments').populate("user").exec().then((result)=>{
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

    console.log(req.token);
    ItemModel.find({user:id}).populate('category').populate('user').exec().then((result)=>{
       
        res.status(200).json({
            success:true,
            message:`items`,
            item:result,
            user:req.token
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })

};

const createNewComment =(req,res)=>{
    const comment = req.body.comment;
    const nameUser = req.token.userName;
    const user = req.token.userId;

    const newComment =new CommentModel({
        comment,
        user
    })

    newComment.save().then((result)=>{
        res.status(200).json({
            success:true,
            message:"Comment posted",
            comment:result,
            userName:nameUser
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })
};

const updateComment= (req,res)=>{
    const commentId = req.params.id;
    const nameUser = req.token.userName
    const newOne = req.body.comment;

    CommentModel.findByIdAndUpdate({_id:commentId},{comment:newOne},{new:true}).then((result)=>{
        
        if(!result){
            return res.status(403).json({
                success:false,
                message:"Comment not found"
            })
        }

        res.status(200).json({
            success:true,
            message:'comment updated',
            comment:result,
            userName:nameUser
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })
};

const deleteComment = (req,res)=>{
    const id = req.params.id;

    CommentModel.findByIdAndDelete({_id:id}).then((result)=>{
        
        if(!result){
            return res.status(403).json({
                success:false,
                message:"Comment not found"
            })
        }

        res.status(200).json({
            success:true,
            message:'comment deleted',
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })

}

const getItemQueryById = (req,res)=>{
    const name = req.query.name;
    console.log(name);

    ItemModel.find({name}).populate('comments').then((result)=>{
        if(!result){
            return res.status(403).json({
                success:false,
                message:"Item not found"
            })
        }

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

}

const pushCommentToItem=(req,res)=>{
    const idItem= req.params.id;
    const{comment}=req.body;
    const user=req.token.userId
    const newCommentOne= new CommentModel({
        comment,
        user
    })
    console.log(user);

    newCommentOne.save().then((result)=>{
        console.log(result,"result");
        ItemModel.findByIdAndUpdate({_id:idItem},{ $push:{comments:result._id}},{new:true}).then((result)=>{
            res.status(200).json({
                success:true,
                message:"comment added",
                comment: result
            })
        }).catch((err)=>{
            res.status(500).json({
                success:false,
                message:"Server Error",
                err:err.message
            })
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })});
}

const getFeedBackItem = (req,res)=>{

    const itemId = req.params.id

    ItemModel.find({_id:itemId}).populate({path:"comments"}).then((result)=>{
        if(!result){
            return res.status(403).json({
                success:false,
                message:"Item not found"
            })
        }

        res.status(200).json({
            success:true,
            message:`comment`,
            comment:result[0].comments
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

// Add Query for SearchBar then try using it in find dataItems//!Done

module.exports={
    createItemByUser,
    updateItemByUser,
    deleteItemByUser,
    getAllItemRandom,
    getItemsByName,
    getItemByUser,
    createNewComment,
    updateComment,
    deleteComment,
    getItemQueryById,
    pushCommentToItem,
    getFeedBackItem

}