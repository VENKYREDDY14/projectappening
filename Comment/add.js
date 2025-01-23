const CommentModel=require('../Modals/CommentModal'); 



const addComment=async(req,res)=>{
    const {blog_id,comment,user_id,commented_at}=req.body;
    try{
        const newComment=await CommentModel.create({
            blog_id,
            comment,
            user_id,
            commented_at
        })
        res.json({message:"comment added successfully"});
    }
    catch(error){
        res.json({message:"error occurred while creating the comment"});
    }
}

module.exports=addComment;