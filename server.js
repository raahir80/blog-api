const express = require("express");
const { userRouter } = require("./routes/users/userRoutes");
const postRouter = require("./routes/posts/postRoutes");
const categoryRouter = require("./routes/categories/categoryRoutes");
const commentRouter = require("./routes/comments/commentRoute");

const dotenv = require("dotenv").config();
require("./config/dbConnect")
const app = express();

// middlewares
app.use(express.json()) // incoming payload
const userAuth ={
    isLogin:true,
    isAdmin:false,
};

app.use((req,res,next)=>{

    if(userAuth.isLogin){
        next();
    }else{
        return res.json({
            msg:"Invalid Login credentials"
        })
    }
})

//routes

//-----------
//users route
//-----------

app.use("/api/v1/users/",userRouter);   

//-------------
//post route
//-------------

app.use("/api/v1/posts",postRouter)



//-------------
//comments route
//-------------

app.use("/api/v1/comments",commentRouter);


//-------------
//category route
//-------------
app.use("/api/v1/categories",categoryRouter);


//Error handlers middleware

// Listen to server
const PORT =process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on ${PORT}`))