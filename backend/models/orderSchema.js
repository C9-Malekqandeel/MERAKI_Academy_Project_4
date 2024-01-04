const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId ,ref:"User"},
    item: [{type: mongoose.Schema.Types.ObjectId, ref:"Item"}],
    amount: {type: Number}
})

module.exports= mongoose.model("Order", orderSchema);