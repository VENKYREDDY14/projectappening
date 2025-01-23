const AccessModel=require('../Modals/AccessModal');
const userModal=require('../Modals/UserModal');

const assignEditor=async(req,res)=>{
    const {blog_id,user_id}=req.body;
    try{
        const user=await userModal.findOne({_id:user_id});
       if(user.role==='editor'){
        await AccessModel.create({
            blog_id,
            user_id
        })
        res.json({message:'successfully given access to user'});
    }
    else{
        res.json({message:'only assign to editor'});
    }
    }
    catch(error){
        res.json({message:'error occurred while giving access'});
    }
}

module.exports=assignEditor