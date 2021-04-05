const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
require('../db/conn');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
// all the routes here  
router.get('/',(req,res)=>{
    res.send('this is home page routing Code');
})
router.get('/login',(req,res)=>{
    res.send('this is login page routing Code');
})
// all other page routing here

// code for login,register
// post the register Form data into db;
router.post('/register',async (req,res)=>{
    const {name,email,phone,work,password,cpassword} = req.body;
    //  check the fileds is empty or not
    if(!name,!email,!phone,!work,!password,!cpassword){
        return res.status(422).json({
            message : "plz fill all the fields"
        });
    }
    try{
    // if Email is already exist in Database
    const userexist = await User.findOne({email});
    if(userexist)
    {
        return res.status(422).json({
            message : "do not register Yourself twice plz login not regisster"
        });
    }
    if(password !== cpassword)
    {
        return res.status(421).json({
            message : "Pass word is not matching"
        });
    }

    // or user is not Exist then create New instance 
    // const hashpassword = bcryptjs.hashSync(password,10);
    // const hashcpassword = bcryptjs.hashSync(cpassword,10); 

    const user = new User({name,email,phone,work,password,cpassword});
    // middleware from userSchema to hash the password
    const usersave = await user.save();
    if(usersave)
    {
        return res.status(200).json({
            message : "user register Successfully"
        });
    }   
}catch(err)
    {
            return res.status(500).json({
                message : "Some Error occur",
                err : err
        });
    }
    
})

// login Api 
router.post('/login',async (req,res)=>{
    let token;
    const {email,password} = req.body;
    if(!email,!password){

        return res.json({
            message : "please Enter Email Or Password"
        })
    }
    // check Email is exist or not
    try {
        const userexist = await User.findOne({email});

        if(userexist){
            const ismatch = await bcryptjs.compare(password,userexist.password); 

        if(ismatch)
        {
            token = await userexist.generateAuthToken();
            // console.log(token);
            // generated JWT is Stored in Cookie for 30 days
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                // httpOnly:true
            });
            console.log(token);
            
            return res.status(200).json({
                message : "User Login Successfully",
            });
        }
        else{
            return res.status(500).json({
                message : "User data Error"
            });
        }
        }
        else{
            return res.status(500).json({
                message : "Invalid Cretianls"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message : "Some Error occur",
            err : error
        });
    }
    
});

module.exports = router;