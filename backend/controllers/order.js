// On the order page you must be logged in before shown this page

//! comment will be added later

//!Make sure to change the checkout's value once your updated the order

const orderModel = require('../models/ordersSchema');

const createOrder= (req,res)=>{
    const user= req.token.userId;

    const {item,checkout} = req.body;
    const newOrder= new orderModel({
        user,
        item,
        checkout:false
    })

    newOrder.save().then((result)=>{
        res.status(200).json({
            success:true,
            message:"Order was created",
            order:result
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })

}

const updateOrderForCheckout = (req,res)=>{
    const checkout = req.body.checkout;
    const orderId = req.params.id;

    orderModel.findByIdAndUpdate({_id: orderId },{checkout},{new:true}).populate("item").then((result)=>{
        res.status(200).json({
            success:true,
            message:"Order is ready to checkout",
            order:result
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })
}

const deleteOrder = (req,res)=>{
    const id= req.params.id;

    orderModel.findByIdAndDelete({_id:id}).then((result)=>{
        res.status(200).json({
            success:true,
            message:"Order deleted"
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })
}


module.exports = {
    createOrder,
    updateOrderForCheckout,
    deleteOrder

}