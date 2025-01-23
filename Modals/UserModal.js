const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type:String,reuired:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    role:{type:String,required:true},
    verified:{type:Boolean,default:false}
});

const userModal=mongoose.model('User',userSchema);

module.exports=userModal;