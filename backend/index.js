// We need to support 3 routes for user authentication
// Allow user to sign up.
// Allow user to sign in.
// Allow user to update their information (firstName, lastName, password).

const express = require("express");
const cors=require('cors');
const bodyParser =require('body-parser')
const mainRouter = require("./routes/index")
const app=express();
app.use(cors());
app.use('/api/v1', mainRouter);
app.use(bodyParser.json())
//signup route 

// mainRouter.get('/signup',(req,res)=>{
//     res.send("signup endpoint hit");
// })

// mainRouter.get('/signin',(req,res)=>{
//     res.send("signin endpoint hit");
// })

// mainRouter.get('/update',(req,res)=>{
//     res.send("update endpoint hit");
// })

app.listen(3000);



