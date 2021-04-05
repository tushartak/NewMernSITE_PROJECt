// router file
const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');
const bcryptjs = require('bcryptjs');
// directory
// all page request

router.get('/',(req,res)=>{res.send("this is from routerjs")});
router.get('/aboutme', (req, res) => res.send('this is about page'));
router.get('/contact', (req, res) => res.send('this is Contact page'));
router.get('/signin', (req, res) => res.send('this is signin page'));
router.get('/register', (req, res) => res.send('this is Register page'));

// post request for form data stotred on db
//using Promises

// router.post('/register',(req,res)=>{
//     const {name ,email,phone,work,password,cpassword} = req.body;   //object destrcturting

//     // empty validation
//     if(!name || !email || !phone || !work || !password || !cpassword)
//     {  //here we can show error on page 
//         res.status(422).json({
//             error : "plz fill all documnet fileds"
//         })
//     }
    
//     // check User is exist Or Not wirh promises 
//     User.findOne({email}).then((userexist)=>{
//         if(userexist){
//             return res.status(422).json({
//                 message : "User Already Exist Plz Login Not Registered Yourself Twice"
//             })
//         }
//         //   if not then create new instance of UserSchema
//         const user = new User({name,email,phone,work,password,cpassword});
//         if(password !== cpassword)
//         {
//          return res.json({
//                 message : "pass does not match with confim password"
//             })
//         }
//         user.save().then(()=>{
//             res.status(201).json({
//                 message : "data is Stored In Our DAta base"
//             })
//         }).catch((err)=>{
//             res.status(500).json({
//                 message : "data is not  Stored In Our DAta base",
//                 err : err
//             })
//         })
//     }).catch(err => console.log(err));

//     // using Async Await
// });


// async Await
router.post('/register', async (req,res)=>{
    const {name ,email,phone,work,password,cpassword} = req.body;   //object destrcturting

    // empty validation
    if(!name || !email || !phone || !work || !password || !cpassword)
    {  //here we can show error on page 
        res.status(422).json({
            error : "plz fill all documnet fileds"
        })
    }
    try {
        // check User is exist Or Not wirh promises 
    
         const userexist = await User.findOne({email})
            if(userexist){
            return res.status(422).json({message : "User Already Exist Plz Login Not Registered Yourself Twice"})
         }
        //   if not then create new instance of UserSchema
         const hashPassword = bcryptjs.hashSync(password,10);
         const hashCPassword = bcryptjs.hashSync(cpassword,10);
        const user = new User({name,email,phone,work,password:hashPassword,cpassword:hashCPassword});
        const user_register = await user.save();
        if(user_register)
        {
            return res.json({
                message : "User Register Successfully"
            })
        }
    }catch (error) {
       console.log(error);
    }
});


// route for login
router.post('/login',async (req,res)=>{
    const {email,password} =req.body;
   
    if(!email || !password){
        return res.status(422).json({
            message : "please fill both Fields"
        })
    }
    try
    {
        const userexist = await User.findOne({email});
        const ismatch = await bcryptjs.compare(password,userexist.password);
        if(ismatch)
        {
        if(userexist)
        {
            res.json({
                message : "User Login Successfully..."
            });
        }
        else
        {
            return res.json({
                message : "Error cretinals"

            })
        }
    }
    else
    {
        return res.json({
            message : "Error..."

        })
    }
    }catch(err){
        res.json({
            message : "some error from catch",
            err: err
        });
    }
}) 
module.exports = router;
