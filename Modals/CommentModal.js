const mongoose=require('mongoose');

const CommentSchema=new mongoose.Schema({
    blog_id:{type:mongoose.Schema.Types.ObjectId,ref:'Blog',required:true},
    comment:{type:String,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    commented_at:{type:Date,default:Date.now}
})

const commentModel=mongoose.model('Comment',CommentSchema);

module.exports=commentModel;