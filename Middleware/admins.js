const jwt=require('jsonwebtoken');
const userModal=require('../Modals/UserModal')
require('dotenv').config();

const admins=async(req,res,next)=>{
    let token;
    const authToken=req.headers.authorization;
    if(authToken!==undefined){
     token=authToken.split(" ")[1];
    }
    console.log(token);
    if(token===undefined){
        res.json({message:'invalid jwt token'});
    }
  
    else{
        jwt.verify(token,process.env.SECRET_KEY,async(error,payload)=>{
            if(error){
                res.json({message:'invalid jwt token'});
            }
            else{
                const _id=payload.id
                const user=await userModal.findOne({_id});
                if(user.role!=="admin"){
                    return res.json({message:'this action can only done by admin'})
                }
                else{
                    next();
                }
            }
        })
    }
}

module.exports=admins;