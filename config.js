const mongoose=require('mongoose');
require('dotenv').config();

const connectToDatabase=async()=>{
    try{
        const mongoUrl=process.env.CONNECTION_STRING;
        const options={useNewUrlParser:true,
            useUnifiedTopology:true,

        }
        await mongoose.connect(mongoUrl,options);
        console.log('connected Successfully');
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
};
module.exports=connectToDatabase;