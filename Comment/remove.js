const CommentModal=require('../Modals/CommentModal');

const removeComment=async(req,res)=>{
    const {comment_id}=req.params;
    const {user_id}=req.body;
    console.log(user_id);
    try{
        const comment=await CommentModal.findOne({_id:comment_id});
        if(comment.user_id.toString()===user_id){
        const deleteComment=await CommentModal.findByIdAndDelete(comment_id);
        res.json({message:"comment deleted successfully"});
        }
    }
    catch(error){
        res.json({message:"error while deleting the comment"});
        console.log(console.error);
        
    }
}
module.exports=removeComment;