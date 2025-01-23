
const blogModal=require('../Modals/BlogModal');

const createBlog=async (req,res)=>{
    const {user_id,title,content,created_at}=req.body;
    try{
        const newBlog=await blogModal.create({
            user_id,
            title,
            content,
            created_at
        })
        res.json({message:'blog created successfully'});
    }
    catch(error){
        res.json({message:'error occurred while creating the block'});
    }
};

module.exports=createBlog;