const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Project4').then(()=>{
    console.log("DB ready to use")
}).catch((err)=>{
    console.log(err);
})

