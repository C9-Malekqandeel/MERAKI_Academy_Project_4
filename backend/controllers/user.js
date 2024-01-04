const UserModel = require("../models/userSchema");

const register = (req, res)=>{
    const {userName, email, password, contact , location, role}= req.body;

    const newUser= new UserModel({
        userName, email, password, contact , location, role
    })

    newUser.save().then((result) => {
        res.status(201).json({
            success: true,
            message: `UserAccount created`,
            user: result,
        });
        })
        .catch((err) => {
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
        })});

}

const login=(req,res)=>{
    const 
}

module.exports={
    register,

}