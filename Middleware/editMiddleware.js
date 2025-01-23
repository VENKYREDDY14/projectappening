const jwt=require('jsonwebtoken');
const userModal=require('../Modals/UserModal');
const blogModal=require('../Modals/BlogModal');
const AccessModal=require('../Modals/AccessModal');

const editMiddleware=async(req,res,next)=>{
    let token;
    const {blog_id}=req.body;
    const authToken=req.headers.authorization;
    if(authToken!==undefined){
     token=authToken.split(" ")[1];
    }
    if(token===undefined){
        res.json({message:'invalid jwt token'});
    }
   
    else{
        jwt.verify(token,'appening',async(error,payload)=>{
            if(error){
                res.json({message:'invalid jwt token'});
            }
            else{
                const _id=payload.id
                const user=await userModal.findOne({_id});
                const record=await AccessModal.findOne({user_id:_id,blog_id});
                if(user.role==="admin" || record){
                    next();
                }
                else{
                    return res.json({message:'this action can only done by admin and editor',record,user})

                }
            }
        })
    }
}

module.exports=editMiddleware;