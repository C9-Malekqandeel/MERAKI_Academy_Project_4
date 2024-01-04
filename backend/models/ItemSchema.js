const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name : {type:String , require: true},
    image : {type:String , require: true},
    description : {type:String , require: true},
    price : {type:String , require: true},
    category:{type :mongoose.Schema.Types.ObjectId, ref:"Category"},
    user :{type :mongoose.Schema.Types.ObjectId, ref:"User"}

})

module.exports = mongoose.model("Item", itemSchema);