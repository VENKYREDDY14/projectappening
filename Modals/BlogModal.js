const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    title:{type:String,required:true},
    content:{type:String,required:true},
    created_at:{type:Date,required:true,default:Date.now},
    last_modified:{type:Date,required:true,default:Date.now}
});

const blogModal=mongoose.model('Blog',blogSchema);

module.exports=blogModal;