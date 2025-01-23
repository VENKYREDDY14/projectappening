const blogModal=require('../Modals/BlogModal');

const deleteBlog=async(req,res)=>{
    const {blogId}=req.params;
    try{
        await blogModal.findByIdAndDelete(blogId);
        res.json({message:'blog deleted successfully'})
    }
    catch(error){
        res.json({message:'error while deleting the blog',error});
    }
}

module.exports=deleteBlog;