const mongoose  = require('mongoose');

const commentsSchema = new mongoose.Schema({
    comment:{type:String},
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"}

})

module.exports= mongoose.model('Comment',commentsSchema);