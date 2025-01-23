const jwt=require('jsonwebtoken');
const UserModal=require('./Modals/UserModal');

const verifyEmail=async (req,res)=>{
    const { token } = req.query;
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await UserModal.findById(decoded.id);
  
        if (!user) return res.status(400).json({ message: 'Invalid token' });

        user.verified = true; 
        await user.save();
        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
     
        res.status(400).json({ message: 'Invalid or expired token' });
    }
}

module.exports=verifyEmail;
