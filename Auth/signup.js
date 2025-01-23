const bcrypt=require('bcrypt');
const UserModal=require('../Modals/UserModal');
const jwt=require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

let verificationUrl;

const sendToken=async(email,token,name)=>{
    const transporter=nodemailer.createTransport({service:"Gmail",
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD,
        }
    });

     verificationUrl = `http://appening.com/verify-email?token=${token}`; 

    const mailOptions={
        from:'venkyreddy2031@gmail.com',
        to:email,
        subject:"Your OTP code",
        text:`Hi ${name} ! ! Greetings from the appening,here is your link to verify :${verificationUrl}`
    };
    await transporter.sendMail(mailOptions);
}



const signUpUser=async(req,res)=>{
    const {name,email,password,role}=req.body;
    try{
        const alreadyExists=await UserModal.findOne({email});
        if(alreadyExists){
            return res.status(400).json({message:'User already exists'});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await UserModal.create({
            name,
            email,
            password:hashedPassword,
            role
        });
        const token=jwt.sign({id:newUser._id},process.env.SECRET_KEY,{expiresIn:'7d'});
        await sendToken(email, token, name);
        res.status(200).json({ message: 'User added successfully. Please check your email to verify your account.',verificationUrl});
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'something went wrong'});
    }
};

module.exports=signUpUser;