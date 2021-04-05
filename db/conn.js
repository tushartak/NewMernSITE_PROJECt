const mongoose=require('mongoose');
const DB = process.env.DB; 
mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then((result) => {
    console.log("connection SuccessFully",result)
}).catch((err) => {
console.log("not connected",err) 
});
