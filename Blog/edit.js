const blogModal=require('../Modals/BlogModal');

const editBlog=async(req,res)=>{
    console.log('hi');
    const {blog_id,title,content,last_modified}=req.body;
    try{
        const update_blog=await blogModal.findByIdAndUpdate({_id:blog_id},
            {
                title,
                content,
                last_modified
            },
            {new:true}
        )
        res.json({message:'successfully edited the blog',update_blog});
    }
    catch(error){
        res.json({message:'error occurred while editing the blog'});
        console.log(error);
    }
}
module.exports=editBlog;