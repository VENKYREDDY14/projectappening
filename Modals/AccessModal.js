const mongoose=require('mongoose');

const AccessSchema=new mongoose.Schema({
    blog_id:{type:mongoose.Schema.Types.ObjectId,ref:'Blog',required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}
})

const AccessModal=mongoose.model('Access',AccessSchema);

module.exports=AccessModal;