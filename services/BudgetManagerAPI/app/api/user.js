const mongoose = require('mongoose');

const api = {};

api.signup = (User) => (req,res) =>{
    if(!req.body.username || !req.body.password){
        res.json({success:false,message:'need username and password'})
    }else{
        const user = new User({
            username: req.body.username,
            password: req.body.password,
        })
        user.save((error)=>{
            if(error){
                return res.status(400).json({success:false,message:'username exists'})
            }
            res.json({success:true,message:'Account Created'})
        })
    }
} 

module.exports = api;