const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});
//  middleware tp hash the password
const bcryptjs = require('bcryptjs');
userSchema.pre('save',async function(next){
        console.log("pre Method")
    if(this.isModified('password')){
        this.password =bcryptjs.hashSync(this.password,12);
        this.cpassword =bcryptjs.hashSync(this.cpassword,12);
    }   
    next();
});

userSchema.methods.generateAuthToken = async function(){
try {
    // token is generate is created
    let usertoken = jwt.sign({_id:this._id},process.env.SECRET);
    this.tokens = this.tokens.concat({token:usertoken});
        await this.save();
        return usertoken;
} catch (error) {
    console.log(error);
}
};
const User = mongoose.model('USER',userSchema);
module.exports = User; 