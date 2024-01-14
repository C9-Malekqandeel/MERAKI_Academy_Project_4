const UserModel = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const register = (req, res)=>{
    const {userName, email, password, contact , location, role}= req.body;

    const newUser= new UserModel({
        userName, email, password, contact , location, 
        role:"65970717d41c8fd9496770a1"
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
    const password = req.body.password;
    const email = req.body.email.toLowerCase();

    UserModel.findOne({email}).populate("role").exec().then(async (result)=>{
        if(!result){
            return res.status(403).json({
                success:false,
                message:`The email doesn't exist`,
            })
        }
        try{
            const valid = await bcrypt.compare(password,result.password);

            if(!valid){
                return res.status(403).json({
                    success:false,
                    message:"The password you have entered is incorrect"
                })
            }

            const payload = {
                userId:result._id,
                userName:result.userName,
                role:result.role,
                contact:result.contact
            }

            const options = {
                expiresIn:"120m"
            }

            const token = jwt.sign( payload,process.env.SECRET,options)

            res.status(200).json({
                success:true,
                message:"Logged In Successfully",
                token:token,
                user:result
            });
        } catch (error){
            throw new Error (error.message)
        }
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
        })
    })

}

module.exports={
    register,
    login
}