const express=require('express');
const connectToDatabase=require('./config')
require('dotenv').config();
const signUpUser=require('./Auth/signup');
const loginUser=require('./Auth/login');
const createBlog=require('./Blog/create');
const editBlog=require('./Blog/edit');
const deleteBlog=require('./Blog/delete');
const adminsMiddleware=require('./Middleware/admins');
const addComment=require('./Comment/add');
const removeComment=require('./Comment/remove');
const assignEditor=require('./Editor/assignEditor');
const editMiddleware=require('./Middleware/editMiddleware');
const viewBlogs=require('./Blog/view');
const verifyEmail=require('./verify');
const userMiddleware=require('./Middleware/userMiddlware');

const app=express();
app.use(express.json());
const port=process.env.PORT;

connectToDatabase();

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

app.post('/register',signUpUser);
app.post('/login',loginUser);
app.post('/create-blog',adminsMiddleware,createBlog);
app.put('/edit-blog',editMiddleware,editBlog);
app.delete('/delete-blog/:blogId',adminsMiddleware,deleteBlog);
app.post('/add-comment',userMiddleware,addComment);
app.delete('/remove-comment/:comment_id',userMiddleware,removeComment);
app.post('/assign',adminsMiddleware,assignEditor);
app.get('/view',viewBlogs)
app.get('/verify-email',verifyEmail);