const blogModal=require('../Modals/BlogModal');


const viewBlogs=async(req,res)=>{
    try{
        const blogs=await blogModal.find();
        res.json({message:'data fetched successfully',blogs});
    }
    catch(error){
        res.json({message:'error while fetching blogs'});
    }
}
module.exports=viewBlogs;