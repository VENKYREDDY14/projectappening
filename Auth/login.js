const bcrypt=require('bcrypt');
const UserModal=require('../Modals/UserModal');
const jwt=require('jsonwebtoken')
require('dotenv').config();

const login=async(req,res)=>{
    const {email,password}=req.body;
   try{
    const isUserExists=await UserModal.findOne({email});
    if(!isUserExists){
        return res.json({message:'user do not exist'});
    }
    const isSame=await bcrypt.compare(password,isUserExists.password);
    if(!isSame){
        return res.json({message:'invalid email or password'});
    }
    const token=jwt.sign({id:isUserExists.id},process.env.SECRET_KEY,{expiresIn:'7d'});
    res.status(200).json({message:'login successful',token});
   }
   catch(error){
    res.json({message:'server erorr',error:error.message});
   }
}

module.exports=login