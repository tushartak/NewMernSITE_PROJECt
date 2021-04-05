const express = require('express')
const app = express()
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const port=process.env.PORT
require('./db/conn');
app.use(express.json()); //convert json into object

// middleware
app.use(require('./router/router'));
// app.use(require('./router/auth'));

const middleware = (req,res,next)=>{
    console.log("it is middleware");
    next();
}

app.listen(port, () => console.log(`Example app listening on port port!`))